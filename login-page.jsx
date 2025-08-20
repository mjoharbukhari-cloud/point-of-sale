import React, { useState } from "react";

// import { FaArrowLeft } from "react-icons/fa";

import { Steps } from "antd";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

const { Step } = Steps;

const steps = [
  { title: "Personal Info" },
  { title: "Verification" },
  { title: "Packages" },
  { title: "Review & Submit" },
];

const LoginPage = () => {
  const [step, setStep] = useState(0); // NOTE: Steps index starts from 0
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: [],
    location: "",
    age: "",
    address: "",
    code: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert("Form submitted:\n\n" + JSON.stringify(formData, null, 2));
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Step4
            formData={formData}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* <button
        className="bg-secondary flex items-center text-white font-light py-1 px-3 rounded-sm"
        onClick={prevStep}
        style={{ marginRight: "10px" }}
      >
        <FaArrowLeft className="mr-2" /> Back
      </button> */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-2xl w-full p-8 bg-white shadow-md rounded">
          {/* Stepper */}
          <Steps current={step} size="small" responsive>
            {steps.map((item, index) => (
              <Step key={index} title={item.title} />
            ))}
          </Steps>

          {/* Optional border line */}
          <div className="border border-black my-8"></div>

          {/* Step content */}
          <div className="mt-6">{renderStepContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
