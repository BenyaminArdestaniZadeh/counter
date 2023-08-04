import { buttons } from "./buttons";
const DynamicButtons = ({ handleClickButton, count }: any) => {
  const checkForDisable = (count: number, amount: number) => {
    return count < amount;
  };
  return (
    <>
      {buttons.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClickButton(item.action, item.amount)}
          disabled={checkForDisable(count, item.amount) && item.disable == true}
        >
          {item.title}
        </button>
      ))}
    </>
  );
};

export default DynamicButtons;
