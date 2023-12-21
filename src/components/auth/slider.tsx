"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import slide1 from "@/assets/auth-slides/slide(1).jpeg"
import slide2 from "@/assets/auth-slides/slide(2).jpeg"
import slide3 from "@/assets/auth-slides/slide(3).jpeg"
import slide4 from "@/assets/auth-slides/slide(4).jpeg"
import slide5 from "@/assets/auth-slides/slide(5).jpeg"
import loginRevBg from "@/assets/images/phoneFrame.png"

// import required modules
import { EffectFade } from "swiper/modules"
// background-position: 0 0;
// background-size: 454px 618px;
// -webkit-flex-basis: 454px;
// -ms-flex-preferred-size: 454px;
// flex-basis: 610px"
export default function AuthSlider() {
  const imagesData = [slide1, slide2, slide3, slide4, slide5]
  const swiperParams = {
    loop: true,
    autoplay: {
        delay: 3000
    },
    effect: 'creative',
    // onSlideChange: handleSlideChange,
    speed: 2000
};
  return (
    <>
      <div
        style={{ backgroundImage: `url('${loginRevBg.src}')`}}
        className="w-full self-center bg-no-repeat h-[618px] ml-0 mr-[-15px] max-w-lg select-none"
      >
        <Swiper
          {...swiperParams}
          loop={true}
          spaceBetween={30}
          effect={"fade"}
          modules={[EffectFade]}
          className="mySwiper w-full h-full"
        >
          {imagesData.map((img, idx) => (
            <SwiperSlide key={idx} className="bg-center bg-cover">
              <img loading="lazy" className="object-cover w-full h-full" src={img.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
