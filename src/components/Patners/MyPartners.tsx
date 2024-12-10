import React from "react";
import mufti from "@/assets/Patners/mufti (1).png";
import commingSoon from "@/assets/Patners/comingsoon.png";
import khatans from "@/assets/Patners/p1.png";
import Image from "next/image";

const MyPartners = () => {
  return (
    <section className="">
      <div className=" container mx-auto px-4 py-16 max-w-7xl">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase ">
          TRUSTED BY OUR PARTNERS LAW FIRMS
        </h3>
        <div className="relative mt-6">
          <div className="group flex mx-auto items-center justify-center space-x-4 overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s]">

            <div>
              <Image
                className=""
                src={commingSoon}
                alt="mufti"
                width={150}
                height={150}
              />
            </div>

            <div className="">
              <Image
                className=""
                src={mufti}
                alt="mufti"
                width={300}
                height={300}
              />
            </div>

            <div>
              <Image
                className=""
                src={khatans}
                alt="mufti"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className=""
                src={commingSoon}
                alt="mufti"
                width={150}
                height={150}
              />
            </div>

          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};

export default MyPartners;
