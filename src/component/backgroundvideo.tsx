import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-[78vh] overflow-hidden">
      {" "}
      {/* Adjusted height to match screenshot */}
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/everestbackgroundvideo1.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-8">
        <h1 className="text-[55px] font-bold leading-[1.2] max-w-4xl font-poppins">
          100X Faster Security Reviews <br /> Powered by AI, Verified by Expert
          Humans
        </h1>
        {/* Extra Long Line Below Heading */}
        <div className="w-full max-w-4xl h-[2px] bg-white mt-4"></div>
        <p className="mt-6 text-[20px] max-w-3xl font-poppins">
          The all-in-one, always-on solution for navigating security assessments
          with unmatched speed and precision.
        </p>
        <div className="mt-8 flex space-x-6">
          <button className="px-8 py-3 text-[18px] font-medium bg-white text-black rounded-md border border-gray-300 hover:bg-gray-100 shadow-md font-poppins">
            Get started now
          </button>
          <button className="px-8 py-3 text-[18px] font-medium bg-transparent text-white rounded-md border border-white hover:bg-white hover:text-black shadow-md font-poppins">
            Read Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
