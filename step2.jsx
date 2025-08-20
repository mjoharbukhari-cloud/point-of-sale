import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

 
  const sendOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
    setGeneratedOTP(otp);
    setIsVerified(false);
    setError("");
    alert(`Your OTP is: ${otp}`);
  };

  
  const verifyOTP = () => {
    if (formData.code === generatedOTP) {
      setIsVerified(true);
      setError("");
      alert("OTP Verified Successfully!");
    } else {
      setError("Invalid OTP. Please try again.");
      setIsVerified(false);
    }
  };


  const handleNext = () => {
    if (isVerified) {
      nextStep();
    } else {
      alert("Please verify the OTP before proceeding.");
    }
  };

  return (
    <div className="space-y-8 font-serif">
      <h2 className="text-2xl font-bold text-secondary">Email Verification</h2>

      <button
        type="button"
        onClick={sendOTP}
        className="bg-secondary text-white font-light py-1 px-3 rounded-sm"
      >
        Send OTP
      </button>

      <div>
        <input
          className="border border-gray-300 rounded mt-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="code"
          type="text"
          placeholder="Enter 6-digit code"
          value={formData.code}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>

      <button
        type="button"
        onClick={verifyOTP}
        className="bg-secondary text-white font-light py-1 px-3 rounded-sm"
      >
        Verify OTP
      </button>

      {isVerified && (
        <p className="text-green-600 text-sm font-medium">OTP Verified ✔</p>
      )}

      <div className="flex flex-row justify-between mt-8">
        <button
          type="button"
          className="bg-secondary flex items-center text-white font-light py-1 px-3 rounded-sm"
          onClick={prevStep}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="bg-secondary flex items-center text-white py-1 px-3 rounded-sm font-light"
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Step2;
