"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image + Text */}
      <div className="relative md:w-1/2 w-full h-96 md:h-auto">
        <img
          src="/images/get-started-background.jpg"
          alt="Mountain Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Get Started Now with EPIC
          </h1>
          <p className="text-white max-w-md">
            Reach new heights with faster, smarter insights, powered by Everest
            Peak Intelligence Computing and our relentless AI-driven expertise
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center p-8 md:w-1/2 w-full bg-white">
        <h2 className="text-2xl font-semibold mb-6">Request call</h2>
        <p className="text-gray-600 mb-8">
          Give us some info, and we'll contact you
        </p>
        <form className="space-y-4">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Business Email" type="email" />
          <Input placeholder="Company Name" />
          <Input placeholder="Phone" type="tel" />
          <Textarea placeholder="Message" />

          {/* Fake Recaptcha */}
          <div className="border p-4 flex items-center space-x-4">
            <input type="checkbox" id="recaptcha" />
            <label htmlFor="recaptcha" className="text-sm">
              I'm not a robot
            </label>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Contact me
          </Button>
        </form>
      </div>
    </div>
  );
}
