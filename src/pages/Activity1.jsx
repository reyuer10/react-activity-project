import React from "react";
import { useState } from "react";

function Activity1() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(null);

  const arrNumber = [1, 2, 4, 5, 6, 7, 8, 9, 0];

  const handleSelectCurrentNumber = (curr) => {
    setCurrentNumber(curr);
  };

  const handleSelectNumber = (num) => {
    if (currentNumber == "1") {
      setFirstNumber(num);
      return;
    }

    if (currentNumber == "2") {
      setSecondNumber(num);
      return;
    }
  };


  const calculateNum = firstNumber + secondNumber
  return (
    <div className="space-y-4">
        <div>
            <p><span className="font-bold">First:</span> Select current number.</p>
        </div>
      <div className="space-x-4 text-xl">
        <span
        role="button"
         onClick={() => handleSelectCurrentNumber("1")}
        className={currentNumber == 1 ? "cursor-pointer ring-2 ring-blue-500 px-4 p-2  rounded" : " cursor-pointer ring px-4 p-2 rounded"}>{firstNumber}</span>
        <span>+</span>
        <span
        role="button"
                 onClick={() => handleSelectCurrentNumber("2")}
        className={currentNumber == 2 ? "cursor-pointer ring-2 ring-blue-500 px-4 p-2  rounded" : "cursor-pointer ring px-4 p-2 rounded"}>{secondNumber}</span>
        <span>=</span>
        <span>{calculateNum}</span>
      </div>
      <div>
        <span className="font-bold">Second:</span> Select input number.
      </div>
      <div className="space-x-2 my-4">
        {arrNumber.map((num, index) => {
          return (
            <button
              onClick={() => handleSelectNumber(num)}
              className=" ring ring-black font-bold p-4 px-6 rounded "
              key={index}
            >
              {num}
            </button>
          );
        })}
      </div>
      
    </div>
  );
}

export default Activity1;
