import React from "react";

const Video = () => {
  return (
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
  );
};

export default Video;
