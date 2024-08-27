import React from "react";
import BannerImg from "@/assets/billions-banner.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden p-5 py-10">
      <Image
        src={BannerImg}
        alt="Banner"
        width={1023}
        height={576}
        className="w-full h-full rounded-lg"
      />
    </div>
  );
};

export default Banner;
