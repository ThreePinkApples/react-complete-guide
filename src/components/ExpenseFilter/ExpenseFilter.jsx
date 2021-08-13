import "./ExpenseFilter.css";

export default function ExpensesFilter(props) {
  const defaultYear = new Date().getFullYear();
  const filterHandler = (event) => {
    console.log(event.target.value);
    props.filterOnYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterHandler} defaultValue={defaultYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}
