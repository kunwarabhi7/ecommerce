"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Clock, MailPlus, Map, Smartphone } from "lucide-react";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="lg:minfirst-letter relative dark:bg-zinc-800">
      <Slider {...settings}>
        <div className="w-full py-32 lg:py-0 lg:h-screen  relative ">
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full z-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1531311243148-d2653fa84700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95JTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
              alt="image 1"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="z-50 h-screen absolute bg-red-500 w-full">
            <h3>Abhishek</h3>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
