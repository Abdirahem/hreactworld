import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);

  // handlesteps
  const previousHandler = () => {
    step > 1 ? setStep(step - 1) : "";
  };
  const nextHandler = () => {
    step < 3 ? setStep(step + 1) : "";
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step:{step} {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          onClick={previousHandler}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={nextHandler}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
