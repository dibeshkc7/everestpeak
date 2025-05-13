"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

export default function GetStarted() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    message: "",
  });

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast.warning("⚠️ Please fill out the First Name field.");
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.warning("⚠️ Please fill out the Last Name field.");
      return false;
    }
    if (!formData.email.trim()) {
      toast.warning("⚠️ Please fill out the Business Email field.");
      return false;
    }
    if (!formData.companyName.trim()) {
      toast.warning("⚠️ Please fill out the Company Name field.");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.warning("⚠️ Please fill out the Phone field.");
      return false;
    }
    if (!formData.message.trim()) {
      toast.warning("⚠️ Please fill out the Message field.");
      return false;
    }
    if (!captchaToken) {
      toast.warning("⚠️ Please verify that you're not a robot.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // If validation successful
    console.log("Form submitted:", formData, "Captcha token:", captchaToken);
    toast.success("🎉 Form submitted successfully!");

    // Optional: clear the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phone: "",
      message: "",
    });
    setCaptchaToken(null);
  };

  return (
    <div
      id="get-started"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: "url('/images/get-started-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="text-center md:text-left text-white max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get Started Now with EPIC
          </h1>
          <div className="h-0.5 w-16 bg-white mx-auto md:mx-0"></div>
          <p className="text-lg">
            Reach new heights with faster, smarter insights, powered by Everest
            Peak Intelligence Computing and our relentless AI-driven expertise.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Request call</h2>
          <p className="text-gray-600 mb-6">
            Give us some info, and we'll contact you
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              placeholder="Business Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <Input
              placeholder="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <div className="text-xs text-gray-600 mt-4">
              By submitting your information, you agree to the processing of
              your personal data by EPIC as described in the Privacy Statement.
            </div>

            <div className="flex justify-center mt-4">
              <ReCAPTCHA
                sitekey="6Lcu0BwrAAAAAJNgiQWDC6tDDhkN64yXZ_X_rX2I"
                onChange={handleCaptchaChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
            >
              Contact me
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
