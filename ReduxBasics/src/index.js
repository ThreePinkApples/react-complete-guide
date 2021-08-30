import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import counterStore from "./store/counter-store";

ReactDOM.render(
  <Provider store={counterStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
