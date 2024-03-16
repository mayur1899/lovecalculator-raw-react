import React from "react";
import { useState } from "react";
import Heading from "./components/Heading";
import Screen from "./components/Screen";
import Entry from "./components/Entry";
import Button from "./components/Button";

const App = () => {
  const [screenValue, setScreenValue] = useState("0%");
  const [boyNameValue, setBoyNameValue] = useState("");
  const [girlNameValue, setGirlNameValue] = useState("");

  const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  const calculateLove = () => {
    let boy = boyNameValue.toLowerCase();
    let girl = girlNameValue.toLowerCase();

    if (boy == "mayur" && girl == "shreya") {
      setScreenValue("100%");
      setBoyNameValue("");
      setGirlNameValue("");
    } else if (boy == "mayur solanki" && girl == "shreya pathak") {
      setScreenValue("100%");
      setBoyNameValue("");
      setGirlNameValue("");
    } else if (boy.length < 3 || girl.length < 3) {
      setScreenValue("Too Short Name");
      setBoyNameValue("");
      setGirlNameValue("");
    } else {
      setScreenValue(`${randomNumber()}%`);
      setBoyNameValue("");
      setGirlNameValue("");
    }
  };

  return (
    <div className="main-screen flex justify-center items-center flex-col w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container flex justify-center items-center flex-col absolute top-[10%]">
        <Heading text={"WELCOME TO LOVE CALCULATOR"} />
        <Screen value={screenValue} />

        <div className="entry-container mt-4 flex justify-center items-center flex-col">
          <Entry
            value={boyNameValue}
            placeholder={"enter boy's name"}
            func={(e) => setBoyNameValue(e.target.value)}
          />
          <Entry
            value={girlNameValue}
            placeholder={"enter girl's name"}
            func={(e) => setGirlNameValue(e.target.value)}
          />
        </div>

        <Button text={"Calculate"} func={() => calculateLove()} />
      </div>
    </div>
  );
};

export default App;
