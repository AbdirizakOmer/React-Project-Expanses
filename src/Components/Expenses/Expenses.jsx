import style from "./Expenses.module.css";
import ExpensesItem from "./ExpensesItem";

const Expenses = (props) => {
  return (
    <div className={style.card}>
      <h1 className="font-[700] tracking-wider font-nunito">
        Expenses history
      </h1>

      <div className="mt-5 bg-blue-900 px-4 py-8 rounded-lg">
        <ExpensesItem
          name={props.expenses[0].name}
          amount={props.expenses[0].amount}
          status={props.expenses[0].status}
          date={props.expenses[0].date}
        ></ExpensesItem>
        <ExpensesItem
          name={props.expenses[1].name}
          amount={props.expenses[1].amount}
          status={props.expenses[1].status}
          date={props.expenses[1].date}
        ></ExpensesItem>
        <ExpensesItem
          name={props.expenses[2].name}
          amount={props.expenses[2].amount}
          status={props.expenses[2].status}
          date={props.expenses[2].date}
        ></ExpensesItem>
      </div>
    </div>
  );
};

export default Expenses;