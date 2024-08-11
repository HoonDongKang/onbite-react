const Controller = ({ onClickButton }) => {
  const CONTROL_VALUES = [
    { text: "-1", value: -1 },
    { text: "-10", value: -10 },
    { text: "-100", value: -100 },
    { text: "+100", value: 100 },
    { text: "+10", value: 10 },
    { text: "+1", value: 1 },
  ];

  return (
    <div>
      {CONTROL_VALUES.map((item, index) => (
        <button key={index} onClick={() => onClickButton(item.value)}>
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default Controller;
