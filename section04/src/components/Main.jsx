import Button from "./Buttons";
import Header from "./Header";
import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 JS 표현식만 넣을 수 있다.
// 2. 숫자 / 문자열 / 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.
const Main = () => {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
};

export default Main;
