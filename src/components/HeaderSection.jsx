import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const HeaderSection = ({ title, bgColor, textColor }) => {
  return (
    <div className="text-white">
      <div className="my-1 flex justify-between items-center">
        <Link href="/" className={`${bgColor} h-10 w-[140px] relative`}>
          <h2 className="absolute my-auto top-[0.4rem] px-6 text-xl">
            {title}
          </h2>
        </Link>
        <Link href="/" className={`${textColor} flex items-end gap-4 px-6`}>
          <h2 className="cursor-pointer text-lg font-semibold SFPro">
            View All
          </h2>
          <ArrowRight className="cursor-pointer mb-1" />
        </Link>
      </div>
      <div className={`${bgColor} h-3 w-full`}></div>
    </div>
  );
};

export default HeaderSection;
