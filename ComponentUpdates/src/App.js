import { useCallback, useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP EVALUATING");

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const enableAllowToggle = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={enableAllowToggle}>Allow toggling!</Button>
      <Button onClick={toggleParagraph}>Toggle paragraph!</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
