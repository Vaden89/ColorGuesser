import { useEffect, useState } from "react";
export default function App() {
  const [displayColor, setDisplayColor] = useState("");
  const [options, setOptions] = useState([]);
  const [failText, setFailText] = useState("");
  const [update, setUpdate] = useState(0);
  const getRandomColor = () => {
    const hexs = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const color = new Array(6)
      .fill("")
      .map(() => hexs[Math.floor(Math.random() * hexs.length)])
      .join("");

    return `#${color}`;
  };
  const verifyAnswer = (option) => {
    option === displayColor
      ? setUpdate(1)
      : setFailText("You pick the wrong option");
  };

  // #FFA500

  useEffect(() => {
    const correctOption = getRandomColor();
    setDisplayColor(correctOption);
    setOptions(
      [correctOption, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
    setUpdate(0);
    setFailText("");
  }, [update]);

  return (
    <div className="App p-4">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-2xl font-semibold"> Guess The Hex Of The Color </h1>
        <div
          className="h-[40vh] w-[80vw]"
          style={{ backgroundColor: displayColor }}
        ></div>
        <div className="flex items-center gap-4">
          {options.map((item, index) => {
            return (
              <button
                onClick={() => verifyAnswer(item)}
                className="bg-gray-900 text-white text-lg rounded-lg p-2"
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
        <span className="text-red-500">{failText}</span>
      </div>
    </div>
  );
}
