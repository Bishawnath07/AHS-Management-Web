// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import SearchBar from "./SearchBar";
import './Banner.css'
import img2 from './Images/alokjhari high school.jpg'
import img4 from './Images/alokjhari high school3.jpg'
import img5 from './Images/alokjhari high school4.jpg'
import img6 from './Images/alokjhari high school5.jpg'


// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* <SearchBar></SearchBar> */}

        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="custom-slide">
              <div className="relative ">
                <img src={img6} className="md:h-[60vh] h-[20vh] opacity-100    w-full " alt="" />

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative ">
                <img src={img2} className="md:h-[60vh]  h-[20vh] opacity-100    w-full " alt="" />

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative ">
                <img src={img4} className="md:h-[60vh] h-[20vh] opacity-100    w-full " alt="" />

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative ">
                <img src={img5} className="md:h-[60vh] h-[20vh] opacity-100    w-full " alt="" />

              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="relative ">
                <img src={img3} className="md:h-[60vh] h-[16vh] opacity-100    w-full " alt="" />
                <div className="absolute lg:top-[5rem] top-10 lg:left-[2rem]">
                  <img src={logo} alt="" />

                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="relative ">
                <img src={img6} className="md:h-[60vh] h-[16vh] opacity-100    w-full " alt="" />
                <div className="absolute lg:top-[5rem] top-10 lg:left-[2rem]">
                  <img src={logo} alt="" />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative ">
                <img src={img7} className="md:h-[60vh] h-[16vh] opacity-100    w-full " alt="" />
                <div className="absolute lg:top-[5rem] top-10 lg:left-[2rem]">
                  <img src={logo} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative ">
                <img src={img8} className="md:h-[60vh] h-[16vh] opacity-100    w-full " alt="" />
                <div className="absolute lg:top-[5rem] top-10 lg:left-[2rem]">
                  <img src={logo} alt="" />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative ">
                <img src={img9} className="md:h-[60vh] h-[16vh] opacity-100    w-full " alt="" />
                <div className="absolute lg:top-[5rem] top-10 lg:left-[2rem]">
                  <img src={logo} alt="" />

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative ">
                <img src={img10} className="md:h-[60vh] h-[16vh] opacity-100    w-full " alt="" />
                <div className="absolute lg:top-[5rem] top-10 lg:left-[2rem]">
                  <img src={logo} alt="" />

                </div>
              </div>
            </SwiperSlide> */}


          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
