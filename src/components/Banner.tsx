"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

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
    <Slider>
      <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200 dark:bg-black relative">
        <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative">
          <Image
            src="https://images.unsplash.com/photo-1531311243148-d2653fa84700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95JTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
            alt="image 1"
            width={400}
            height={400}
            priority
            className="absolute rounded-md object-cover right-0 lg:-right-48 lg:h-screen"
          />
        </div>
        <div className="lg:absolute lg:top-1/2 lg:left-[70%] transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-5">
          <p className="text-xl uppercase">Get the Best products for you</p>
          <p className="w-96 text-center text-zinc-600">
            Browse the latest phones in the Market and get the one you dreamt
            for
          </p>
          <p className="text-2xl font-semibold">Phones in Demand</p>
          <button className="text-base font-medium text-white bg-designColor rounded-md px-4 py-2">
            Select a Product
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
