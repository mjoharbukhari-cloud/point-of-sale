import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FormControl, FormLabel, Input } from "@mui/joy";

export default function Step4({ formData, prevStep, nextStep, handleSubmit }) {
  const [paymentProof, setPaymentProof] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setPaymentProof(e.target.files[0]);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
    setPaymentProof(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">
        Payment Information
      </h2>
      <p>Transfer the payment and upload receipt.</p>

      <div className="bg-gray-100 rounded-lg p-4 space-y-2 mt-4">
        <div className="flex space-x-2">
          <span className="font-bold">Account Title:</span>
          <span>EduTech Solutions</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">IBAN:</span>
          <span>PK36SCBL0000001123456702</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Bank Name:</span>
          <span>Bank Al Habib</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Amount:</span>
          <span>Rs 150,000</span>
        </div>
      </div>

      <div className="mt-6">
        <FormControl>
          <FormLabel>Upload Payment Proof (PDF, JPG, PNG)</FormLabel>
          <Input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
        </FormControl>

        {paymentProof && (
          <div className="mt-2 text-sm text-green-600">
            Uploaded: {paymentProof.name}
          </div>
        )}
      </div>

      <div className="flex justify-between mt-10">
        <button
          className="bg-secondary hover:bg-secondary-dark transition text-white flex items-center py-2 px-4 rounded"
          onClick={prevStep}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <button
          className="bg-secondary flex items-center text-white py-2 px-4 rounded hover:bg-secondary-dark transition"
          onClick={() => {
            if (paymentProof) {
              nextStep(); // You can also call handleSubmit(paymentProof) if needed
            } else {
              alert("Please upload payment proof first.");
            }
          }}
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
