"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function TourDestinationV3() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/destinations?status=Active", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }); 

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage =
            errorData.error || "Failed to fetch destinations";
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setError(error.message);
        toast.error("Failed to load destinations: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

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
        breadcrumbTitle="Top Sri Lanka Destinations"
        imgbg="/assets/images/page/destbg.jpg"
      >
        <div>
          <section className="tour-destination pd-main">
            <div className="tf-container">
              <div className="row">
                {destinations.map((dest) => (
                  <div key={dest._id} className="col-sm-6 col-lg-3 mb-37">
                    <div className="tf-widget-destination">
                      <Link
                        href={`/destinations/${encodeURIComponent(dest.name)}`}
                        className="destination-imgae"
                      >
                        <img
                          src={dest.image}
                          alt={dest.name}
                          onError={(e) => {
                            console.error(
                              "Failed to load image:",
                              e.target.src
                            );
                            e.target.onerror = null;
                            e.target.src =
                              "/assets/images/destinations/default.jpg";
                          }}
                          // style={{ aspectRatio: "4/3", objectFit: "cover" }}
                        />
                      </Link>
                      <div className="destination-content">
                        <span className="nation">{dest.name}</span>
                        <div className="flex-two btn-destination">
                          {/* <div className="title">
                            <p className="mb-2" style={{ fontSize: "0.9em", lineHeight: "1.4" }}>
                              {dest.descriptionTop ? 
                                dest.descriptionTop.length > 100 ? 
                                  dest.descriptionTop.substring(0, 100) + '...' :
                                  dest.descriptionTop
                                : 'No description available'
                              }
                            </p>
                          </div> */}
                          <h6 className="title">
                            <Link
                              href={`/destinations/${encodeURIComponent(
                                dest.name
                              )}`}
                            >
                              More Info
                            </Link>
                          </h6>
                          <Link
                            href={`/destinations/${encodeURIComponent(
                              dest.name
                            )}`}
                            className="flex-five btn-view"
                            title="View Details"
                          >
                            <i className="icon-Vector-32" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12 center mt-5">
                  <p className="tour-des-top mt-53">
                    Explore our curated collection of Sri Lankan destinations.
                    Each location offers unique experiences and unforgettable
                    memories to cherish!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
