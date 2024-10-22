import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CSS/HomePage.css";
import 'swiper/css';
import NavBar from "../Components/NavBar";
import ContactForm from "../Components/ContactForm";
import { Autoplay } from "swiper/modules";
export default function HomePage() {
  return (
    <main className="flex flex-col content-center justify-center">
      <NavBar />
      <div className="flex flex-col content-center justify-center">
        <div className="text-white flex flex-col text-center font-sfth-rg text-[5rem] ">
          Hi, I'm Mohammad Zahid
        </div>
        <div className="h-10 flex flex-row content-center justify-center outline text-center">
          <div className="text-white outline"> Im a</div>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide className="h-5">Software Engineer</SwiperSlide>
            <SwiperSlide className="h-5">Web Developer</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
