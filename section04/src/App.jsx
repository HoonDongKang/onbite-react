import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  // [현재값, 상태변화 함수값] = useState(초기값)

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
