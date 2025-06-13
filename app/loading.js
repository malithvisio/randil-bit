import React from "react";
import Preloader from "@/components/elements/Preloader";
import styles from "./styles/skeleton.module.css";

const SkeletonSlider = () => (
  <div className={styles.skeletonImage} style={{ height: "600px" }} />
);

const SkeletonAbout = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.skeletonFlex}>
      <div style={{ flex: 1 }}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonTextLong} />
        <div className={styles.skeletonTextLong} />
        <div className={styles.skeletonTextMedium} />
        <div className={styles.skeletonButton} />
      </div>
      <div style={{ flex: 1 }}>
        <div className={styles.skeletonImage} />
      </div>
    </div>
  </div>
);

const SkeletonBanner = () => (
  <div className={styles.loadingContainer}>
    <div
      className={styles.skeletonTitle}
      style={{ width: "60%", margin: "0 auto" }}
    />
    <div className={styles.skeletonGrid}>
      <div className={styles.skeletonCard}>
        <div className={styles.skeletonImage} style={{ height: "200px" }} />
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonTextMedium} />
      </div>
      <div className={styles.skeletonCard}>
        <div className={styles.skeletonImage} style={{ height: "200px" }} />
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonTextMedium} />
      </div>
      <div className={styles.skeletonCard}>
        <div className={styles.skeletonImage} style={{ height: "200px" }} />
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonTextMedium} />
      </div>
    </div>
  </div>
);

const SkeletonFeatures = () => (
  <div className={styles.loadingContainer}>
    <div
      className={styles.skeletonTitle}
      style={{ width: "40%", margin: "0 auto" }}
    />
    <div className={styles.skeletonGrid}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonCardHeader}>
            <div className={styles.skeletonAvatar} />
            <div>
              <div className={styles.skeletonTextShort} />
              <div className={styles.skeletonTextMedium} />
            </div>
          </div>
          <div className={styles.skeletonTextLong} />
          <div
            className={styles.skeletonButtonSmall}
            style={{ marginTop: "16px" }}
          />
        </div>
      ))}
    </div>
  </div>
);

const SkeletonDestinations = () => (
  <div className={styles.loadingContainer}>
    <div
      className={styles.skeletonTitle}
      style={{ width: "50%", margin: "0 auto" }}
    />
    <div className={styles.skeletonGrid}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className={styles.destinationCard}>
          <div className={styles.skeletonImage} style={{ height: "250px" }} />
          <div
            className={styles.skeletonTextShort}
            style={{ marginTop: "16px" }}
          />
          <div className={styles.skeletonTextMedium} />
          <div className={styles.skeletonTextLong} />
        </div>
      ))}
    </div>
  </div>
);

const SkeletonActivities = () => (
  <div className={styles.loadingContainer}>
    <div
      className={styles.skeletonTitle}
      style={{ width: "45%", margin: "0 auto" }}
    />
    <div className={styles.skeletonGrid}>
      {[1, 2, 3].map((i) => (
        <div key={i} className={styles.tourCard}>
          <div className={styles.skeletonImage} style={{ height: "200px" }} />
          <div style={{ padding: "16px" }}>
            <div className={styles.skeletonCardHeader}>
              <div className={styles.skeletonAvatar} />
              <div>
                <div className={styles.skeletonTextShort} />
                <div className={styles.skeletonTextMedium} />
              </div>
            </div>
            <div className={styles.skeletonTextLong} />
            <div className={styles.skeletonButtonSmall} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkeletonTestimonials = () => (
  <div className={styles.loadingContainer}>
    <div
      className={styles.skeletonTitle}
      style={{ width: "40%", margin: "0 auto" }}
    />
    <div
      className={styles.skeletonGrid}
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonCardHeader}>
            <div className={styles.skeletonAvatar} />
            <div>
              <div className={styles.skeletonTextShort} />
              <div className={styles.skeletonTextMedium} />
            </div>
          </div>
          <div className={styles.skeletonTextLong} />
          <div className={styles.skeletonTextLong} />
          <div className={styles.skeletonTextMedium} />
        </div>
      ))}
    </div>
  </div>
);

const SkeletonContact = () => (
  <div className={styles.loadingContainer} style={{ marginBottom: "40px" }}>
    <div
      className={styles.skeletonTitle}
      style={{ width: "50%", margin: "0 auto" }}
    />
    <div
      className={styles.skeletonFlex}
      style={{ justifyContent: "center", gap: "32px" }}
    >
      <div className={styles.skeletonButton} />
      <div className={styles.skeletonButton} />
    </div>
  </div>
);

export default function Loading() {
  return (
    <div style={{ background: "#fff" }}>
      <Preloader />
      <SkeletonSlider />
      <SkeletonAbout />
      <SkeletonBanner />
      <SkeletonFeatures />
      <SkeletonDestinations />
      <SkeletonActivities />
      <SkeletonTestimonials />
      <SkeletonContact />
    </div>
  );
}
