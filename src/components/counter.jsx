import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  //   const tags = [];
  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  //   const renderTags = () => {
  //     if (tags.length === 0) return "Тегов не найдено";
  //     return tags.map((tag) => <li key={tag}>{tag} </li>);
  //   };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handledecrement = (productId) => {
    console.log(productId);
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      {/* {tags.length === 0 && "Теги не найдены"}
      {renderTags()} */}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>

      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => handledecrement({ id: 1 })}
      >
        decrement
      </button>
    </>
  );
};

export default Counter;
