import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

export default function Meals(props) {
  return (
    <>
      <MealsSummary />
      <AvailableMeals mealsUrl={props.mealsUrl} />
    </>
  );
}
