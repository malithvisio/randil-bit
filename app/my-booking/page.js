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

export default function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 3;
  // Calculate indexes for slicing
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterOptions = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending" },
    { id: "processing", label: "Processing" },
    { id: "confirmed", label: "Confirmed" },
    { id: "cancelled", label: "Cancelled" },
  ];

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/my-booking");
      return;
    }
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/bookings");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch bookings");
        }
        setBookings(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchBookings();
    }
  }, [status, router]);

  const handleCancelBooking = async (bookingId) => {
    if (!showCancelModal) {
      setSelectedBooking(bookings.find((b) => b._id === bookingId));
      setShowCancelModal(true);
      return;
    }

    try {
      setIsCancelling(true);
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "cancelled" }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to cancel booking");
      }

      // Update the booking status in the local state
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: "cancelled" }
            : booking
        )
      );
      toast.success("Booking cancelled successfully");
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast.error(error.message);
    } finally {
      setIsCancelling(false);
      setShowCancelModal(false);
      setSelectedBooking(null);
    }
  };

  const handleProcessBooking = async (bookingId) => {
    if (!showProcessModal) {
      setSelectedBooking(bookings.find((b) => b._id === bookingId));
      setShowProcessModal(true);
      return;
    }

    try {
      setIsProcessing(true);
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "processing" }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to update booking");
      }

      // Update the booking status in the local state
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: "processing" }
            : booking
        )
      );
      toast.success("Booking status updated to processing");
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
      setShowProcessModal(false);
      setSelectedBooking(null);
    }
  };

  const handleApproveBooking = async (bookingId) => {
    if (!showApproveModal) {
      setSelectedBooking(bookings.find((b) => b._id === bookingId));
      setShowApproveModal(true);
      return;
    }

    try {
      setIsApproving(true);
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "confirmed" }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to approve booking");
      }

      // Update the booking status in the local state
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: "confirmed" }
            : booking
        )
      );
      toast.success("Booking approved successfully");
    } catch (error) {
      console.error("Error approving booking:", error);
      toast.error(error.message);
    } finally {
      setIsApproving(false);
      setShowApproveModal(false);
      setSelectedBooking(null);
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
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };
  // First filter the bookings
  const filteredBookings = bookings.filter((booking) => {
    if (statusFilter === "all") return true;
    return booking.status.toLowerCase() === statusFilter.toLowerCase();
  });

  // Then paginate the filtered results
  const totalFilteredBookings = filteredBookings.length;
  const totalPages = Math.ceil(totalFilteredBookings / bookingsPerPage);
  const currentBookings = filteredBookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  return (
    <ProtectedRoute adminOnly={true}>
      <LayoutAdmin headerStyle={1} footerStyle={1}>
        <section className="profile-dashboard">
          <div className="inner-header mb-40">
            <h3 className="title">My Bookings</h3>
            <p className="des">View and manage your tour bookings</p>

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
          <div className="my-booking-wrap">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-red-500 text-lg mb-4">{error}</p>
                <Link
                  href="/packages"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Browse Available Tours
                </Link>
              </div>
            ) : bookings.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No bookings found</p>
                <Link
                  href="/packages"
                  className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                >
                  Browse Available Tours
                </Link>
              </div>
            ) : (
              <div className={styles.tableContainer}>
                <table className={`${styles.bookingTable} text-left`}>
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4">Booking ID</th>
                      <th className="p-4">Package Info</th>
                      <th className="p-4">Guest Info</th>
                      <th className="p-4">Dates</th>
                      <th className="p-4">Contact Info</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="border-b hover:bg-gray-50"
                      >
                        {" "}
                        <td className="p-4">
                          <div>
                            <p className="font-medium">
                              #{booking._id.slice(-8)}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="font-medium">
                              {booking.packageTitle || "N/A"}
                            </p>
                            <p className="text-sm text-gray-600">
                              Type: {booking.tourPackage || "N/A"}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            {" "}
                            <p>
                              {booking.firstName} {booking.lastName}
                            </p>
                            <p className="text-sm text-gray-600">
                              Created: {formatDate(booking.createdAt)}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p>
                              <span className="font-medium">Check-in:</span>
                              <br />
                              {formatDate(booking.arrivalDate)}
                            </p>
                            <p>
                              <span className="font-medium">Check-out:</span>
                              <br />
                              {formatDate(booking.departureDate)}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p>{booking.email}</p>
                            <p>{booking.contactNumber}</p>
                            <p>{booking.country}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p>{booking.adults} Adults</p>
                            {booking.children > 0 && (
                              <p>{booking.children} Children</p>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(
                              booking.status
                            )}`}
                          >
                            {booking.status.charAt(0).toUpperCase() +
                              booking.status.slice(1)}
                          </span>
                        </td>{" "}
                        <td className="p-4">
                          <div className={styles.actionButtons}>
                            {" "}
                            {booking.message && (
                              <button
                                className="bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm px-3 py-1 rounded"
                                onClick={() => {
                                  setSelectedBooking(booking);
                                  setShowNoteModal(true);
                                }}
                              >
                                View Note
                              </button>
                            )}
                            {booking.status === "pending" && (
                              <>
                                <button
                                  className="bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm px-3 py-1 rounded"
                                  onClick={() =>
                                    handleProcessBooking(booking._id)
                                  }
                                >
                                  Mark as Processing
                                </button>
                                <button
                                  className="bg-red-100 text-red-600 hover:bg-red-200 text-sm px-3 py-1 rounded"
                                  onClick={() =>
                                    handleCancelBooking(booking._id)
                                  }
                                >
                                  Cancel
                                </button>
                              </>
                            )}
                            {booking.status === "processing" && (
                              <button
                                className="bg-green-100 text-green-600 hover:bg-green-200 text-sm px-3 py-1 rounded"
                                onClick={() =>
                                  handleApproveBooking(booking._id)
                                }
                              >
                                Approve
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {/* Pagination Controls */}{" "}
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
          {/* Add some styles for the pagination and a comment */}
          <style jsx>{`
            .pagination button {
              min-width: 40px;
            }
            .pagination button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
          `}</style>
          {/* Modals for processing, cancelling, and approving bookings */}
          <Modal
            show={showProcessModal}
            onHide={() => !isProcessing && setShowProcessModal(false)}
            backdrop={isProcessing ? "static" : true}
            keyboard={!isProcessing}
          >
            <Modal.Header closeButton={!isProcessing}>
              <Modal.Title>
                {isProcessing ? "Updating Booking..." : "Confirm Status Update"}
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
                  <p>Updating booking status to processing...</p>
                </div>
              ) : (
                <>Are you sure you want to mark this booking as processing?</>
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
                onClick={() => handleProcessBooking(selectedBooking?._id)}
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
          <Modal
            show={showCancelModal}
            onHide={() => !isCancelling && setShowCancelModal(false)}
            backdrop={isCancelling ? "static" : true}
            keyboard={!isCancelling}
          >
            <Modal.Header closeButton={!isCancelling}>
              <Modal.Title>
                {isCancelling
                  ? "Cancelling Booking..."
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
                  <p>Cancelling booking #{selectedBooking?._id.slice(-8)}...</p>
                </div>
              ) : (
                <>
                  Are you sure you want to cancel this booking? This action
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
                onClick={() => handleCancelBooking(selectedBooking?._id)}
                disabled={isCancelling}
              >
                {isCancelling ? (
                  <>
                    <i className="fa fa-spinner fa-spin me-2"></i>
                    Cancelling...
                  </>
                ) : (
                  "Cancel Booking"
                )}
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={showApproveModal}
            onHide={() => !isApproving && setShowApproveModal(false)}
            backdrop={isApproving ? "static" : true}
            keyboard={!isApproving}
          >
            <Modal.Header closeButton={!isApproving}>
              <Modal.Title>
                {isApproving ? "Approving Booking..." : "Confirm Approval"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {isApproving ? (
                <div className="text-center py-3">
                  <div
                    className="spinner-border text-success mb-3"
                    role="status"
                  >
                    <span className="visually-hidden">Approving...</span>
                  </div>
                  <p>Approving booking #{selectedBooking?._id.slice(-8)}...</p>
                </div>
              ) : (
                <>Are you sure you want to approve this booking?</>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowApproveModal(false)}
                disabled={isApproving}
              >
                Cancel
              </Button>
              <Button
                variant="success"
                onClick={() => handleApproveBooking(selectedBooking?._id)}
                disabled={isApproving}
              >
                {isApproving ? (
                  <>
                    <i className="fa fa-spinner fa-spin me-2"></i>
                    Approving...
                  </>
                ) : (
                  "Approve"
                )}
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Note Viewing Modal */}
          <Modal
            show={showNoteModal}
            onHide={() => setShowNoteModal(false)}
            backdrop={true}
            keyboard={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>Booking Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="p-3">
                <h6 className="text-gray-700 mb-2">
                  Note for Booking #{selectedBooking?._id.slice(-8)}
                </h6>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {selectedBooking?.message}
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
