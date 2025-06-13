
import Layout from "@/components/layout/Layout"
import AboutUs3 from "@/components/sections/AboutUs3"
import BrandLogo3 from "@/components/sections/BrandLogo3"
import Counter2 from "@/components/sections/Counter2"
import Cta3 from "@/components/sections/Cta3"
import Cta7 from "@/components/sections/Cta7"
import Destination3 from "@/components/sections/Destination3"
import Faq from "@/components/sections/Faq"
import Feature3 from "@/components/sections/Feature3"
import IgPost2 from "@/components/sections/IgPost2"
import SelectForm2 from "@/components/sections/SelectForm2"
import Slider3 from "@/components/sections/Slider3"
import Testimonial3 from "@/components/sections/Testimonial3"
import TopDestination4 from "@/components/sections/TopDestination4"
import TopWeek from "@/components/sections/TopWeek"
import TourPackage2 from "@/components/sections/TourPackage2"
import TourSelect from "@/components/sections/TourSelect"
export default function Home3() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={1}>
				<Slider3 />
				<SelectForm2 />
				<BrandLogo3 />
				<TourSelect />
				<AboutUs3 />
				<TourPackage2 />
				<Faq />
				<TopWeek />
				<Cta3 />
				<Destination3 />
				<TopDestination4 />
				<Feature3 />
				<Counter2 />
				<Testimonial3 />
				<Cta7 />
				<IgPost2 />
			</Layout>
		</>
	)
}