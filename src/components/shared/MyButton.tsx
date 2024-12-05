
import Link from "next/link";
import React from "react";

const MyButton = ({ button_text }: { button_text: string }) => {
  return (
    <Link
      className="items-center justify-center whitespace-nowrap rounded-md text-sm sm:text-lg 2xl:text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 sm:px-6 sm:pt-3 sm:pb-2.5 2xl:px-8 2xl:pt-6 2xl:pb-5  w-full sm:w-auto text-background flex gap-2"
      href="https://chat.yourmunshi.net/login"
    >
     {button_text}
    </Link>
  );
};

export default MyButton;
