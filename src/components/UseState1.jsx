import { useState } from "react";

function UseState1() {
  let [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(counter + 1);
  };
  const minusHandler = () => {
    counter > 0 && setCounter(counter - 1); // also handles negative numbers
    
  };

  return (
    <div>
      <h1>Counter is {counter}</h1>
      <br />
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={minusHandler}>Minus</button>
      </div>
      {counter > 5 && <h2>Too Big !</h2>}
    </div>
  );
}

export default UseState1;
