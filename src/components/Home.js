import React, { useState } from "react";
import { loadNumbers, postNumbers } from "../utils/api";
import "./Home.css";

function Home() {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [generating, setGenerating] = useState(false);
  const [adding, setAdding] = useState(false);
  const [subtracting, setSubtracting] = useState(false);
  const [multiplying, setMultiplying] = useState(false);
  const [dividing, setDividing] = useState(false);
  const [result, setResult] = useState(0);

  const handleClick = () => {
    setGenerating(true);
    loadNumbers().then((data) => {
      setFirstNumber(data.key1);
      setSecondNumber(data.key2);
      setGenerating(false);
    });
  };

  function convertToNumber(number) {
    if (number.includes("-")) {
      let arr = number.split("-");
      let first = numbers[arr[0]];
      let second = numbers[arr[1]];
      return first + second;
    } else {
      return numbers[number];
    }
  }

  const handleAdd = () => {
    let first = convertToNumber(firstNumber);
    let second = convertToNumber(secondNumber);
    const operation = "plus";
    setAdding(true);
    postNumbers(first, second, operation).then((data) => {
      setResult(data);
      setAdding(false);
    });
  };

  const handleSubtract = () => {
    let first = convertToNumber(firstNumber);
    let second = convertToNumber(secondNumber);
    const operation = "minus";
    setSubtracting(true);
    postNumbers(first, second, operation).then((data) => {
      setResult(data);
      setSubtracting(false);
    });
  };

  const handleMultiply = () => {
    let first = convertToNumber(firstNumber);
    let second = convertToNumber(secondNumber);
    const operation = "times";
    setMultiplying(true);
    postNumbers(first, second, operation).then((data) => {
      setResult(data);
      setMultiplying(false);
    });
  };

  const handleDivide = () => {
    let first = convertToNumber(firstNumber);
    let second = convertToNumber(secondNumber);
    const operation = "divided by";
    setDividing(true);
    postNumbers(first, second, operation).then((data) => {
      setResult(data);
      setDividing(false);
    });
  };

  return (
    <div className="root">
      <button className="generate__btn" type="button" onClick={handleClick}>
        {generating ? "Generating..." : "Generate Numbers"}
      </button>
      <div className="numbers">
        <div className="numbers__container">
          <h3>First Number:</h3>
          <p>
            {firstNumber ? convertToNumber(firstNumber) : "Nothing generated!"}
          </p>
        </div>
        <div className="numbers__container">
          <h3>Second Number:</h3>
          <p>
            {secondNumber
              ? convertToNumber(secondNumber)
              : "Nothing generated!"}
          </p>
        </div>
      </div>

      <div className="operations">
        <button
          className="btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          {adding ? "Adding..." : "Add Numbers"}
        </button>
        <button className="btn" type="button" onClick={handleSubtract}>
          {subtracting ? "Subtracting..." : "Subtract Numbers"}
        </button>
        <button className="btn" type="button" onClick={handleMultiply}>
          {multiplying ? "Multiplying..." : "Multiply Numbers"}
        </button>
        <button className="btn" type="button" onClick={handleDivide}>
          {dividing ? "Dividing..." : "Divide Numbers"}
        </button>
      </div>
      <div className="numbers">
        <div className="numbers__container">
          <h3>Results:</h3>
          <p>{result ? result : 0}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
