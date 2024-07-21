import "./App.css";
import { useState } from "react";
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
        <h1>{light}</h1>
        <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
          전구 {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </>
  );
}

export default App;
