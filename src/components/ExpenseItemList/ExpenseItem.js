function ExpenseItem(props) {
  const item = props.item;
  return (
    <div key={item.id} id={item.id} className="expense-item">
      <div>{item.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
