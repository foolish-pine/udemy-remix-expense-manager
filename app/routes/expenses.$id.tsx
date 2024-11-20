import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function UpdateExpensesPage() {
  return <ExpenseForm />;
}
