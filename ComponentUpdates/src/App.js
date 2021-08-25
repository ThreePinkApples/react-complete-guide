import { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(prevState => !prevState);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraph}>Toggle paragraph!</Button>
      {showParagraph && <p>This is new!</p>}
    </div>
  );
}

export default App;
