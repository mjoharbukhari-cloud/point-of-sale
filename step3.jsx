import React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { SlArrowDown } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const planOptions = [
  {
    label: "Basic plan",
    items: ["Inventory", "Sales", "Reports"],
  },
  {
    label: "Standard plan",
    items: ["Products", "Users", "Analytics"],
  },
  {
    label: "Premium plan",
    items: ["CRM", "Marketing", "Automation"],
  },
];

export default function Step3({ nextStep, prevStep }) {
  return (
    <div className="p-4 font-serif">
      <div className="flex justify-center items-center">
        <AccordionGroup
          className="border-t-2 border-b-2 m-4"
          sx={{
            maxWidth: 600,
          }}
        >
          {planOptions.map((plan, index) => (
            <Accordion key={index}>
              <AccordionSummary
                className="py-2 font-bold"
                indicator={<SlArrowDown />}
              >
                {plan.label}
              </AccordionSummary>
              <AccordionDetails>
                <ul className="list-disc list-inside">
                  {plan.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </div>
      <div className="flex flex-row justify-between mt-8">
        <button
          className="bg-secondary flex items-center text-white font-light py-1 px-3 rounded-sm"
          onClick={prevStep}
          style={{ marginRight: "10px" }}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <button
          className="bg-secondary flex items-center text-white py-1 px-3 rounded-sm  font-light"
          onClick={nextStep}
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
