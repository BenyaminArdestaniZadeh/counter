import { useState } from "react";
import DynamicButtons from "./DynamicButtons";

const Counter = () => {
  // dynaminc value for numbers
  const [count, setCount] = useState<number>(0);

  const handleClickButton = (action: string, amount: number) => {
    // dynamic function for action of buttons
    switch (action) {
      
      case "incriesHandler":
        setCount((prevCount) => prevCount + amount);
        break;
      case "decriesHandler":
        setCount((prevCount) => prevCount - amount);
        break;
      case "resetHandler":
        setCount(amount);
        break;
      case "plusTenHandler":
        setCount((prevCount) => prevCount + amount);
        break;
      case "minusTenHandler":
        setCount((prevCount) => prevCount - amount);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <div className="buttonContainer">
        <DynamicButtons handleClickButton={handleClickButton} count={count} />
      </div>
    </>
  );
};
export default Counter;
