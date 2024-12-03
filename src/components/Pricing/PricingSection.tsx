"use client"
import React, { useState } from "react";
import { Right } from "../Hero/HeroSvg";
import Link from "next/link";


// const BasicLink = [
//   {montly : 'https://dev.mabdulm.com/login?subscription=monthly_basic'},
//   {yearly : 'https://dev.mabdulm.com/login?subscription=monthly_basic'}
// ]
// const StandardLink = [
//   {montly : 'https://dev.mabdulm.com/login?subscription=monthly_standard'},
//   {yearly : 'https://dev.mabdulm.com/login?subscription=monthly_standard'}
// ]
// const PremiumLink = [
//   {montly : 'https://dev.mabdulm.com/login?subscription=monthly_professional'},
//   {yearly : 'https://dev.mabdulm.com/login?subscription=monthly_professional'}
// ]

const BasicPlan = [
  { text: "10 Questions per day" },
  { text: "Feedback Option" },
  { text: "Email Support" },
];

const StandardPlan = [
  { text: "30 Questions per day" },
  { text: "Feedback Option" },
  { text: "Email Support" },
  { text: "Chat Support" },
  { text: "Upload Documents" },
];

const PrimiumPlan = [
  { text: "Unlimited  Questions" },
  { text: "Access New Features" },
  { text: "Feedback Option" },
  { text: "Email Support" },
  { text: "Chat Support" },
  { text: "Upload Documents" },
];

const PricingSection = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked); // Update state based on the checkbox status
    console.log("isChecked: ",isChecked)
  };


  return (
    <div>
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
          <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
            PRICING
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            Choose the plan that&apos;s right for you{" "}
          </h3>
        </div>
        <div className="flex justify-center mb-10">
          <span className="mr-2 font-semibold">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
          <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked} // Bind the checkbox state to `isChecked`
        onChange={handleToggleChange} // Update state when clicked
        className="sr-only peer"
      />
      <div
        className={`relative w-11 h-6 ${isChecked ? 'bg-gray-600' : 'bg-gray-200'} peer-focus:outline-none dark:peer-focus:ring-gray-800-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600`}
      />
    </label>
          </label>
          <span className="ml-2 font-semibold">Yearly</span>
        </div>
        <div className="grid md:hidden grid-cols-1  md:grid-cols-3  gap-4">
          <div className="rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right">
            <div>
              <p className="text-base font-semibold text-muted-foreground">
                BASIC
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  Free
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  / seat / month
                </span>
              </p>
              <p className="text-xs leading-5 text-muted-foreground">Forever</p>
              <ul className="mt-5 gap-2 flex flex-col">
                {BasicPlan.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Right />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <hr className="w-full my-4"></hr>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-white text-black"
                href="https://chat.yourmunshi.net/login"
              >
                Login/Signup
              </Link>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                A basic plan to get started
              </p>
            </div>
          </div>
          <div
            className="rounded-2xl p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-primary border-[2px] z-10"
            style={{ opacity: 1, transform: "none", willChange: "auto" }}
          >
            <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 576 512"
                className="text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg>
              <span className="text-white ml-1 font-sans font-semibold">
                Popular
              </span>
            </div>
            <div>
              <p className="text-base font-semibold text-muted-foreground">
                STANDARD
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  {isChecked ? "16200" : "1500"}
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                {isChecked ? " / seat / Year" : " / seat / month"} 
                </span>
              </p>
              <p className="text-xs leading-5 text-muted-foreground">
              {isChecked ? "billed yearly" : "billed monthly"} 
              </p>
              <ul className="mt-5 gap-2 flex flex-col">
                {StandardPlan.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Right />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <hr className="w-full my-4" />
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-primary text-white"
                href="/"
              >
                Subscribe
              </Link>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                Our full suite of AI-powered features
              </p>
            </div>
          </div>
          <div className="rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-left">
            <div>
              <p className="text-base font-semibold text-muted-foreground">
                PROFESSIONAL
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                {isChecked ? "27000" : "2500"}  
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                {isChecked ? " / seat / Year" : " / seat / month"} 
                </span>
              </p>
              <p className="text-xs leading-5 text-muted-foreground">
              {isChecked ? "billed yearly" : "billed monthly"} 
              </p>
              <ul className="mt-5 gap-2 flex flex-col">
                {PrimiumPlan.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Right />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <hr className="w-full my-4" />
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-white text-black"
                href="/"
              >
                Subscribe
              </Link>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                Tailored for large firms and enterprises
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1  md:grid-cols-3  gap-4">
          <div
            style={{
              opacity: 1,
              transform: "translateX(30px) scale(0.94)",
              willChange: "auto",
            }}
            className="rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right"
          >
            <div>
              <p className="text-base font-semibold text-muted-foreground">
                BASIC
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  Free
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  / seat / month
                </span>
              </p>
              <p className="text-xs leading-5 text-muted-foreground">Forever</p>
              <ul className="mt-5 gap-2 flex flex-col">
                {BasicPlan.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Right />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <hr className="w-full my-4"></hr>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-white text-black"
                href="https://chat.yourmunshi.net/login"
              >
                Login/Signup
              </Link>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                A basic plan to get started
              </p>
            </div>
          </div>
          <div
            className="rounded-2xl p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-primary border-[2px] z-10"
            style={{ opacity: 1, transform: "none", willChange: "auto" }}
          >
            <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 576 512"
                className="text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg>
              <span className="text-white ml-1 font-sans font-semibold">
                Popular
              </span>
            </div>
            <div>
              <p className="text-base font-semibold text-muted-foreground">
                STANDARD
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  {isChecked ? "16200" : "1500"}
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                {isChecked ? " / seat / Year" : " / seat / month"} 
                </span>
              </p>
              <p className="text-xs leading-5 text-muted-foreground">
              {isChecked ? "billed yearly" : "billed monthly"} 
              </p>
              <ul className="mt-5 gap-2 flex flex-col">
                {StandardPlan.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Right />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <hr className="w-full my-4" />
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-primary text-white"
                href="https://payments.yourmunshi.net/product/standard-package/"
              >
                Subscribe
              </Link>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                Our full suite of AI-powered features
              </p>
            </div>
          </div>
          <div
            className="rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-left"
            style={{
              opacity: 1,
              transform: "translateX(-30px) scale(0.94)",
              willChange: "auto",
            }}
          >
            <div>
              <p className="text-base font-semibold text-muted-foreground">
                PROFESSIONAL
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                {isChecked ? "27000" : "2500"}  
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                {isChecked ? " / seat / Year" : " / seat / month"} 
                </span>
              </p>
              <p className="text-xs leading-5 text-muted-foreground">
              {isChecked ? "billed yearly" : "billed monthly"} 
              </p>
              <ul className="mt-5 gap-2 flex flex-col">
                {PrimiumPlan.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Right />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <hr className="w-full my-4" />
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white bg-white text-black"
                href="https://payments.yourmunshi.net/product/standard-package/"
              >
                Subscribe
              </Link>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                Tailored for large firms and enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
