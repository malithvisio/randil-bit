"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProtectedRoute from "@/components/providers/ProtectedRoute";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import { toast } from "react-hot-toast";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { storage } from "@/libs/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function DestinationManagement() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [destinationToDelete, setDestinationToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 3;
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [isAddingDestination, setIsAddingDestination] = useState(false);
  const [editingDestination, setEditingDestination] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    descriptionTop: "",
    descriptionBottom: "",
    status: "Active",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSecondaryImage, setSelectedSecondaryImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [secondaryPreviewUrl, setSecondaryPreviewUrl] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch destinations from the API when component mounts
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/destinations");

        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }

        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        toast.error("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          "Please select a valid image file (JPEG, PNG, GIF, or WebP)"
        );
        e.target.value = "";
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        toast.error("File size must be less than 5MB");
        e.target.value = "";
        return;
      }

      setSelectedImage(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };
  const handleSecondaryImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          "Please select a valid image file (JPEG, PNG, GIF, or WebP)"
        );
        e.target.value = "";
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        toast.error("File size must be less than 5MB");
        e.target.value = "";
        return;
      }

      setSelectedSecondaryImage(file);
      const fileUrl = URL.createObjectURL(file);
      setSecondaryPreviewUrl(fileUrl);
    }
  };
  // Upload image to Firebase Storage
  const uploadImage = async (file) => {
    if (!file) return null;

    try {
      // Create a unique filename
      const timestamp = Date.now();
      const uniqueName = `${timestamp}-${file.name.replace(/\s+/g, "_")}`;
      const storageRef = ref(storage, `destinations/${uniqueName}`);

      // Set metadata
      const metadata = {
        contentType: file.type || "image/jpeg",
        cacheControl: "public,max-age=3600",
      };

      // Start upload task
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Return a promise that resolves with the download URL
      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Progress monitoring
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress: ${progress.toFixed(2)}%`);
          },
          (error) => {
            // Error handling
            console.error("Error uploading image:", error);
            let errorMessage = "Failed to upload image";
            if (error.code === "storage/unauthorized") {
              errorMessage = "Permission denied: Check Firebase storage rules";
            } else if (error.code === "storage/canceled") {
              errorMessage = "Upload was canceled";
            } else if (error.code === "storage/unknown") {
              errorMessage = "Unknown error during upload";
            }
            reject(new Error(errorMessage));
          },
          async () => {
            // Upload completed successfully
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            } catch (error) {
              reject(error);
            }
          }
        );
      });
    } catch (error) {
      console.error("Error initializing upload:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      // Upload images
      const [mainImageUrl, secondaryImageUrl] = await Promise.all([
        uploadImage(selectedImage),
        uploadImage(selectedSecondaryImage),
      ]);

      const destinationData = {
        ...formData,
        image:
          mainImageUrl ||
          (editingDestination
            ? editingDestination.image
            : "/assets/images/destinations/default.jpg"),
        secondaryImage:
          secondaryImageUrl ||
          (editingDestination
            ? editingDestination.secondaryImage
            : "/assets/images/destinations/default.jpg"),
      };

      if (editingDestination) {
        // Update existing destination
        const response = await fetch(
          `/api/destinations/${editingDestination._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(destinationData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update destination");
        }

        // Fetch fresh data after updating destination
        const refreshResponse = await fetch("/api/destinations");
        if (!refreshResponse.ok) {
          throw new Error("Failed to refresh destinations list");
        }
        const freshData = await refreshResponse.json();
        setDestinations(freshData);

        toast.success("Destination updated successfully");
      } else {
        // Add new destination
        const response = await fetch("/api/destinations/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(destinationData),
        });

        if (!response.ok) {
          throw new Error("Failed to create destination");
        }
        await response.json();

        // Fetch fresh data after adding new destination
        const refreshResponse = await fetch("/api/destinations");
        if (!refreshResponse.ok) {
          throw new Error("Failed to refresh destinations list");
        }
        const freshData = await refreshResponse.json();
        setDestinations(freshData);

        toast.success("Destination added successfully");
      }

      resetForm();
    } catch (error) {
      console.error("Error saving destination:", error);
      toast.error(error.message || "Failed to save destination");
    } finally {
      setUploading(false);
    }
  };
  const handleEdit = (destination) => {
    setFormData({
      name: destination.name,
      descriptionTop: destination.descriptionTop,
      descriptionBottom: destination.descriptionBottom,
      status: destination.status,
    });
    setPreviewUrl(destination.image);
    setSecondaryPreviewUrl(destination.secondaryImage);
    setEditingDestination(destination);
    setIsAddingDestination(true);
  };
  // Handle showing delete modal
  const handleDeleteClick = (destination) => {
    setDestinationToDelete(destination);
    setShowDeleteModal(true);
  };
  // Handle actual deletion
  const handleDelete = async () => {
    if (!destinationToDelete) return;

    try {
      setIsDeleting(true);

      const response = await fetch(
        `/api/destinations/${destinationToDelete._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to delete destination");
      }

      setDestinations(
        destinations.filter((dest) => dest._id !== destinationToDelete._id)
      );

      toast.success("Destination deleted successfully");

      // Short delay before closing the modal for better UX
      setTimeout(() => {
        setShowDeleteModal(false);
        setDestinationToDelete(null);
        setIsDeleting(false);
      }, 500);
    } catch (error) {
      console.error("Error deleting destination:", error);
      toast.error("Failed to delete destination");
      setIsDeleting(false);
    }
  };

  const handleToggleStatus = async (destination) => {
    try {
      const response = await fetch(
        `/api/destinations/${destination._id}/toggle-status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: destination.status }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update destination status");
      }

      const updatedDestination = await response.json();

      setDestinations(
        destinations.map((dest) =>
          dest._id === updatedDestination._id ? updatedDestination : dest
        )
      );

      toast.success(`Destination marked as ${updatedDestination.status}`);
    } catch (error) {
      console.error("Error toggling destination status:", error);
      toast.error("Failed to update destination status");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      descriptionTop: "",
      descriptionBottom: "",
      status: "Active",
    });
    setSelectedImage(null);
    setSelectedSecondaryImage(null);
    setPreviewUrl(null);
    setSecondaryPreviewUrl(null);
    setIsAddingDestination(false);
  };

  return (
    <ProtectedRoute adminOnly={true}>
      <LayoutAdmin headerStyle={1} footerStyle={1}>
        <section className="profile-dashboard">
          <div className="tf-container blog-form-container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="wrap-form">
                  <div className="heading-form">
                    <h3 className="fw-bold mb-4">Destination Management</h3>
                    <p className="mb-4">
                      Manage your tour destinations and locations
                    </p>

                    {!isAddingDestination && (
                      <button
                        className="btn btn-primary w-100 py-3 mb-4"
                        onClick={() => setIsAddingDestination(true)}
                      >
                        <i className="fa fa-plus-circle me-2"></i>
                        Add New Destination
                      </button>
                    )}
                  </div>
                  {/* Add/Edit Form */}
                  {isAddingDestination && (
                    <form onSubmit={handleSubmit} className="form-box">
                      <div className="form-group mb-4">
                        <label htmlFor="name" className="form-label">
                          Destination Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Enter destination name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="descriptionTop" className="form-label">
                          Top Description*
                        </label>
                        <textarea
                          id="descriptionTop"
                          name="descriptionTop"
                          className="form-control"
                          placeholder="Enter main description"
                          value={formData.descriptionTop}
                          onChange={handleInputChange}
                          rows={4}
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label
                          htmlFor="descriptionBottom"
                          className="form-label"
                        >
                          Bottom Description*
                        </label>
                        <textarea
                          id="descriptionBottom"
                          name="descriptionBottom"
                          className="form-control"
                          placeholder="Enter additional description"
                          value={formData.descriptionBottom}
                          onChange={handleInputChange}
                          rows={4}
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="status" className="form-label">
                          Status
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="form-control form-select"
                          value={formData.status}
                          onChange={handleInputChange}
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>{" "}
                      <div className="form-group mb-4">
                        <label htmlFor="image" className="form-label">
                          Main Destination Image*
                        </label>
                        <div className="file-upload-container position-relative">
                          <input
                            type="file"
                            id="image"
                            name="image"
                            className="file-input"
                            accept="image/jpeg,image/png,image/gif,image/webp"
                            onChange={handleImageChange}
                            required={!editingDestination}
                          />
                          <label htmlFor="image" className="file-upload-label">
                            <i className="fas fa-cloud-upload-alt me-2"></i>
                            Choose Main Image
                          </label>
                          {previewUrl && (
                            <div className="selected-file mt-2">
                              <span className="text-success">
                                Main image existing
                              </span>
                              <div className="mt-2 text-center">
                                <Image
                                  src={previewUrl}
                                  alt="Preview"
                                  width={200}
                                  height={150}
                                  className="img-thumbnail"
                                  style={{
                                    maxHeight: "200px",
                                    width: "auto",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          <p className="small text-muted mt-1">
                            Upload a high-quality main image for your
                            destination (max 5MB)
                          </p>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="secondaryImage" className="form-label">
                          Secondary Destination Image*
                        </label>
                        <div className="file-upload-container position-relative">
                          <input
                            type="file"
                            id="secondaryImage"
                            name="secondaryImage"
                            className="file-input"
                            accept="image/jpeg,image/png,image/gif,image/webp"
                            onChange={handleSecondaryImageChange}
                            required={!editingDestination}
                          />
                          <label
                            htmlFor="secondaryImage"
                            className="file-upload-label"
                          >
                            <i className="fas fa-cloud-upload-alt me-2"></i>
                            Choose Secondary Image
                          </label>
                          {secondaryPreviewUrl && (
                            <div className="selected-file mt-2">
                              <span className="text-success">
                                Secondary image existing
                              </span>
                              <div className="mt-2 text-center">
                                <Image
                                  src={secondaryPreviewUrl}
                                  alt="Secondary Preview"
                                  width={200}
                                  height={150}
                                  className="img-thumbnail"
                                  style={{
                                    maxHeight: "200px",
                                    width: "auto",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          <p className="small text-muted mt-1">
                            Upload a high-quality secondary image for your
                            destination (max 5MB)
                          </p>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="d-flex gap-3">
                          {" "}
                          <button
                            type="button"
                            className="btn btn-danger w-100 py-3"
                            onClick={resetForm}
                            disabled={uploading}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary w-100 py-3"
                            disabled={uploading}
                          >
                            {uploading ? (
                              <span>
                                <i className="fa fa-spinner fa-spin me-2"></i>
                                {editingDestination
                                  ? "Updating..."
                                  : "Adding..."}
                              </span>
                            ) : (
                              <span>
                                {editingDestination
                                  ? "Update Destination"
                                  : "Add Destination"}
                              </span>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}{" "}
                  {/* Destinations Table */}
                  {!isAddingDestination && (
                    <div className="destination-table-container">
                      {loading ? (
                        <div className="text-center py-5">
                          <i className="fa fa-spinner fa-spin fa-2x"></i>
                          <p className="mt-2">Loading destinations...</p>
                        </div>
                      ) : destinations.length === 0 ? (
                        <div className="text-center py-5">
                          <i className="fa fa-map-marker-alt fa-2x mb-3"></i>
                          <p>
                            No destinations found. Add your first destination!
                          </p>
                        </div>
                      ) : (
                        <>
                          <table className="table destination-table">
                            <thead>
                              <tr>
                                <th style={{ width: "80px" }}>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {destinations
                                .slice(
                                  indexOfFirstDestination,
                                  indexOfLastDestination
                                )
                                .map((destination) => (
                                  <tr key={destination._id}>
                                    <td className="align-middle">
                                      {destination.image ? (
                                        <div className="image-wrapper position-relative">
                                          <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="rounded shadow-sm"
                                            style={{
                                              width: "60px",
                                              height: "60px",
                                              objectFit: "cover",
                                              border: "2px solid #fff",
                                            }}
                                            onError={(e) => {
                                              console.error(
                                                "Failed to load image:",
                                                destination.image
                                              );
                                              e.target.onerror = null;
                                              e.target.src =
                                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='%23f1f1f1'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='8' fill='%23999' text-anchor='middle' dy='.3em'%3EImage not found%3C/text%3E%3C/svg%3E";
                                            }}
                                          />
                                        </div>
                                      ) : (
                                        <div
                                          className="image-wrapper bg-light rounded d-flex align-items-center justify-content-center shadow-sm"
                                          style={{
                                            width: "60px",
                                            height: "60px",
                                            border: "2px solid #e9ecef",
                                          }}
                                        >
                                          <i className="fa fa-image text-muted"></i>
                                        </div>
                                      )}
                                    </td>
                                    <td>{destination.name}</td>
                                    <td
                                      className="text-truncate"
                                      style={{ maxWidth: "300px" }}
                                    >
                                      {destination.descriptionTop}
                                    </td>
                                    <td>
                                      <span
                                        className={`status-badge ${destination.status}`}
                                      >
                                        {destination.status}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex gap-2">
                                        <button
                                          className="btn btn-sm btn-primary"
                                          onClick={() =>
                                            handleEdit(destination)
                                          }
                                          title="Edit Destination"
                                        >
                                          <i className="fa fa-edit"></i>
                                        </button>
                                        <button
                                          className="btn btn-sm btn-danger"
                                          onClick={() =>
                                            handleDeleteClick(destination)
                                          }
                                          title="Delete Destination"
                                        >
                                          <i className="fa fa-trash"></i>
                                        </button>
                                        <button
                                          onClick={() =>
                                            handleToggleStatus(destination)
                                          }
                                          className={`btn btn-sm ${
                                            destination.status === "Active"
                                              ? "btn-success"
                                              : "btn-warning"
                                          }`}
                                          title={`Click to mark as ${
                                            destination.status === "Active"
                                              ? "Inactive"
                                              : "Active"
                                          }`}
                                        >
                                          <i
                                            className={`fa fa-${
                                              destination.status === "Active"
                                                ? "check"
                                                : "ban"
                                            }`}
                                          ></i>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>{" "}
                          {/* Pagination */}
                          <div className="pagination mt-4 d-flex justify-content-center align-items-center">
                            <button
                              className="btn btn-outline-primary me-2"
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage === 1}
                            >
                              &laquo;
                            </button>
                            <span className="mx-3">
                              Page {currentPage} of{" "}
                              {Math.ceil(
                                destinations.length / destinationsPerPage
                              )}
                            </span>
                            <button
                              className="btn btn-outline-primary ms-2"
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={
                                currentPage ===
                                Math.ceil(
                                  destinations.length / destinationsPerPage
                                )
                              }
                            >
                              &raquo;
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  {/* Delete Confirmation Modal */}{" "}
                  <Modal
                    show={showDeleteModal}
                    onHide={() => !isDeleting && setShowDeleteModal(false)}
                    backdrop={isDeleting ? "static" : true}
                    keyboard={!isDeleting}
                  >
                    <Modal.Header closeButton={!isDeleting}>
                      <Modal.Title>
                        {isDeleting
                          ? "Deleting Destination..."
                          : "Confirm Delete"}
                      </Modal.Title>
                    </Modal.Header>{" "}
                    <Modal.Body>
                      {isDeleting ? (
                        <div className="text-center py-3">
                          <div
                            className="spinner-border text-danger mb-3"
                            role="status"
                          >
                            <span className="visually-hidden">Deleting...</span>
                          </div>
                          <p>
                            Deleting destination "{destinationToDelete?.name}
                            "...
                          </p>
                        </div>
                      ) : (
                        <>
                          Are you sure you want to delete the destination &quot;
                          {destinationToDelete?.name}&quot;? This action cannot
                          be undone.
                        </>
                      )}
                    </Modal.Body>
                    <Modal.Footer>
                      {" "}
                      <Button
                        variant="secondary"
                        onClick={() => setShowDeleteModal(false)}
                        disabled={isDeleting}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="danger"
                        onClick={handleDelete}
                        disabled={isDeleting}
                      >
                        {isDeleting ? (
                          <>
                            <i className="fa fa-spinner fa-spin me-2"></i>
                            Deleting...
                          </>
                        ) : (
                          "Delete"
                        )}
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <style jsx global>{`
            .file-upload-container {
              position: relative;
              width: 100%;
              min-height: 45px;
              margin-bottom: 1rem;
            }

            .file-input {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
              z-index: 3;
            }

            .file-upload-label {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              padding: 12px;
              background-color: #f8f9fa;
              border: 2px dashed #ced4da;
              border-radius: 4px;
              cursor: pointer;
              transition: all 0.3s ease;
              font-weight: 500;
            }

            .file-upload-label:hover {
              background-color: #e9ecef;
              border-color: #adb5bd;
            }

            .selected-file {
              padding: 6px;
              background-color: rgba(40, 167, 69, 0.1);
              border-radius: 4px;
            }

            .destination-table-container {
              overflow-x: auto;
              width: 100%;
              -webkit-overflow-scrolling: touch;
            }

            .destination-table {
              width: 100%;
              border-collapse: collapse;
              min-width: 800px;
            }

            .destination-table th,
            .destination-table td {
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #e5e7eb;
            }

            .destination-table th {
              font-weight: 600;
              background-color: #f9fafb;
              color: #4a5568;
            }

            .destination-table tr:hover {
              background-color: #f8fafc;
            }

            .status-badge {
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 500;
              display: inline-block;
            }

            .status-badge.Active {
              background-color: #dcfce7;
              color: #166534;
            }

            .status-badge.Inactive {
              background-color: #fef9c3;
              color: #854d0e;
            }

            /* Delete modal styles */
            .modal-backdrop.show {
              opacity: 0.7;
            }

            .modal-content {
              border: none;
              border-radius: 8px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            }

            .modal-header {
              border-bottom: 1px solid #eaeaea;
              padding: 1rem 1.5rem;
            }

            .modal-body {
              padding: 1.5rem;
            }

            .modal-footer {
              border-top: 1px solid #eaeaea;
              padding: 1rem 1.5rem;
            }

            .spinner-border.text-danger {
              width: 3rem;
              height: 3rem;
              color: #dc3545 !important;
            }

            @media (max-width: 768px) {
              .blog-form-container {
                padding: 0 10px !important;
                margin: 0 !important;
                max-width: 100% !important;
                width: 100% !important;
              }

              .row {
                margin: 0 !important;
              }

              .col-lg-8 {
                padding: 0 !important;
                max-width: 100% !important;
                flex: 0 0 100% !important;
              }

              .wrap-form {
                border-radius: 8px !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
                padding: 20px 15px !important;
                margin-top: 10px !important;
                margin-bottom: 10px !important;
                background: white !important;
              }

              .profile-dashboard {
                padding: 0 !important;
                margin-top: 0 !important;
              }

              .form-box {
                padding: 0 !important;
              }

              .heading-form {
                padding: 0 !important;
              }

              .form-control {
                margin-bottom: 15px !important;
                border: 1px solid #ddd !important;
                border-radius: 4px !important;
              }

              .btn-primary {
                width: 100% !important;
                padding: 12px !important;
                border-radius: 4px !important;
                font-weight: 500 !important;
                position: relative !important;
                z-index: 10 !important;
                overflow: visible !important;
              }

              input[type="file"] {
                cursor: pointer !important;
                height: auto !important;
                min-height: 38px !important;
              }
            }
          `}</style>
        </section>
      </LayoutAdmin>
    </ProtectedRoute>
  );
}
