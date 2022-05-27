import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか！" />
      <p style={contentStyle}>お元気ですか</p>
      <p style={contentStyle}>お元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//関数を外部で使うのに必要
export default App;
