import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "한국",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const onChangeName = (e) => {
  //   setInput({ ...input, name: e.target.value });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({ ...input, birth: e.target.value });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({ ...input, country: e.target.value });
  // };

  // const onChangeBio = (e) => {
  //   setInput({ ...input, bio: e.target.value });
  // };

  return (
    <div>
      <div>
        <input value={name} onChange={onChange} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} type="date" onChange={onChange} />
      </div>
      <div>
        <select value={country} onChange={onChange}>
          <option>한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChange}></textarea>
      </div>
    </div>
  );
};

export default Register;
