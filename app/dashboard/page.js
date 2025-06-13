"use client";

import LayoutAdmin from "@/components/layout/LayoutAdmin";
import { useState, useEffect } from "react";
import Link from "next/link";
import BookingStatusChart from "@/components/elements/BookingStatusChart";
import ProtectedRoute from "@/components/providers/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import "./dashboard.css";

export default function Dashboard() {
  const { isLoading } = useAuth();
  const [stats, setStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setStatsLoading(true);
        const response = await fetch("/api/dashboard/stats");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch statistics");
        }

        setStats(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setError(error.message);
      } finally {
        setStatsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (isLoading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <ProtectedRoute adminOnly={true}>
      <LayoutAdmin headerStyle={1} footerStyle={1}>
        <section className="profile-dashboard">
          <div className="inner-header mb-40">
            <h3 className="title">Dashboard</h3>
            <p className="des">Booking Statistics Overview</p>
          </div>

          {statsLoading ? (
            <div className="text-center py-10">Loading statistics...</div>
          ) : error ? (
            <div className="text-center text-red-600 py-10">{error}</div>
          ) : (
            stats && (
              <div className="widget-dashboard">
                {/* General Booking Statistics */}
                <div className="infomation-dashboard mb-70">
                  <h4 className="title">General Booking Statistics</h4>
                  <div className="widget-dash-board">
                    <div className="grid-input-4">
                      <div className="input-wrap stat-card">
                        <label>Total Bookings</label>
                        <div className="stat-value">{stats.totalBookings}</div>
                      </div>

                      <div className="input-wrap stat-card">
                        <label>Total Guests</label>
                        <div className="stat-value">{stats.totalGuests}</div>
                      </div>

                      <div className="input-wrap stat-card">
                        <label>Pending</label>
                        <div className="stat-value">
                          {stats.pendingBookings}
                        </div>
                      </div>

                      <div className="input-wrap stat-card">
                        <label>Confirmed</label>
                        <div className="stat-value">
                          {stats.confirmedBookings}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tour Request Statistics */}
                <div className="infomation-dashboard mb-70">
                  <h4 className="title">Tailor-Made Tour Requests</h4>
                  <div className="widget-dash-board">
                    <div className="grid-input-4">
                      <div className="input-wrap stat-card">
                        <label>Total Requests</label>
                        <div className="stat-value">
                          {stats.tourRequests?.total || 0}
                        </div>
                      </div>

                      <div className="input-wrap stat-card">
                        <label>New Requests</label>
                        <div className="stat-value pending">
                          {stats.tourRequests?.pending || 0}
                        </div>
                      </div>

                      <div className="input-wrap stat-card">
                        <label>In Progress</label>
                        <div className="stat-value processing">
                          {stats.tourRequests?.processing || 0}
                        </div>
                      </div>

                      <div className="input-wrap stat-card">
                        <label>Completed</label>
                        <div className="stat-value success">
                          {stats.tourRequests?.completed || 0}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Recent Bookings */}
                <div className="infomation-dashboard mb-70">
                  <div className="flex justify-between items-center">
                    <h4 className="title">Recent Bookings</h4>
                    <Link href="/my-booking" className="view-all">
                      View All →
                    </Link>
                  </div>
                  <div className="widget-dash-board">
                    <div className="table-responsive">
                      <table className="booking-table">
                        <thead>
                          <tr>
                            <th>Tour Package</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stats.recentBookings.map((booking) => (
                            <tr key={booking._id}>
                              <td>{booking.packageTitle}</td>
                              <td>{formatDate(booking.createdAt)}</td>
                              <td>
                                <span
                                  className={`status-badge ${booking.status}`}
                                >
                                  {booking.status.charAt(0).toUpperCase() +
                                    booking.status.slice(1)}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Recent Tour Requests Table */}
                <div className="infomation-dashboard mb-70">
                  <div className="flex justify-between items-center">
                    <h4 className="title">Recent Tour Requests</h4>
                    <Link href="/my-bookingtailor" className="view-all">
                      View All →
                    </Link>
                  </div>
                  <div className="widget-dash-board">
                    <div className="table-responsive">
                      <table className="booking-table">
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Destination</th>
                            <th>Date Requested</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stats.recentTourRequests?.map((request) => (
                            <tr key={request._id}>
                              <td>{request.customerName || request.email}</td>
                              <td>{request.destination}</td>
                              <td>{formatDate(request.createdAt)}</td>
                              <td>
                                <span
                                  className={`status-badge ${request.status}`}
                                >
                                  {request.status.charAt(0).toUpperCase() +
                                    request.status.slice(1)}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>{" "}
                {/* Charts Row */}
                <div className="charts-row mb-70">
                  {/* General Bookings Chart */}
                  <div className="infomation-dashboard chart-container">
                    <h4 className="title">Booking Distribution</h4>
                    <div className="widget-dash-board chart-dashboard">
                      <BookingStatusChart stats={stats} type="booking" />
                    </div>
                  </div>

                  {/* Tour Requests Chart */}
                  <div className="infomation-dashboard chart-container">
                    <h4 className="title">Tour Request Distribution</h4>
                    <div className="widget-dash-board chart-dashboard">
                      <BookingStatusChart stats={stats} type="tourRequest" />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </section>
      </LayoutAdmin>
    </ProtectedRoute>
  );
}
