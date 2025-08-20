import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function Step4({ formData, prevStep, handleSubmit }) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [feedback, setFeedback] = React.useState("");

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
        Review & Submit
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <label className="text-lg font-medium">Feedback</label>
        <textarea
          className="w-full h-28 border border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Give your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>
              <span className="text-sm font-medium text-gray-600">
                {labels[hover !== -1 ? hover : value]}
              </span>
            </Box>
          )}
        </Box>
      </div>

      <div className="flex justify-between mt-10">
        <button
          className="bg-secondary hover:bg-secondary-dark transition text-white flex items-center py-2 px-4 rounded"
          onClick={prevStep}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <button
          className="bg-secondary hover:bg-secondary-dark transition text-white py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
