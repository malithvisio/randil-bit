"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import "@/app/blog-details/blog-content.css";
import "./blog-pagination.css"; // Import the pagination CSS file
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

// Configure DOMPurify
const purifyConfig = {
  ALLOWED_TAGS: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "br",
    "hr",
    "strong",
    "em",
    "i",
    "b",
    "u",
    "strike",
    "del",
    "ul",
    "ol",
    "li",
    "blockquote",
    "pre",
    "code",
    "a",
    "img",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "div",
    "span",
  ],
  ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "target", "style"],
};

export default function BlogPage({ searchParams }) {
  // State variables
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0, 
    totalCount: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  // Get the current page from URL query parameters or default to page 1
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching blogs from API...");
        // Fetch blogs from API with pagination parameters
        const response = await fetch(`/api/blogs?page=${currentPage}&limit=3`);
        

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.error || "Failed to fetch blogs";
          throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(`Received ${data.length} blogs from API`);

        if (!Array.isArray(data)) {
          console.error("API returned non-array data:", data);
          throw new Error("Invalid data format received from server");
        }

        // Calculate pagination
        const blogsPerPage = 3;
        const totalCount = data.length;
        const totalPages = Math.ceil(totalCount / blogsPerPage);

        // Use client-side pagination if server doesn't support it
        const startIndex = (currentPage - 1) * blogsPerPage;
        const endIndex = startIndex + blogsPerPage;
        const paginatedBlogs = data.slice(0, blogsPerPage);

        setBlogs(paginatedBlogs);
        setPagination({
          currentPage: currentPage,
          totalPages: totalPages,
          totalCount: totalCount,
          hasNextPage: currentPage < totalPages,
          hasPrevPage: currentPage > 1,
        });

        // Get recent blogs (top 3) for sidebar
        setRecentBlogs(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);
        setBlogs([]);
        setRecentBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);
  if (loading) {
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <div className="alert alert-danger m-5" role="alert">
          {error}
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Blog Page"
        imgbg="/assets/images/page/destbg.jpg"
      >
        <div>
          <section className="our-blog pd-main">
            <div className="tf-container">
              <div className="row">
                {" "}
                <div className="col-lg-8 col-12">
                  {blogs.length === 0 ? (
                    <div className="no-blogs-message text-center p-5">
                      <h3>No blog posts found</h3>
                      <p>Check back later for new content</p>
                    </div>
                  ) : (
                    blogs.map((blog) => (
                      <article key={blog._id} className="side-blog mb-56px">
                        <div className="blog-image">
                          <div className="list-categories">
                            <Link href="#" className="new">
                              {new Date(blog.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  day: "2-digit",
                                  month: "short",
                                }
                              )}
                            </Link>
                          </div>{" "}
                          <Link
                            className="post-thumbnail"
                            href={`/blog-details/${blog._id}`}
                          >
                            <img
                              src={
                                blog?.image || "/assets/images/blog/default.jpg"
                              }
                              alt={blog?.title || "Blog post"}
                              style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <div className="top-detail-info">
                            <ul className="flex-three">
                              <li>
                                <i className="icon-user" />
                                <Link href="#">
                                  {blog.author?.name || "Anonymous"}
                                </Link>
                              </li>
                              <li>
                                <i className="icon-24" />
                                <span className="date">
                                  {Math.ceil(blog.content.length / 1000)} min
                                  read
                                </span>
                              </li>
                              {blog.tags && blog.tags.length > 0 && (
                                <li>
                                  <i className="icon-tag" />
                                  <span>{blog.tags.join(", ")}</span>
                                </li>
                              )}
                            </ul>
                          </div>
                          <h3 className="entry-title">
                            <Link href={`/blog-details/${blog._id}`}>
                              {blog.title}
                            </Link>
                          </h3>
                          <div
                            className="blog-content description"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                blog.content.length > 300
                                  ? blog.content.substring(0, 300) + "..."
                                  : blog.content,
                                purifyConfig
                              ),
                            }}
                          />
                          <div className="button-main">
                            <Link
                              href={`/blog-details/${blog._id}`}
                              className="button-link"
                            >
                              Read More <i className="icon-Arrow-11" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))
                  )}{" "}
                  {/* Only show pagination if there are blogs and more than one page */}
                  {blogs.length > 0 && pagination.totalPages > 1 && (
                    <div className="row">
                      <div className="col-md-12 ">
                        <ul className="tf-pagination flex-five mt-20">
                          {" "}
                          {/* Previous page button */}
                          <li>
                            <Link
                              className={`pages-link ${
                                !pagination.hasPrevPage ? "disabled" : ""
                              }`}
                              href={
                                pagination.hasPrevPage
                                  ? `?page=${pagination.currentPage - 1}`
                                  : "#"
                              }
                              aria-disabled={!pagination.hasPrevPage}
                            >
                              <i className="icon-29" />
                            </Link>
                          </li>
                          {/* Generate page numbers */}
                          {Array.from(
                            { length: pagination.totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <li
                              key={page}
                              className={
                                pagination.currentPage === page
                                  ? "pages-item active"
                                  : ""
                              }
                            >
                              <Link
                                className="pages-link"
                                href={`?page=${page}`}
                              >
                                {page}
                              </Link>
                            </li>
                          ))}{" "}
                          {/* Next page button */}
                          <li>
                            <Link
                              className={`pages-link ${
                                !pagination.hasNextPage ? "disabled" : ""
                              }`}
                              href={
                                pagination.hasNextPage
                                  ? `?page=${pagination.currentPage + 1}`
                                  : "#"
                              }
                              aria-disabled={!pagination.hasNextPage}
                            >
                              <i className="icon--1" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-lg-4 col-12">
                  <div className="side-bar-right">
                    {/* <div className="sidebar-widget">
                      <div className="profile-widget center">
                        <img
                          src="/assets/images/avata/avt-blog.jpg"
                          alt="Image Blog"
                          className="avata"
                        />
                        <div className="name">Rosalina D. Willaim</div>
                        <span className="job">Blogger/Photographer</span>
                        <p className="des">
                          he whimsically named Egg Canvas is the design director
                          and photographer in New York. Why the nam
                        </p>
                        <ul className="social">
                          <li>
                            <Link href="#">
                              <i className="icon-icon-2" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="icon-x" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="icon-icon_03" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="icon-2" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    {/* <div className="sidebar-widget">
                      <h4 className="block-heading">search here</h4>
                      <form action="/" id="search-bar-widget">
                        <input type="text" placeholder="Search here..." />
                        <button type="button">
                          <i className="icon-search-2" />
                        </button>
                      </form>
                    </div>{" "} */}{" "}
                    <div className="sidebar-widget">
                      <h4 className="block-heading">Recent Blogs</h4>
                      <div className="recent-post-list">
                        {recentBlogs.map((blog) => (
                          <div
                            key={blog._id}
                            className="list-recent flex-three"
                          >
                            <Link
                              href={`/blog-details/${blog._id}`}
                              className="recent-image"
                            >
                              <img
                                src={
                                  blog?.image ||
                                  "/assets/images/blog/default.jpg"
                                }
                                alt={blog?.title || "Blog post"}
                              />
                            </Link>
                            <div className="recent-info">
                              <div className="date">
                                <i className="icon-4" />
                                <span>
                                  {new Date(
                                    blog.createdAt
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <h4 className="title">
                                {" "}
                                <Link href="/blog-details">
                                  {blog.title.length > 40
                                    ? blog.title.substring(0, 40) + "..."
                                    : blog.title}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="sidebar-widget">
                      <h4 className="block-heading">Categories</h4>
                      <ul className="category-blog">
                        <li>
                          <Link href="#" className="flex-two">
                            <span>Mobile Set</span>
                            <span>03</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex-two">
                            <span>Mobile Set</span>
                            <span>03</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex-two">
                            <span>Mobile Set</span>
                            <span>03</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex-two">
                            <span>Mobile Set</span>
                            <span>03</span>
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                    <div className="sidebar-widget">
                      <h4 className="block-heading">Tags</h4>
                      <ul className="tag">
                        <li>
                          <Link href="#">Tourist</Link>
                        </li>
                        <li>
                          <Link href="#">Traveling</Link>
                        </li>
                        <li>
                          <Link href="#">Cave</Link>
                        </li>
                        <li>
                          <Link href="#">Sky Dive</Link>
                        </li>
                        <li>
                          <Link href="#">Hill Climb</Link>
                        </li>
                        <li>
                          <Link href="#">Traditional</Link>
                        </li>
                        <li>
                          <Link href="#" className="active">
                            Landing
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Wildlife</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="mb--93">
            <div className="tf-container">
              <div className="callt-to-action flex-two">
                <div className="callt-to-action-content flex-three">
                  <div className="image">
                    <img src="/assets/images/page/ready.png" alt="Image" />
                  </div>
                  <div className="content">
                    <h2 className="title-call">
                      Ready to adventure and enjoy natural
                    </h2>
                    <p className="des">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicin
                    </p>
                  </div>
                </div>
                <img
                  src="/assets/images/page/vector4.png"
                  alt=""
                  className="shape-ab"
                />
                <div className="callt-to-action-button">
                  <Link href="#" className="get-call">
                    Let,s get started
                  </Link>
                </div>
              </div>
            </div>
          </section>{" "} */}
        </div>
      </Layout>
    </>
  );
}
