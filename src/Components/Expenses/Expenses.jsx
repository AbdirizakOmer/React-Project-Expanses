import { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filteredArr = props.expenses.filter((expense) => {
    if (filterYear === "all") {
      return expense;
    } else {
      return new Date(expense.date).getFullYear().toString() === filterYear;
    }
  });

  const nameFnc = (event) => {
    setFilterYear(event.target.value);
  };

  return (
    <Card>
      <div className="flex justify-between items-center">
        <h1 className="font-[700] tracking-wider font-nunito">
          Expenses History
        </h1>
        <select
          onChange={nameFnc}
          value={filterYear}
          name="filter"
          className="shadow px-2 py-1 rounded outline-none shadow-blue-100"
          id="filter"
        >
          <option value="all">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="mt-5 bg-blue-900 px-4 py-8 rounded-lg">
        {filteredArr.map((expense) => (
          <ExpensesItem
            key={expense.id}
            name={expense.name}
            status={expense.status}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </Card>
  );
};

export default Expenses;
