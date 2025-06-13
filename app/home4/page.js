
import Layout from "@/components/layout/Layout"
import AboutUs4 from "@/components/sections/AboutUs4"
import Activities3 from "@/components/sections/Activities3"
import Blog2 from "@/components/sections/Blog2"
import BrandLogo4 from "@/components/sections/BrandLogo4"
import Cta4 from "@/components/sections/Cta4"
import Destination5 from "@/components/sections/Destination5"
import Feature4 from "@/components/sections/Feature4"
import Impressino from "@/components/sections/Impressino"
import Places from "@/components/sections/Places"
import SelectForm3 from "@/components/sections/SelectForm3"
import Slider4 from "@/components/sections/Slider4"
import Testimonial4 from "@/components/sections/Testimonial4"
import TopThisWeek1 from "@/components/sections/TopThisWeek1"
import Video2 from "@/components/sections/Video2"
import WhyChoseUs from "@/components/sections/WhyChoseUs"
export default function Home4() {

	return (
		<>

			<Layout headerStyle={4} footerStyle={1}>
				<Slider4 />
				<SelectForm3 />
				<AboutUs4 />
				<Activities3 />
				<Video2 />
				<Feature4 />
				<Destination5 />
				<Cta4 />
				<Impressino />
				<TopThisWeek1 />
				<WhyChoseUs />
				<Places />
				<Testimonial4 />
				<Blog2 />
				<BrandLogo4 />
			</Layout>
		</>
	)
}