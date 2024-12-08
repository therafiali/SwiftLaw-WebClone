"use client";
import React from "react";

import MyButton from "../shared/MyButton";
import { TextGenerateEffect } from "../ui/TextEffect";
import Image from "next/image";
import pak from "@/assets/Logo/pak.svg";

const HeroSection = () => {
  const h1 = `YourMunshi Pakistan's First AI Legal Assistant`;
  return (
    <section className="">
      <div className="relative h-screen flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8 ">
        <div className="absolute left-0 top-3 sm:-top-56">
          <Image src={pak} alt="" />
        </div>

        <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden  text-center mx-auto my-4">
          <h1
            style={{
              filter: "blur(0px)",
              opacity: 1,
              willChange: "auto",
              transform: "none",
            }}
            className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl my-4"
          >
            <span
              style={{ opacity: 1, willChange: "auto", transform: "none" }}
              className="inline-block px-1 md:px-2 text-balance font-semibold"
            >
              <TextGenerateEffect words={h1} />
            </span>
          </h1>
        </div>

        <div className="text-center mx-auto flex items-center justify-center my-8">
          <MyButton button_text="Start Now" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
