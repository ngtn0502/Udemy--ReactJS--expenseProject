import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "../NewExpense/ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filterCond, setfilterCond] = useState("2020");
  const filterExpenseHandler = (filterCond) => {
    setfilterCond(filterCond);
  };
  const expenseListFilter = props.onExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterCond;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filterCond}
          onFilterExpense={filterExpenseHandler}
        ></ExpensesFilter>
      </div>
      <ExpenseChart expensesListFilter={expenseListFilter}></ExpenseChart>
      <ExpensesList expenseList={expenseListFilter}></ExpensesList>
    </Card>
  );
}

export default Expenses;
