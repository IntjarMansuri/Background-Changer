import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white text-2xl font-semibold"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white text-2xl font-semibold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black text-2xl font-semibold"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black text-2xl font-semibold"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white text-2xl font-semibold"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black text-2xl font-semibold"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white text-2xl font-semibold"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white text-2xl font-semibold"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white text-2xl font-semibold"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
