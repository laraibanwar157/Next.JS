import Image from "next/image";
import React from "react";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <div className="h-screen">
      <Header/>
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start font-serif m-12">
           <h1 className="font-bold text-[40px] text-[#000000]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
           <p className="text-[#A29875] w-[450px]">An example of intricate workmanship and detail, elegant necklaces and long and short chains 
            form a part of our desirable collection.</p>
            <button className="bg-[#A29875] text-[#FFFFFF] px-8 py-2 rounded-lg mt-2">Explore Now</button>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
        <Image
        src={"/images/figma_image.png"}
        alt="figma_image"
        width={300}
        height={300}
        />
        </div>
      </div>
    </div>
  );
};

export default HomePage;