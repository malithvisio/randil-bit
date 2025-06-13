"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

export default function SingleDestination() {
  const params = useParams();
  const [currentDestination, setCurrentDestination] = useState(null);
  const [recentDestinations, setRecentDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchDestinationDetails = async () => {
      try {
        // Use the new name-based endpoint with proper error handling
        const response = await fetch(
          `/api/destinations/name/${encodeURIComponent(params.id)}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 404) {
            throw new Error(
              `Destination "${decodeURIComponent(params.id)}" not found`
            );
          }
          throw new Error(errorData.error || "Failed to fetch destination");
        }
        const data = await response.json();
        if (!data) {
          throw new Error("No destination data received");
        }
        setCurrentDestination(data);

        // Fetch recent destinations excluding current one
        const recentResponse = await fetch("/api/destinations?limit=5");
        if (!recentResponse.ok) {
          throw new Error("Failed to fetch recent destinations");
        }
        const recentData = await recentResponse.json();
        // Filter out current destination and limit to 3
        const filteredRecent = recentData
          .filter((d) => d._id !== data._id)
          .slice(0, 5);
        setRecentDestinations(filteredRecent);
      } catch (err) {
        console.error("Error fetching destination:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchDestinationDetails();
    }
  }, [params.name]);

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

  if (error || !currentDestination) {
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <div className="tf-container">
          <div className="alert alert-danger m-5" role="alert">
            <div className="text-center">
              <i className="fa fa-exclamation-circle fa-2x mb-3"></i>
              <h4 className="alert-heading mb-2">Destination Not Found</h4>
              <p>{error || "The requested destination could not be found"}</p>
              <div className="mt-3">
                <Link href="/destinations" className="btn btn-primary">
                  <i className="fa fa-arrow-left me-2"></i>
                  Back to Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout headerStyle={2} footerStyle={2}>
      <div>
        <section>
          <div className="tf-container full">
            <div className="row">
              <div className="col-md-12">
                <img src="/assets/images/destination/breadcrumb.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="pd-main">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-destinaion-content">
                  <div className="inner-haeder mb-50">
                    <h1 className="title">{currentDestination.name}</h1>
                  </div>
                  <div className="description-wrap mb-40">
                    <span className="description">Description:</span>
                    <p className="des">{currentDestination.descriptionTop}</p>
                  </div>
                  <div className=" col-lg-12 image-wrap flex-three mb-40">
                    {" "}
                    <img
                      src={currentDestination.secondaryImage}
                      alt={currentDestination.name}
                      style={{ width: "60%" }}
                      onError={(e) => {
                        console.error("Failed to load image:", e.target.src);
                        e.target.onerror = null;
                        e.target.src =
                          "/assets/images/destinations/default.jpg";
                      }}
                    />
                    <img
                      src={currentDestination.image}
                      alt={currentDestination.name}
                      style={{ width: "30%", height: "30%" }}
                    />
                  </div>
                  <div className="description-wrap mb-40">
                    <p className="des mb-18">
                      {currentDestination.descriptionBottom}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="side-bar-right">
                  <div className="sidebar-widget">
                    <h4 className="block-heading">Recent Destinations</h4>
                    <div className="recent-post-list">
                      {recentDestinations.map((dest) => (
                        <div key={dest._id} className="list-recent flex-three">
                          <Link
                            href={`/destinations/${dest._id}`}
                            className="recent-image"
                          >
                            {" "}
                            <img src={dest.secondaryImage} alt={dest.name} style={{height:"60px",width:"100px"}}/>
                          </Link>
                          <div className="recent-info">
                            <h4 className="title">
                              <Link href={`/destinations/${dest._id}`}>
                                {dest.name}
                              </Link>
                            </h4>
                            <div className="start">
                              <i className="icon-Star" />
                              <i className="icon-Star" />
                              <i className="icon-Star" />
                              <i className="icon-Star" />
                              <i className="icon-Star" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
