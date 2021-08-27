import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

export default function AvailableMeals(props) {
  const { sendRequest, isLoading: httpIsLoading, error: httpError } = useHttp();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    sendRequest({ url: props.mealsUrl }, (responseData) => {
      const mappedData = Object.keys(responseData).map((key) => {
        return {
          ...responseData[key],
          id: key,
        };
      });
      setMeals(mappedData);
    });
  }, [props.mealsUrl, sendRequest]);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      ></MealItem>
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        {!httpIsLoading && !httpError && <ul>{mealsList}</ul>}
        {httpIsLoading && <p>Loading meals...</p>}
        {httpError && <p>Failed to load meals. Error: {httpError}</p>}
      </Card>
    </section>
  );
}
