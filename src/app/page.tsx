"use client";

import { useCalculatorStore } from "../store/calculatorStore";
import { KeyPad } from "./components/keyPad";

const data = [
  {
    key: "7",
    value: "7",
  },
  {
    key: "8",
    value: "8",
  },
  {
    key: "9",
    value: "9",
  },
  {
    key: "DEL",
    value: "DEL",
  },
  {
    key: "4",
    value: "4",
  },
  {
    key: "5",
    value: "5",
  },
  {
    key: "6",
    value: "6",
  },
  {
    key: "+",
    value: "+",
  },
  {
    key: "1",
    value: "1",
  },
  {
    key: "2",
    value: "2",
  },
  {
    key: "3",
    value: "3",
  },
  {
    key: "-",
    value: "-",
  },
  {
    key: ".",
    value: ".",
  },
  {
    key: "0",
    value: "0",
  },
  {
    key: "/",
    value: "/",
  },
  {
    key: "*",
    value: "x",
  },
  {
    key: "RESET",
    value: "RESET",
  },
  {
    key: "=",
    value: "=",
  },
];

export default function Home() {
  const { display, appendToDisplay, calculate, clear, history } = useCalculatorStore();

  const handleClickButton = (key: string) => {
    if (key === "=") calculate();
    else if (key === "DEL" || key === "RESET") clear();
    
    else appendToDisplay(key);
  };

  return (
    <div className="grid grid-rows-[18px_1fr_18px] items-center justify-items-center min-h-screen p-6 pb-20 gap-14 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex items-center p-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="antialiased font-bold">calc</div>
            <div className="w-full">THEME</div>
          </div>
        </div>
        <div className="bg-displayCalc rounded-md p-4 w-full text-6xl">
          {display}
        </div>
        <div className="flex items-center bg-card rounded-md p-4">
          <KeyPad keys={data} onClick={handleClickButton} />
        </div>
      </main>
    </div>
  );
}
