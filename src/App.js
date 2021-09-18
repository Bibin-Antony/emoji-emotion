import "./styles.css";
import { useState } from "react";
export default function App() {
  const [emoji, setEmoji] = useState("");
  function changeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);
  }
  return (
    <div className="App">
      <h1>Inside out!</h1>
      <input onChange={changeHandler}></input>
      <div>{emoji}</div>
    </div>
  );
}
