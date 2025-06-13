'use client'
import { useState } from "react";
import Link from "next/link";

export default function Activities1() {
    const [isTab, setIsTab] = useState(1);

    const activities = [
        {
            id: 1,
            title: "Couple Camping or Cabin",
            icon: "icon-Group-22",
            image: "/assets/images/activities/camping.jpg",
            subtitle: "Experience the serenity",
            description: "Enjoy a romantic getaway with couple camping or cozy cabins amidst Sri Lanka's breathtaking landscapes.",
            highlights: ["Romantic settings", "Comfortable accommodations"],
        },
        {
            id: 2,
            title: "Adventure & Climbing",
            icon: "icon-Group-31",
            image: "/assets/images/activities/climbing.jpg",
            subtitle: "Thrill-seekers' paradise",
            description: "Challenge yourself with rock climbing and adventure activities in Sri Lanka's rugged terrains.",
            highlights: ["Exhilarating climbs", "Professional guides"],
        },
        {
            id: 3,
            title: "Surfing & Swimming",
            icon: "icon-fishing-1",
            image: "/assets/images/activities/surfing.jpg",
            subtitle: "Ride the waves",
            description: "Catch the waves and enjoy surfing along Sri Lanka's stunning coastlines.",
            highlights: ["Perfect waves", "Surfing lessons available"],
        },
        {
            id: 4,
            title: "Mountain & Hill Hiking",
            icon: "icon-Group-4",
            image: "/assets/images/activities/hiking.jpg",
            subtitle: "Explore the heights",
            description: "Discover the beauty of Sri Lanka's mountains and hills with guided hiking tours.",
            highlights: ["Scenic trails", "Breathtaking views"],
        },
    ];

    const handleTab = (id) => {
        setIsTab(id);
    };

    return (
        <>
            <section className="relative tf-widget-activities pd-main overflow-hidden">
                {/* <img src="/assets/images/page/mask-activiti.png" alt="image" className="mask-top" />
                <img src="/assets/images/page/mask-print-2.png" alt="image" className="mask-bottom" /> */}
                <div className="tf-container">
                    <div className="row z-index3 relative">
                        <div className="col-lg-12 mb-60 " style={{ marginTop: "-70px" }}>
                            <div className="clip-text">Activities</div>
                        </div>
                        <div className="col-lg-12">
                            <ul className="nav nav-tabs-activities justify-content-center" id="myTablist" role="tablist">
                                {activities.map((activity) => (
                                    <li
                                        key={activity.id}
                                        className="nav-item"
                                        onClick={() => handleTab(activity.id)}
                                    >
                                        <button
                                            className={isTab === activity.id ? "nav-link active" : "nav-link"}
                                        >
                                            <span className="icon flex-five">
                                                <i className={activity.icon} />
                                            </span>
                                            <span>{activity.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content mt-44" id="myTabContents">
                                {activities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className={
                                            isTab === activity.id
                                                ? "tab-pane fade show active"
                                                : "tab-pane fade"
                                        }
                                        role="tabpanel"
                                    >
                                        <div className="tabs-activities-content flex">
                                            <div className="activities-image">
                                                <img src={activity.image} alt={activity.title} />
                                            </div>
                                            <div className="activities-content relative">
                                                <span className="sub-title text-white">{activity.subtitle}</span>
                                                <h3 className="title-activitis text-white mb-60">
                                                    {activity.description}
                                                </h3>
                                                <div className="flex-three mb-30">
                                                    {activity.highlights.map((highlight, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex-three text-white icon-list-wrap"
                                                        >
                                                            <div className="icon">
                                                                <i className="icon-Page-1" />
                                                            </div>
                                                            <span className="icon-lists">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex-three btn-wrap-activitis">
                                                    <Link href="/tailormade" className="icon-activitis flex-five">
                                                        <i className="icon-Vector-21" />
                                                    </Link>
                                                    <Link href="/tailormade" className="text-white get-start">
                                                        Get Started Today
                                                    </Link>
                                                </div>
                                                <img
                                                    src="/assets/images/page/mask-tap.png"
                                                    alt="image"
                                                    className="mask-tab"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}