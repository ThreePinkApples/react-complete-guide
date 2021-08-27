import styles from "./Checkout.module.css";
export default function Checkout(props) {
  const submitForm = (event) => {
      event.preventDefault();
  };

  return (
    <form onSubmit={submitForm}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Stree</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="submit">Place order</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}
