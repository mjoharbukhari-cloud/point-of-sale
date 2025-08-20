import React, { useRef } from "react";
import { Container } from "../container.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation"; 

export default function Service() {
  const sliderRef = useRef(null);

  const serviceList = [
    {
      title: "Inventory",
      image: "/assets/service.png",
      description:
        "Inventory is the stock of goods a business holds for sale or use. Local inventory is managed on-site, often using manual methods or offline software.",
    },
    {
      title: "Bar Code Reader",
      image: "/assets/service.png",
      description:
        "Inventory is the stock of goods a business holds for sale or use. Local inventory is managed on-site, often using manual methods or offline software.",
    },
    {
      title: "ATM Machine",
      image: "/assets/service.png",
      description:
        "Inventory is the stock of goods a business holds for sale or use. Local inventory is managed on-site, often using manual methods or offline software.",
    },
    {
      title: "ATM Machine",
      image: "/assets/service.png",
      description:
        "Inventory is the stock of goods a business holds for sale or use. Local inventory is managed on-site, often using manual methods or offline software.",
    },
  ];

  return (
    <div id="services">
      <Container>
        <h2 className="text-center text-2xl font-extrabold font-serif text-secondary mt-10">
          Our Services
        </h2>

        <Swiper
          ref={sliderRef}
          loop={true}
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={true} 
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="hero-swiper mt-10"
        >
          {serviceList.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg border border-black overflow-hidden hover:shadow-xl hover:border-secondary hover:scale-95 transition-shadow duration-300">
                <div className="flex p-4 justify-center">
                  <img
                    src={service.image}
                    alt="Service"
                    className="w-2/3 h-2/3"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl text-center font-bold mb-2 text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-center text-sm">
                    {service.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-blue-700 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
