'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	slidesPerView: 2,
	loop: true,
	spaceBetween: 30,
	speed: 10000,
	observer: true,
	observeParents: true,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},
}

export default function BrandLogoSlider() {
	return (
		<>
			<Swiper {...swiperOptions} className="swiper brand-logo overflow-hidden">
				<div className="swiper-wrapper">
					<SwiperSlide>
						<img src="/assets/images/page/brand-logo.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/assets/images/page/brand-logo.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/assets/images/page/brand-logo.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/assets/images/page/brand-logo.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/assets/images/page/brand-logo.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/assets/images/page/brand-logo.png" alt="" />
					</SwiperSlide>
				</div>
			</Swiper>
		</>
	)
}
