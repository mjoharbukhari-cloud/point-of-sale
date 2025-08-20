import React from "react";
import { Container } from "../container.component";
import { useNavigate } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";

const plans = [
  {
    save: "Save 5%",
    title: "Basic Plan",
    price: "Rs 9,999/-",
    features: [
      "Up to 50 product listings",
      "Basic storefront design",
      "Email support",
      "1 payment integration",
    ],
  },
  {
    save: "Save 10%",
    title: "Standard Plan",
    price: "Rs 19,999/-",
    features: [
      "Up to 200 product listings",
      "Custom UI design",
      "Priority support",
      "Multi-payment gateways",
    ],
  },
  {
    save: "Save 20%",
    title: "Premium Plan",
    price: "Rs 29,999/-",
    features: [
      "Unlimited product listings",
      "Premium storefront experience",
      "Dedicated support team",
      "Advanced analytics",
    ],
  },
];

const PricingPlans = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login");
  };

  return (
    <Container>
      <div id="pricing" className="font-serif text-gray-800 py-10">
        <h2 className="text-center text-2xl font-extrabold text-secondary mb-2">
          Pricing Plans
        </h2>
        <p className="text-center text-lg text-gray-400 mb-8">
          Select your type to see tailored plans
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.save && (
                <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  {plan.save}
                </span>
              )}

              <div className="flex flex-col border border-black rounded-xl shadow-sm p-6 bg-white hover:shadow-lg hover:scale-105 hover:border-secondary transition">
                <h3 className="text-2xl font-semibold text-center text-secondary mt-8">
                  {plan.title}
                </h3>

                <p className="text-3xl text-center font-bold mt-8 text-gray-900">
                  {plan.price}
                </p>

                <ul className="space-y-2 text-sm text-gray-700 mt-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckOutlined className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center mt-14">
                  <button
                    onClick={handleStartClick}
                    className="bg-secondary text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingPlans;
