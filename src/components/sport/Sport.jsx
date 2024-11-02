import React from "react";
import HeaderSection from "../HeaderSection";
import { datas } from "@/utils/datas";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import { truncateText2 } from "@/utils/truncateText2";

const Sport = () => {
  return (
    <div className="space-y-2 mt-2">
      <HeaderSection
        title={"កីឡា"}
        textColor={"text-green-600"}
        bgColor={"bg-green-600"}
      />
      <div className="grid">
        {/* Big Card */}
        <div className="grid grid-cols-3 gap-2 mb-1">
          {datas.map(
            (data, index) =>
              index < 3 && (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg space-y-2"
                >
                  <Image
                    src={data.imageUrl}
                    width={400}
                    height={400}
                    alt="Image"
                    className="h-[120px] md:h-[220px] object-cover object-center"
                  />
                  <div className="flex gap-2">
                    <h2 className="bg-green-600 text-xs text-white py-1 px-6">
                      កីឡា
                    </h2>
                    <div className="text-[0.34rem] md:text-[0.5rem] flex flex-col justify-center">
                      <p>ថ្ងៃនេះ ម៉ោង 14:02</p>
                      <p>ចំនួនមតិ 0 | ចំនួនចែករំលែក​ 0</p>
                    </div>
                  </div>
                  <h3 className="pb-2 px-4 text-[0.6rem] md:text-sm">
                    {truncateText(`${data.title}`)}
                  </h3>
                </div>
              )
          )}
        </div>
        {/* Small Card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {datas.map(
            (data, index) =>
              index >= 3 &&
              index < 11 && (
                <div
                  key={index}
                  className="h-[90px] flex mt-1 md:mt-2 items-center rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={data.imageUrl}
                    width={200}
                    height={200}
                    alt="Image"
                    className="w-1/2 h-full object-cover object-center"
                  />
                  <h3 className="py-2 px-2 text-[0.6rem] lg:text-xs">
                    {truncateText2(`${data.title}`)}
                  </h3>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sport;
