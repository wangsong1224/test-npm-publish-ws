import React, { useState, useEffect, useRef, useCallback } from "react";

export default (props) => {
  let { num } = props;
  // debugger;
  // const [num, changeNum] = useState(123);
  const changeAndRefund = useCallback(() => {
    console.log("change1234");
    props.onClick();
  }, []);
  return (
    <div>
      <span onClick={changeAndRefund}>AutoTest {num}</span>
    </div>
  );
};
