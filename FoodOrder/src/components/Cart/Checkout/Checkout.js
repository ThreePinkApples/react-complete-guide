import useInput from "../../hooks/use-input";
import styles from "./Checkout.module.css";

const checkNotEmpty = (value) => value.trim() !== "";
const numberRegex = new RegExp("^\\d+$");
const checkOnlyNumbers = numberRegex.test.bind(numberRegex);

export default function Checkout(props) {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChange: onNameChange,
    onBlur: onNameBlur,
    reset: resetName,
  } = useInput(checkNotEmpty);

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    onChange: onStreetChange,
    onBlur: onStreetBlur,
    reset: resetStreet,
  } = useInput(checkNotEmpty);

  const {
    value: postalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    onChange: onPostalCodeChange,
    onBlur: onPostalCodeBlur,
    reset: resetPostalCode,
  } = useInput(checkOnlyNumbers);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    onChange: onCityChange,
    onBlur: onCityBlur,
    reset: resetCity,
  } = useInput(checkNotEmpty);

  const isFormValid = cityIsValid && postalCodeIsValid && streetIsValid && nameIsValid;

  const submitForm = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    resetName();
    resetStreet();
    resetCity();
    resetPostalCode();
  };

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <div
        className={`${styles.control} ${nameHasError ? styles.invalid : ""}`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        {nameHasError && <p>Name can not be empty</p>}
      </div>
      <div
        className={`${styles.control} ${streetHasError ? styles.invalid : ""}`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={onStreetChange}
          onBlur={onStreetBlur}
        />
        {streetHasError && <p>Street can not be empty</p>}
      </div>
      <div className={`${styles.control} ${postalCodeHasError ? styles.invalid : ""}`}>
        <label htmlFor="postal">Postal code</label>
        <input
          type="text"
          id="postal"
          value={postalCode}
          onChange={onPostalCodeChange}
          onBlur={onPostalCodeBlur}
        />
        {postalCodeHasError && <p>Postal Code must not be empty and only contain numbers</p>}
      </div>
      <div
        className={`${styles.control} ${cityHasError ? styles.invalid : ""}`}
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={onCityChange}
          onBlur={onCityBlur}
        />
        {cityHasError && <p>City can not be empty</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Place order
        </button>
      </div>
    </form>
  );
}
