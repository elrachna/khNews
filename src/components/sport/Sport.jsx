import React from "react";
import HeaderSection from "../HeaderSection";
import { datas } from "@/utils/datas";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText";

const Sport = () => {
  return (
    <div className="space-y-2 mt-2">
      <HeaderSection
        title={"កីឡា"}
        textColor={"text-green-600"}
        bgColor={"bg-green-600"}
      />
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-3 gap-2">
          {datas.map(
            (data, index) =>
              index < 3 && (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-xl space-y-2"
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

        {/* {datas.map(
          (data, index) =>
            index >= 3 &&
            index === 11 && (
              <div key={index} className="grid grid-cols-4 grid-rows-2">
                <Image
                  src={data.imageUrl}
                  width={400}
                  height={400}
                  alt="Image"
                  className=""
                />
                <h3>{truncateText(`${data.title}`)}</h3>
              </div>
            )
        )} */}
      </div>
    </div>
  );
};

export default Sport;
