import { Link } from "@remix-run/react";
import { Expense } from "~/types/Expense";

interface Props extends Pick<Expense, "id" | "title" | "amount"> {}

function ExpenseListItem({ id, title, amount }: Props) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
