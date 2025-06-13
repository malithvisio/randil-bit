"use client";

import { useState, useEffect } from "react";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import ProtectedRoute from "@/components/providers/ProtectedRoute";
import Link from "next/link";
import { toast } from "react-hot-toast";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import dynamic from "next/dynamic";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/libs/firebase";

// Dynamic import of RichTextEditor
const RichTextEditor = dynamic(
  () => import("../add-blog/components/BlogEditor"),
  {
    ssr: false,
    loading: () => <p>Loading Editor...</p>,
  }
);

export default function MyFavorite() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 7;

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [formData, setFormData] = useState({
    title: "",
    content: "<p>Start writing your blog content here...</p>",
    tags: "",
    category: "",
    image: null,
  });
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log("Fetched blogs data:", data);
        // Make sure we have image URLs in the data
        const blogsWithImages = data.map((blog) => {
          console.log(
            "Blog image URL:",
            blog.imageUrl || blog.image || "No image"
          );
          return {
            ...blog,
            imageUrl: blog.imageUrl || blog.image, // Normalize the image URL field
          };
        });
        setBlogs(blogsWithImages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.title.trim()) {
        throw new Error("Blog title is required");
      }
      if (!formData.content || formData.content === "<p><br></p>") {
        throw new Error("Blog content is required");
      }

      let imageUrl = editingBlog?.imageUrl || null;

      // Upload image if new one is selected
      if (formData.image) {
        const timestamp = Date.now();
        const storageRef = ref(
          storage,
          `blogs/${timestamp}_${formData.image.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, formData.image);

        // Handle upload progress
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            throw error;
          }
        );

        try {
          // Wait for upload to complete
          await uploadTask;
          imageUrl = await getDownloadURL(storageRef);
          console.log("New image uploaded successfully:", imageUrl);
        } catch (uploadError) {
          console.error("Error uploading image:", uploadError);
          throw new Error("Failed to upload image: " + uploadError.message);
        }
      } else {
        console.log("Using existing image URL:", imageUrl);
      }

      const blogData = {
        title: formData.title,
        content: formData.content,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        category: formData.category,
        imageUrl,
      };

      // Prepare FormData for submission
      const submitFormData = new FormData();
      submitFormData.append("title", blogData.title);
      submitFormData.append("content", blogData.content);
      submitFormData.append("category", blogData.category);
      submitFormData.append("tags", blogData.tags.join(","));
      if (imageUrl) {
        console.log("Saving image URL:", imageUrl);
        submitFormData.append("imageUrl", imageUrl); // Changed from "image" to "imageUrl" to match the field name
        submitFormData.append("image", imageUrl); // Keep this for backward compatibility
      }

      let response;
      if (editingBlog) {
        // Update existing blog
        response = await fetch(`/api/blogs/${editingBlog._id}`, {
          method: "PUT",
          body: submitFormData,
        });
      } else {
        // Create new blog
        response = await fetch("/api/blogs", {
          method: "POST",
          body: submitFormData,
        });
      }

      if (!response.ok) {
        throw new Error("Failed to save blog");
      }

      const savedBlog = await response.json();

      // After successful save/update, fetch fresh data
      try {
        const refreshResponse = await fetch("/api/blogs", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });
        if (refreshResponse.ok) {
          const refreshedData = await refreshResponse.json();
          setBlogs(refreshedData);
        }
      } catch (refreshError) {
        console.error("Error refreshing blogs:", refreshError);
      }
      toast.success(
        editingBlog ? "Blog updated successfully" : "Blog created successfully"
      );
      resetForm();
      // Reset to first page after adding/editing a blog
      setCurrentPage(1);
    } catch (error) {
      console.error("Error saving blog:", error);
      toast.error(error.message || "Failed to save blog");
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      content: blog.content,
      tags: blog.tags?.join(", ") || "",
      category: blog.category || "",
      image: null,
    });
    setEditingBlog(blog);
    setPreviewUrl(blog.imageUrl); // Set the preview URL to the current image URL
    setIsAddingBlog(true);
  };

  // Handle showing delete modal
  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };
  // Handle actual deletion
  const handleDelete = async () => {
    if (!blogToDelete) return;

    try {
      setIsDeleting(true);

      const response = await fetch(`/api/blogs/${blogToDelete._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to delete blog");
      }

      // Reset to previous page if current page becomes empty after deletion
      if (currentPage > 1 && blogs.length % blogsPerPage === 1) {
        setCurrentPage(currentPage - 1);
      }

      setBlogs(blogs.filter((blog) => blog._id !== blogToDelete._id));
      toast.success("Blog deleted successfully");

      // Short delay before closing the modal for better UX
      setTimeout(() => {
        setShowDeleteModal(false);
        setBlogToDelete(null);
        setIsDeleting(false);
      }, 500);
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
      setIsDeleting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "<p>Start writing your blog content here...</p>",
      tags: "",
      category: "",
      image: null,
    });
    setPreviewUrl(null);
    setEditingBlog(null);
    setIsAddingBlog(false);
  };

  return (
    <ProtectedRoute adminOnly={true}>
      <LayoutAdmin headerStyle={1} footerStyle={1}>
        <section className="profile-dashboard">
          <div className="tf-container blog-list-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrap-form">
                  <div className="heading-form">
                    <h3 className="fw-bold mb-4">Blog Management</h3>
                    {isAddingBlog ? (
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="mb-0">
                          {editingBlog ? "Edit Blog" : "Create New Blog"}
                        </p>
                        {/* <button
                          className="btn btn-secondary"
                          onClick={resetForm}
                          disabled={isSubmitting}
                        >
                          Cancel
                        </button> */}
                      </div>
                    ) : (
                      <>
                        <p className="mb-4">Manage your blog posts</p>
                        <button
                          onClick={() => setIsAddingBlog(true)}
                          className="btn btn-primary w-100 py-3 mb-4"
                        >
                          <i className="fa fa-plus-circle me-2"></i>
                          Add New Blog
                        </button>
                      </>
                    )}
                  </div>
                  {isAddingBlog ? (
                    // Blog Form
                    <form onSubmit={handleSubmit} className="blog-form">
                      <div className="mb-4">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          placeholder="Enter blog title"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Content</label>
                        <RichTextEditor
                          value={formData.content}
                          onChange={(content) =>
                            setFormData((prev) => ({ ...prev, content }))
                          }
                        />
                      </div>
                      {/* <div className="mb-4">
                        <label className="form-label">Category</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.category}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              category: e.target.value,
                            }))
                          }
                          placeholder="Enter blog category"
                        />
                      </div> */}
                      <div className="mb-4">
                        <label className="form-label">Tags</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.tags}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              tags: e.target.value,
                            }))
                          }
                          placeholder="Enter tags (comma separated)"
                        />
                      </div>{" "}
                      <div className="mb-4">
                        <label className="form-label d-block">
                          Featured Image
                        </label>

                        {/* Image Preview Section */}
                        <div className="image-preview-section mb-3">
                          {editingBlog?.imageUrl && (
                            <div className="current-image mb-3">
                              <p className="text-muted small mb-2">
                                Current Image:
                              </p>
                              <img
                                src={editingBlog.imageUrl}
                                alt="Current blog image"
                                className="img-thumbnail"
                                style={{
                                  maxHeight: "200px",
                                  width: "auto",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          )}
                        </div>

                        {/* File Upload Control */}
                        <div className="mb-2">
                          <label className="file-upload-label">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              style={{ display: "none" }}
                            />
                            <i className="fa fa-upload me-2"></i>
                            {editingBlog ? "Change Image" : "Choose Image"}
                          </label>
                        </div>

                        {/* New Image Preview */}
                        {formData.image && (
                          <div className="mt-3">
                            <p className="text-muted small mb-2">
                              New Image Preview:
                            </p>
                            <img
                              src={previewUrl}
                              alt="New image preview"
                              className="img-thumbnail"
                              style={{
                                maxHeight: "200px",
                                width: "auto",
                                objectFit: "contain",
                              }}
                            />
                            <p className="text-muted small mt-1">
                              Selected file: {formData.image.name}
                            </p>
                          </div>
                        )}
                      </div>
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="progress mb-4">
                          <div
                            className="progress-bar"
                            style={{ width: `${uploadProgress}%` }}
                          >
                            {Math.round(uploadProgress)}%
                          </div>
                        </div>
                      )}
                      {/* <div className="form-group">
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
                      </div> */}
                      <div className="d-flex gap-3">
                        <button
                          className="btn btn-primary py-3 w-100"
                          onClick={resetForm}
                          disabled={isSubmitting}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary py-3 w-100"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Saving...
                            </>
                          ) : (
                            <>
                              <i className="fa fa-save me-2"></i>
                              {editingBlog ? "Update Blog" : "Create Blog"}
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Blogs Table
                    <div className="blog-table-container">
                      {loading ? (
                        <div className="text-center py-5">
                          <i className="fa fa-spinner fa-spin fa-2x"></i>
                          <p className="mt-2">Loading blogs...</p>
                        </div>
                      ) : blogs.length === 0 ? (
                        <div className="text-center py-5">
                          <i className="fa fa-pen-fancy fa-2x mb-3"></i>
                          <p>No blogs found. Start writing your first blog!</p>
                        </div>
                      ) : (
                        <div className="table-responsive">
                          <table className="table blog-table">
                            <thead>
                              <tr>
                                <th style={{ width: "80px" }}>Image</th>
                                <th>Title</th>
                                {/* <th>Category</th> */}
                                <th>Tags</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {blogs
                                .slice(
                                  (currentPage - 1) * blogsPerPage,
                                  currentPage * blogsPerPage
                                )
                                .map((blog) => (
                                  <tr key={blog._id}>
                                    {" "}
                                    <td className="align-middle">
                                      {" "}
                                      {blog.imageUrl || blog.image ? (
                                        <div className="image-wrapper position-relative">
                                          <img
                                            src={blog.imageUrl || blog.image}
                                            alt={blog.title}
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
                                                blog.imageUrl
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
                                    <td
                                      className="text-truncate"
                                      style={{ maxWidth: "300px" }}
                                    >
                                      {blog.title}
                                    </td>
                                    {/* <td>{blog.category || "Uncategorized"}</td> */}
                                    <td>{blog.tags?.join(", ")}</td>
                                    <td>
                                      <div className="d-flex gap-2">
                                        <Link
                                          href={`/blog-details/${blog._id}`}
                                          className="btn btn-sm btn-info"
                                          title="View Blog"
                                        >
                                          <i className="fa fa-eye"></i>
                                        </Link>
                                        <button
                                          className="btn btn-sm btn-primary"
                                          onClick={() => handleEdit(blog)}
                                          title="Edit Blog"
                                        >
                                          <i className="fa fa-edit"></i>
                                        </button>
                                        <button
                                          className="btn btn-sm btn-danger"
                                          onClick={() =>
                                            handleDeleteClick(blog)
                                          }
                                          title="Delete Blog"
                                        >
                                          <i className="fa fa-trash"></i>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      )}{" "}
                      {/* Pagination controls */}
                      {!loading && blogs.length > 0 && (
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
                            {Math.ceil(blogs.length / blogsPerPage)}
                          </span>
                          <button
                            className="btn btn-outline-primary ms-2"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={
                              currentPage ===
                              Math.ceil(blogs.length / blogsPerPage)
                            }
                          >
                            &raquo;
                          </button>
                        </div>
                      )}
                    </div>
                  )}{" "}
                  {/* Delete Confirmation Modal */}
                  <Modal
                    show={showDeleteModal}
                    onHide={() => !isDeleting && setShowDeleteModal(false)}
                    backdrop={isDeleting ? "static" : true}
                    keyboard={!isDeleting}
                  >
                    <Modal.Header closeButton={!isDeleting}>
                      <Modal.Title>
                        {isDeleting ? "Deleting Blog..." : "Confirm Delete"}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {isDeleting ? (
                        <div className="text-center py-3">
                          <div
                            className="spinner-border text-danger mb-3"
                            role="status"
                          >
                            <span className="visually-hidden">Deleting...</span>
                          </div>
                          <p>Deleting blog "{blogToDelete?.title}"...</p>
                        </div>
                      ) : (
                        <>
                          Are you sure you want to delete the blog &quot;
                          {blogToDelete?.title}&quot;? This action cannot be
                          undone.
                        </>
                      )}
                    </Modal.Body>
                    <Modal.Footer>
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
            .blog-list-container {
              padding: 0 15px;
            }

            /* Pagination styles */
            .pagination button {
              min-width: 40px;
            }
            .pagination button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }

            .blog-table-container {
              overflow-x: auto;
              width: 100%;
              -webkit-overflow-scrolling: touch;
            }

            .blog-table {
              width: 100%;
              border-collapse: collapse;
              min-width: 800px;
              background-color: white;
            }

            .blog-table th,
            .blog-table td {
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #e5e7eb;
            }

            .blog-table th {
              font-weight: 600;
              background-color: #f9fafb;
              color: #4a5568;
            }

            .blog-table tr:hover {
              background-color: #f8fafc;
            }

            .blog-form {
              background-color: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }

            .file-upload-label {
              display: inline-flex;
              align-items: center;
              padding: 8px 16px;
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

            .progress {
              height: 25px;
              border-radius: 4px;
            }
            .progress-bar {
              background-color: #4f46e5;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: 600;
              color: white;
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
              .blog-list-container {
                padding: 0 10px !important;
                margin: 0 !important;
                max-width: 100% !important;
                width: 100% !important;
              }

              .wrap-form {
                border-radius: 8px !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
                padding: 20px 15px !important;
                margin-top: 10px !important;
                margin-bottom: 10px !important;
                background: white !important;
              }

              .blog-form {
                padding: 15px;
              }

              .form-box {
                padding: 0 !important;
              }

              .heading-form {
                padding: 0 !important;
              }
            }
          `}</style>
        </section>
      </LayoutAdmin>
    </ProtectedRoute>
  );
}
