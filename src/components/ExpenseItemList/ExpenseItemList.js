import ExpenseItem from "./ExpenseItem";

function ExpenseItemList(props) {
  const items = props.expenses;
  return (
    <div>
      {items
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((item) => (
          <ExpenseItem item={item} />
        ))}
    </div>
  );
}

export default ExpenseItemList;
