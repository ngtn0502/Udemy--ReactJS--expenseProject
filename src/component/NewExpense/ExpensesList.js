import ExpenseItem from "../Expenses/ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  if (props.expenseList.length === 0) {
    return <h2 className="expenses-list__fallback">There are no Expense!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpensesList;
