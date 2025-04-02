"use client";

import Image from "next/image";
import { cn } from "@/lib/utils"; // Utility function for conditional class names (ShadCN)

const logos = [
  "/images/contentstack.png",
  "/images/monday.png",
  "/images/stackoverflow.png",
  "/images/airtable.png",
  "/images/wex.png",
  "/images/snap.png",
  "/images/orum.png",
  "/images/mongodb.png",
  "/images/figma.png",
  "/images/openai.png",
];

const TrustedBy = () => {
  return (
    <div className="bg-black py-10">
      <h2 className="text-center text-white text-xl font-semibold mb-6">
        TRUSTED BY
      </h2>
      <div className="overflow-hidden whitespace-nowrap relative w-full">
        <div className="flex space-x-12 animate-marquee">
          {/* Render logos twice for seamless scrolling */}
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Company Logo"
              width={100} // Adjust based on your design
              height={40}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TrustedBy;
