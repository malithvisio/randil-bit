
import Layout from "@/components/layout/Layout"
import AboutUs5 from "@/components/sections/AboutUs5"
import Blog3 from "@/components/sections/Blog3"
import Counter3 from "@/components/sections/Counter3"
import Cta5 from "@/components/sections/Cta5"
import Cta6 from "@/components/sections/Cta6"
import Destination6 from "@/components/sections/Destination6"
import Discount from "@/components/sections/Discount"
import Feature5 from "@/components/sections/Feature5"
import Feature6 from "@/components/sections/Feature6"
import IgPost from "@/components/sections/IgPost"
import SelectForm4 from "@/components/sections/SelectForm4"
import Service2 from "@/components/sections/Service2"
import Slider5 from "@/components/sections/Slider5"
import Testimonial5 from "@/components/sections/Testimonial5"
import TopThisWeek2 from "@/components/sections/TopThisWeek2"
export default function Home5() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<Slider5 />
				<SelectForm4 />
				<Destination6 />
				<Discount />
				<AboutUs5 />
				<TopThisWeek2 />
				<Cta5 />
				<Counter3 />
				<Feature5 />
				<Feature6 />
				<Testimonial5 />
				<Service2 />
				<IgPost />
				<Blog3 />
				<Cta6 />
			</Layout>
		</>
	)
}