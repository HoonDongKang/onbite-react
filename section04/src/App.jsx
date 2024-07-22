import "./App.css";
import { useState } from "react";
const Bulb = ({ light }) => {
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </div>
  );
};

function App() {
  // [현재값, 상태변화 함수값] = useState(초기값)
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <Bulb light={light} />
        <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
          전구 {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </>
  );
}

export default App;
