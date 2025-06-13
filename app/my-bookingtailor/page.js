"use client";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./my-booking.module.css";
import ProtectedRoute from "@/components/providers/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";

export default function TourRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 3;
  // Calculate indexes for slicing
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterOptions = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending" },
    { id: "processing", label: "Processing" },
    { id: "completed", label: "Completed" },
    { id: "cancelled", label: "Cancelled" },
  ];

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/my-bookingtailor");
      return;
    }
    const fetchTourRequests = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/tailormade");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch tour requests");
        }
        setRequests(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching tour requests:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchTourRequests();
    }
  }, [status, router]);
  const handleCancelRequest = async (requestId) => {
    if (!showCancelModal) {
      setSelectedRequest(requests.find((r) => r._id === requestId));
      setShowCancelModal(true);
      return;
    }

    try {
      setIsCancelling(true);
      const response = await fetch(`/api/tailormade/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "cancelled" }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to cancel tour request");
      }

      // Update the request status in the local state
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId
            ? { ...request, status: "cancelled" }
            : request
        )
      );
      toast.success("Tour request cancelled successfully");
    } catch (error) {
      console.error("Error cancelling tour request:", error);
      toast.error(error.message);
    } finally {
      setIsCancelling(false);
      setShowCancelModal(false);
      setSelectedRequest(null);
    }
  };

  const handleProcessRequest = async (requestId) => {
    if (!showProcessModal) {
      setSelectedRequest(requests.find((r) => r._id === requestId));
      setShowProcessModal(true);
      return;
    }

    try {
      setIsProcessing(true);
      const response = await fetch(`/api/tailormade/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "processing" }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to update tour request");
      }

      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId
            ? { ...request, status: "processing" }
            : request
        )
      );
      toast.success("Tour request status updated to processing");
    } catch (error) {
      console.error("Error updating tour request:", error);
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
      setShowProcessModal(false);
      setSelectedRequest(null);
    }
  };

  const handleCompleteRequest = async (requestId) => {
    if (!showCompleteModal) {
      setSelectedRequest(requests.find((r) => r._id === requestId));
      setShowCompleteModal(true);
      return;
    }

    try {
      setIsCompleting(true);
      const response = await fetch(`/api/tailormade/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "completed" }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to complete tour request");
      }

      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId
            ? { ...request, status: "completed" }
            : request
        )
      );
      toast.success("Tour request marked as completed");
    } catch (error) {
      console.error("Error completing tour request:", error);
      toast.error(error.message);
    } finally {
      setIsCompleting(false);
      setShowCompleteModal(false);
      setSelectedRequest(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const filteredRequests = requests.filter((request) => {
    if (statusFilter === "all") return true;
    return request.status.toLowerCase() === statusFilter.toLowerCase();
  });

  // Then paginate the filtered results
  const totalFilteredRequests = filteredRequests.length;
  const totalPages = Math.ceil(totalFilteredRequests / requestsPerPage);
  const currentRequests = filteredRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  return (
    <ProtectedRoute adminOnly={true}>
      <LayoutAdmin headerStyle={1} footerStyle={1}>
        <section className="profile-dashboard">
          <div className="inner-header mb-40">
            <h3 className="title">My Tour Requests</h3>
            <p className="des">
              View and manage your tailor-made tour requests
            </p>

            <div className={styles.filterSection}>
              <div className={styles.filterList}>
                {filterOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`${styles.filterItem} ${
                      statusFilter === option.id ? styles.active : ""
                    }`}
                    onClick={() => setStatusFilter(option.id)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tour-requests-wrap">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-red-500 text-lg mb-4">{error}</p>
                <Link
                  href="/tailormade"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Create New Tour Request
                </Link>
              </div>
            ) : requests.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No tour requests found</p>
                <Link
                  href="/tailormade"
                  className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                >
                  Create New Tour Request
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4">Request Details</th>
                      <th className="p-4">Dates</th>
                      <th className="p-4">Travel Info</th>
                      <th className="p-4">Preferences</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRequests.map((request) => (
                      <tr
                        key={request._id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-4">
                          <div>
                            <p className="font-medium">
                              #{request._id.slice(-8)}
                            </p>
                            <p>{request.name}</p>
                            <p className="text-sm text-gray-600">
                              Created: {formatDate(request.createdAt)}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p>
                              <span className="font-medium">Arrival:</span>
                              <br />
                              {formatDate(request.arrivalDate)}
                            </p>
                            <p>
                              <span className="font-medium">Departure:</span>
                              <br />
                              {formatDate(request.departureDate)}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p>
                              <span className="font-medium">Destination:</span>
                              <br />
                              {request.destination}
                            </p>
                            <p>
                              <span className="font-medium">Guests:</span>
                              <br />
                              {request.adults} Adults
                              {request.children > 0 &&
                                `, ${request.children} Children`}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p>
                              <span className="font-medium">Hotel:</span>
                              <br />
                              {request.hotelPreference}
                            </p>
                            <p>
                              <span className="font-medium">Budget:</span>
                              <br />
                              {request.budget}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span
                            className={
                              "px-3 py-1 rounded-full text-sm font-medium " +
                              getStatusBadgeClass(request.status)
                            }
                          >
                            {request.status.charAt(0).toUpperCase() +
                              request.status.slice(1)}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            {" "}
                            {request.additionalRequests && (
                              <button
                                className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1"
                                onClick={() => {
                                  setSelectedRequest(request);
                                  setShowNoteModal(true);
                                }}
                              >
                                View Notes
                              </button>
                            )}
                            {request.status === "pending" && (
                              <>
                                <button
                                  className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1 block"
                                  onClick={() =>
                                    handleProcessRequest(request._id)
                                  }
                                >
                                  Mark as Processing
                                </button>
                                <button
                                  className="text-red-600 hover:text-red-800 text-sm px-2 py-1 block"
                                  onClick={() =>
                                    handleCancelRequest(request._id)
                                  }
                                >
                                  Cancel
                                </button>
                              </>
                            )}
                            {request.status === "processing" && (
                              <button
                                className="text-green-600 hover:text-green-800 text-sm px-2 py-1 block"
                                onClick={() =>
                                  handleCompleteRequest(request._id)
                                }
                              >
                                Mark as Completed
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}{" "}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {/* Pagination controls */}
          {/* {totalPages > 1 && (
            <div className="mt-4 flex justify-center">
              <nav>
                <ul className="flex list-none">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className="mx-1">
                      <button
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          currentPage === index + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )} */}{" "}
          <div className="pagination mt-4 d-flex justify-content-center align-items-center">
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
            <span className="mx-3">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-outline-primary ms-2"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &raquo;
            </button>
          </div>
          <style jsx>{`
            .pagination button {
              min-width: 40px;
            }
            .pagination button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
          `}</style>
          {/* Process Request Modal */}
          <Modal
            show={showProcessModal}
            onHide={() => !isProcessing && setShowProcessModal(false)}
            backdrop={isProcessing ? "static" : true}
            keyboard={!isProcessing}
          >
            <Modal.Header closeButton={!isProcessing}>
              <Modal.Title>
                {isProcessing ? "Updating Request..." : "Confirm Status Update"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {isProcessing ? (
                <div className="text-center py-3">
                  <div
                    className="spinner-border text-primary mb-3"
                    role="status"
                  >
                    <span className="visually-hidden">Updating...</span>
                  </div>
                  <p>Updating request status to processing...</p>
                </div>
              ) : (
                <>
                  Are you sure you want to mark this tour request as processing?
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowProcessModal(false)}
                disabled={isProcessing}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => handleProcessRequest(selectedRequest?._id)}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <i className="fa fa-spinner fa-spin me-2"></i>
                    Updating...
                  </>
                ) : (
                  "Confirm"
                )}
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Cancel Request Modal */}
          <Modal
            show={showCancelModal}
            onHide={() => !isCancelling && setShowCancelModal(false)}
            backdrop={isCancelling ? "static" : true}
            keyboard={!isCancelling}
          >
            <Modal.Header closeButton={!isCancelling}>
              <Modal.Title>
                {isCancelling
                  ? "Cancelling Request..."
                  : "Confirm Cancellation"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {isCancelling ? (
                <div className="text-center py-3">
                  <div
                    className="spinner-border text-danger mb-3"
                    role="status"
                  >
                    <span className="visually-hidden">Cancelling...</span>
                  </div>
                  <p>
                    Cancelling tour request #{selectedRequest?._id.slice(-8)}...
                  </p>
                </div>
              ) : (
                <>
                  Are you sure you want to cancel this tour request? This action
                  cannot be undone.
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowCancelModal(false)}
                disabled={isCancelling}
              >
                Back
              </Button>
              <Button
                variant="danger"
                onClick={() => handleCancelRequest(selectedRequest?._id)}
                disabled={isCancelling}
              >
                {isCancelling ? (
                  <>
                    <i className="fa fa-spinner fa-spin me-2"></i>
                    Cancelling...
                  </>
                ) : (
                  "Cancel Request"
                )}
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Complete Request Modal */}
          <Modal
            show={showCompleteModal}
            onHide={() => !isCompleting && setShowCompleteModal(false)}
            backdrop={isCompleting ? "static" : true}
            keyboard={!isCompleting}
          >
            <Modal.Header closeButton={!isCompleting}>
              <Modal.Title>
                {isCompleting ? "Completing Request..." : "Confirm Completion"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {isCompleting ? (
                <div className="text-center py-3">
                  <div
                    className="spinner-border text-success mb-3"
                    role="status"
                  >
                    <span className="visually-hidden">Completing...</span>
                  </div>
                  <p>
                    Marking tour request #{selectedRequest?._id.slice(-8)} as
                    completed...
                  </p>
                </div>
              ) : (
                <>
                  Are you sure you want to mark this tour request as completed?
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowCompleteModal(false)}
                disabled={isCompleting}
              >
                Cancel
              </Button>
              <Button
                variant="success"
                onClick={() => handleCompleteRequest(selectedRequest?._id)}
                disabled={isCompleting}
              >
                {isCompleting ? (
                  <>
                    <i className="fa fa-spinner fa-spin me-2"></i>
                    Completing...
                  </>
                ) : (
                  "Complete Request"
                )}
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Note Modal */}
          <Modal
            show={showNoteModal}
            onHide={() => setShowNoteModal(false)}
            backdrop={true}
            keyboard={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>Additional Requests</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="p-3">
                <h6 className="text-gray-700 mb-2">
                  Additional Requests for Tour #{selectedRequest?._id.slice(-8)}
                </h6>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {selectedRequest?.additionalRequests}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowNoteModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
      </LayoutAdmin>
    </ProtectedRoute>
  );
}
