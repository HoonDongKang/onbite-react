const Button = ({ text, color, children }) => {
  const onClickBtn = (e) => {
    //syntheticBaseEvent : 합성 이벤트
    // 모든 웹페이지의 이벤트를 통합시킨 형태
    //<-> Cross Browsing Issue : 서로 다른 브라우저의 이벤트로 인한 에러
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickBtn} style={{ color }}>
      {text}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};
export default Button;
