import useInput from "../../hooks/use-input";
import styles from "./Checkout.module.css";

const checkNotEmpty = (value) => value.trim() !== "";
const numberRegex = new RegExp("^\\d+$");
const checkOnlyNumbers = numberRegex.test.bind(numberRegex);

const CheckoutInput = (props) => {
  return (
    <div
      className={`${styles.control} ${props.hasError ? styles.invalid : ""}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && <p>{props.errorMessage}</p>}
    </div>
  );
};

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

  const isFormValid =
    cityIsValid && postalCodeIsValid && streetIsValid && nameIsValid;

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
      <CheckoutInput
        id="name"
        label="Your Name"
        value={name}
        onChange={onNameChange}
        onBlur={onNameBlur}
        hasError={nameHasError}
        errorMessage="Name can not be empty"
      />
      <CheckoutInput
        id="street"
        label="Street"
        value={street}
        onChange={onStreetChange}
        onBlur={onStreetBlur}
        hasError={streetHasError}
        errorMessage="Street can not be empty"
      />
      <CheckoutInput
        id="postal"
        label="Postal Code"
        value={postalCode}
        onChange={onPostalCodeChange}
        onBlur={onPostalCodeBlur}
        hasError={postalCodeHasError}
        errorMessage="Postal Code must not be empty and only contain numbers"
      />
      <CheckoutInput
        id="city"
        label="City"
        value={city}
        onChange={onCityChange}
        onBlur={onCityBlur}
        hasError={cityHasError}
        errorMessage="City can not be empty"
      />
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
