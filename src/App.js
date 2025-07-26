import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [start]);

  const getTime = (seconds) => {
    let min = parseInt(seconds / 60);
    let sec = parseInt(seconds % 60);

    return `${min}:${String(sec).padStart(2, "0")}`;
  };

  const handleReset = () => {
    setSeconds(0);
    setStart(false);
  };
  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {getTime(seconds)}</p>
      <button onClick={() => setStart((prev) => !prev)}>
        {start ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
