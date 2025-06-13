import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { connectToDatabase } from "@/libs/mongoose";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import "@/app/blog-details/blog-content.css";
// Import Quill styles to ensure proper rendering of rich text content
import "react-quill/dist/quill.snow.css";

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
    "s",
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
  ALLOWED_ATTR: [
    "href",
    "src",
    "alt",
    "title",
    "class",
    "target",
    "style",
    "datetime",
    "align",
    "width",
    "height",
  ],
  ADD_ATTR: ["align"],
  ADD_CLASS: {
    "*": ["ql-align-center", "ql-align-right", "ql-align-justify"],
  },
};

async function getBlogById(id) {
  try {
    await connectToDatabase();
    const blog = await Blog.findById(id).populate("author", "name").lean();
    if (!blog) {
      return null;
    }
    return {
      ...blog,
      createdAt: blog.createdAt?.toISOString() || new Date().toISOString(),
      updatedAt: blog.updatedAt?.toISOString() || new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

async function getRecentBlogs(currentBlogId) {
  try {
    await connectToDatabase();
    const recentBlogs = await Blog.find({ _id: { $ne: currentBlogId } })
      .sort({ createdAt: -1 })
      .limit(3)
      .populate("author", "name")
      .lean();
    return recentBlogs;
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
}

export default async function BlogDetails({ params }) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    notFound();
  }

  const recentBlogs = await getRecentBlogs(params.id);

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle={blog.title}>
        <div className="blog-details-area pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details-content">
                  <div className="bd-img hover-effect mb-50">
                    <br/>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  {/* <div className="blog-meta-list d-flex align-items-center mb-20">
                    <div className="blog-meta-single">
                      <div className="blog-meta-text">
                        <div className="blog-date">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="blog-meta-single">
                      <div className="blog-meta-text">
                        {blog.author ? (
                          <div className="blog-author">{blog.author.name}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>{" "} */}
                  <h4 className="bd-title mb-25">{blog.title}</h4>
                  <div
                    className="blog-content rich-text-content des lh-32 mb-37"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.content, purifyConfig),
                    }}
                  />
                  {/* Social sharing and tags section */}
                  <div className="blog-details-bottom mt-45">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="bdp-topic">
                          <h6>Tags :</h6>
                          <div className="bdpt-tag">
                            {blog.tags?.map((tag, index) => (
                              <Link key={index} href={`/blog?tag=${tag}`}>
                                {tag}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6">
                        {/* Social share buttons if needed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar with recent posts */}
              <div className="col-xl-4 col-lg-5">
                <div className="blog-sidebar-wrapper" >
                  {recentBlogs.length > 0 && (
                    <div className="sidebar-widget mb-50">
                      <h5 className="sidebar-widget-title">Recent Posts</h5>
                      <br/>
                      <div className="sidebar-post">
                        {recentBlogs.map((recentBlog) => (
                          <div
                            key={recentBlog._id}
                            className="sidebar-post-item"
                            style={{ marginBottom: "20px" }}
                          >
                            <div className="sidebar-post-thumb">
                              <Link href={`/blog-details/${recentBlog._id}`}>
                                <img
                                  src={recentBlog.image}
                                  alt={recentBlog.title}
                                  style={{
                                    width: "100%",
                                    height: "100px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                  }}
                                />
                              </Link>
                            </div>
                            <div className="sidebar-post-content">
                              <h6>
                                <Link href={`/blog-details/${recentBlog._id}`}>
                                  {recentBlog.title}
                                  
                                </Link>
                              </h6>
                              {/* <span className="sidebar-post-date">
                                {new Date(
                                  recentBlog.createdAt
                                ).toLocaleDateString()}
                              </span> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
