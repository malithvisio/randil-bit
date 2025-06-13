"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";


export default function Destination5() {
     const [destinations, setDestinations] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchDestinations = async () => {
          try {
            setLoading(true);
            const response = await fetch("/api/destinations?status=Active");
    
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
      <section className="top-destination2 pd-main">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-50 center">
                <span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">
                  Popular Activities
                </span>
                <h2 className="title-heading wow fadeInUp animated">
                  Explore Sri Lanka
                </h2>
              </div>
            </div>
          </div>
          <div className="row"> 
            {destinations.slice(0, 6).map((destination, index) => (
              <div
                key={destination._id}
                className={`col-sm-6 col-md-4 col-lg-2 wow fadeInUp animated`}
                data-wow-delay={`${0.1 * (index + 1)}s`}
              >
                <div className="tf-image-box center">
                  <Link
                    href={`/destinations/${encodeURIComponent(destination.name)}`}
                    className="image"
                  >
                    <img src={destination.image} alt={destination.name} />
                  </Link>
                  <h6>
                    <Link href={`/destinations/${destination.id}`}>
                      {destination.name}
                    </Link>
                  </h6>
                  {/* <span className="text-main">({destination.tours} Tour{destination.tours > 1 ? "s" : ""})</span> */}
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 center wow fadeInUp animated">
              <p className="tour-des-top mt-53">
                Explore our top destinations in Sri Lanka, voted by more than{" "}
                <span className="text-main">4,000+</span> customers around the
                world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
