"use client";
import React from "react";

import MyButton from "../shared/MyButton";

const HeroSection = () => {
  return (
    <section className="">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8 ">
        <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8 text-center mx-auto my-4">
          <h1
            style={{
              filter: "blur(0px)",
              opacity: 1,
              willChange: "auto",
              transform: "none",
            }}
            className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
          >
            <span
              style={{ opacity: 1, willChange: "auto", transform: "none" }}
              className="inline-block px-1 md:px-2 text-balance font-semibold"
            >
              YourMunshi Pakistan&apos;s First AI Legal Assistant
            </span>
          </h1>
        </div>
        <div className="text-center mx-auto flex items-center justify-center my-8">
          <MyButton button_text="Start Now" />
        </div>
        <div
          style={{
            filter: "blur(0px)",
            opacity: 1,
            willChange: "auto",
            transform: "none",
          }}
          className="relative mx-auto flex w-full items-center justify-center"
        >
          <div className="relative ">
            <video
              width="auto"
              height="auto"
              autoPlay
              muted // Add muted for autoplay to work in modern browsers
              loop // Optionally add loop if you want the video to repeat
              className="rounded-lg shadow-lg mx-auto sm:w-3/4"
            >
              <source
                src="video.mp4" // Replace with actual video URL
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
