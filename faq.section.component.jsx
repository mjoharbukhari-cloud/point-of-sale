import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Container } from "../components/container.component";

export default function FaqSectionComponent() {
  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items.",
    },
    {
      id: 2,
      question:
        "What image formats are supported for artwork submissions at PrintsYou?",
      answer: "We support JPEG, PNG, and PDF formats.",
    },
    {
      id: 3,
      question:
        "Can I still submit an order at PrintsYou if I don't have a logo or artwork?",
      answer: "Yes, our support team is available 24/7 via chat and email.",
    },
  ];

  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };

  return (
    <div id="faqs" className="p-4">
      <Container>
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl sm:text-left text-center font-semibold capitalize mt-10">
          Frequently Asked Questions
        </h2>

      
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <AccordionGroup className="border-t-2 border-b-2">
              {faqs.map((faq) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                >
                  <AccordionSummary
                    className="py-2 font-bold"
                    indicator={
                      expanded === faq.id ? <RxCross2 /> : <IoIosAdd />
                    }
                  >
                    {faq.question}
                  </AccordionSummary>
                  <AccordionDetails>{faq.answer}</AccordionDetails>
                </Accordion>
              ))}
            </AccordionGroup>
          </div>
        </div>
      </Container>
    </div>
  );
}
