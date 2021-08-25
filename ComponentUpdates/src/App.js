import { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP EVALUATING");

  const toggleParagraph = () => {
    setShowParagraph(prevState => !prevState);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraph}>Toggle paragraph!</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
