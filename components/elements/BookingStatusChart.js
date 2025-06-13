"use client";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { useState, useEffect } from "react";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export default function BookingStatusChart({ stats, type = "booking" }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chartData =
    type === "booking"
      ? {
          labels: ["Pending", "Processing", "Confirmed", "Cancelled"],
          datasets: [
            {
              data: [
                stats.pendingBookings,
                stats.processingBookings,
                stats.confirmedBookings,
                stats.cancelledBookings,
              ],
              backgroundColor: [
                "rgba(255, 206, 86, 0.7)", // Yellow for pending
                "rgba(54, 162, 235, 0.7)", // Blue for processing
                "rgba(75, 192, 192, 0.7)", // Green for confirmed
                "rgba(255, 99, 132, 0.7)", // Red for cancelled
              ],
              borderColor: [
                "rgba(255, 206, 86, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }
      : {
          labels: ["New", "In Progress", "Completed"],
          datasets: [
            {
              data: [
                stats.tourRequests?.pending || 0,
                stats.tourRequests?.processing || 0,
                stats.tourRequests?.completed || 0,
              ],
              backgroundColor: [
                "rgba(255, 206, 86, 0.7)", // Yellow for new
                "rgba(54, 162, 235, 0.7)", // Blue for in progress
                "rgba(75, 192, 192, 0.7)", // Green for completed
              ],
              borderColor: [
                "rgba(255, 206, 86, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 5,
        bottom: windowWidth <= 480 ? 0 : 10,
        left: windowWidth <= 480 ? 0 : 10,
        right: windowWidth <= 480 ? 0 : 10,
      },
    },
    plugins: {
      legend: {
        position: windowWidth <= 480 ? "bottom" : "right",
        labels: {
          boxWidth: windowWidth <= 480 ? 15 : 20,
          padding: windowWidth <= 480 ? 10 : 20,
          font: {
            size: windowWidth <= 480 ? 12 : 14,
          },
        },
      },
      title: {
        display: true,
        text:
          type === "booking"
            ? "Booking Status Distribution"
            : "Tour Request Status Distribution",
        font: {
          size: windowWidth <= 480 ? 14 : 16,
          weight: "bold",
        },
      },
    },
    // Custom tooltip formatting
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const total = dataset.data.reduce((acc, curr) => acc + curr, 0);
          const value = dataset.data[tooltipItem.index];
          const percentage = ((value / total) * 100).toFixed(1);
          return `${data.labels[tooltipItem.index]}: ${value} (${percentage}%)`;
        },
      },
    },
  };
  return (
    <div
      className={`chart-wrapper ${windowWidth <= 480 ? "mobile-chart" : ""}`}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
}
