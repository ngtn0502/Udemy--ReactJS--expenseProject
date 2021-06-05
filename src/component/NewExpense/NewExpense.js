import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdited(false);
  };
  const [isEdited, setIsEdited] = useState(false);
  const onCancelExpenseHandler = (e) => {
    setIsEdited(false);
  };

  const onAddExpenseHandler = (e) => {
    setIsEdited(true);
  };

  return (
    <div className="new-expense">
      {isEdited && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelExpenseHandler}
        ></ExpenseForm>
      )}
      {!isEdited && (
        <button type="submit" onClick={onAddExpenseHandler}>
          Add Expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
