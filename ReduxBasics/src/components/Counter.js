import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementCounter = () => dispatch({ type: "INCREMENT" });

  const increaseCounter = (amount) => {
    dispatch({ type: "INCREASE", amount: amount });
  };

  const decrementCounter = () => dispatch({ type: "DECREMENT" });

  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{counter}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={increaseCounter.bind(this, 5)}>Increase by 5</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   render() {
//     return (
//       <main className={styles.counter}>
//         <h1>Redux Counter</h1>
//         <div className={styles.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementCounter.bind(this)}>Increment</button>
//           <button onClick={this.decrementCounter.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }

//   incrementCounter = () => this.props.increment();

//   decrementCounter = () => this.props.decrement();

//   toggleCounterHandler = () => this.props.reset();
// }

// export default connect(
//   (state) => {
//     return { counter: state.counter };
//   },
//   (dispatch) => {
//     return {
//       increment: () => dispatch({ type: "INCREMENT" }),
//       decrement: () => dispatch({ type: "DECREMENT" }),
//       reset: () => dispatch({ type: "RESET" }),
//     };
//   }
// )(Counter);
