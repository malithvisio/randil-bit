
import Layout from "@/components/layout/Layout"
import AboutUs2 from "@/components/sections/AboutUs2"
import Activities2 from "@/components/sections/Activities2"
import BannerPart from "@/components/sections/BannerPart"
import Blog1 from "@/components/sections/Blog1"
import BrandLogo2 from "@/components/sections/BrandLogo2"
import Cta2 from "@/components/sections/Cta2"
import Destination2 from "@/components/sections/Destination2"
import Feature1 from "@/components/sections/Feature1"
import Feature2 from "@/components/sections/Feature2"
import MobieApp from "@/components/sections/MobieApp"
import Service1 from "@/components/sections/Service1"
import Slider2 from "@/components/sections/Slider2"
import Testimonial2 from "@/components/sections/Testimonial2"
import Video1 from "@/components/sections/Video1"
export default function Home2() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<Slider2 />
				<BrandLogo2 />
				<BannerPart />
				<AboutUs2 />
				<Activities2 />
				<Feature1 />
				<Destination2 />
				<Cta2 />
				<Video1 />
				<Service1 />
				<Feature2 />
				<Testimonial2 />
				<Blog1 />
				<MobieApp />
			</Layout>
		</>
	)
}