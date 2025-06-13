'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import BookNowForm from "./BookNow"



export default function AboutUs() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Custom Made Tours by Randil Lanka Tours" imgbg={"/assets/images/page/about-us.jpg"}>
            <div className="container " style={{ marginTop: "50px" }}>
            <div className="text-center ">
              <h6 className="heading-6-medium">
              Make your travel planning easy and fun, and your journey stress-free! Share your preferences, and we’ll craft a personalized itinerary with a quote tailored just for you
              </h6>
            </div>
          </div>
          <BookNowForm/>
			</Layout>
		</>
	)
}