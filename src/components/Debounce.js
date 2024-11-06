import { useState, useMemo } from "react";
const Debounce = () => {
  const [inputVal, setInputVal] = useState("");
  const debounceMain = (fun, wait) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fun(...args);
      }, wait);
    };
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const debounceApiCall = useMemo(() => debounceMain(handleChange, 1000), []);
  return (
    <div>
      <h2> Debounce</h2>
      <input
        type="text"
        onChange={(e) => {
          setInputVal(e.target.value);
          debounceApiCall(e);
        }}
      />
    </div>
  );
};

export default Debounce;
