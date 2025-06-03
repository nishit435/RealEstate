import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const carouselImages = [
    assets.abtcmp1,
    assets.abtcmp2,
    assets.abtcmp3,
    assets.abtcmp4,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden text-center ${
        !isHome ? "pt-32" : ""
      }`}
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Company
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-start md:gap-20 w-full max-w-7xl">
        {/* Carousel Section */}
        <div
          className="w-full sm:w-1/2 max-w-lg flex-shrink-0"
          style={{ minHeight: "460px" }}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-lg shadow-lg h-full"
            style={{ position: "relative" }}
          >
            {carouselImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[460px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <style>{`
            .swiper-button-next, .swiper-button-prev {
              color: rgba(59, 130, 246, 0.6);
              width: 24px;
              height: 24px;
            }
            .swiper-button-next::after, .swiper-button-prev::after {
              font-size: 18px;
            }
            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: rgba(59, 130, 246, 0.6);
              opacity: 0.7;
            }
            .swiper-pagination-bullet-active {
              background: rgb(59, 130, 246);
              opacity: 1;
            }
          `}</style>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start justify-start mt-10 md:mt-0 text-gray-600 flex-grow w-full">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full max-w-lg 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">50+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">100+</p>
              <p>Basements Dug</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">4+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-3xl text-left leading-relaxed">
            Looking for hassle-free, professional excavation? We deliver fast,
            accurate, and cost-effective services for all types of earthmoving
            work in{" "}
            <span className="text-2xl font-bold">Ahmedabad & Gandhinagar</span>.
            Whether it's foundation digging, trenching, or grading — we get it
            done right the first time. Our experienced operators and advanced
            machinery keep your project on schedule and within budget. We don’t
            just move earth — we build trust through reliability, safety, and
            unmatched service. Formerly known as{" "}
            <span className="whitespace-nowrap text-2xl font-bold">
              Ganesh Transport
            </span>
            , we’ve grown with a stronger focus on precision excavation — while
            keeping the same values and commitment our clients have trusted for
            years. Let us handle the groundwork, so you can move forward
            with confidence.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
