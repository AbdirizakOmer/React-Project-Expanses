import ExpensesDate from "./ExpensesDate";
import CardItem from "../UI/CardItem";
import Wrap from "../../hot/Wrap";
import { useState } from "react";
const ExpensesItem = (props) => {
  const [status, setStatus] = useState(props.status);
  const [name, setName] = useState(props.name);
  const [amount, setAmount] = useState(props.amount);
 

  return (
    <Wrap>
      <CardItem>
        <h3 onClick={() => setName("Changed")} className="w-5/12">
          {name}
        </h3>
        <span className="w-2/12" onClick={() => setStatus("ChangedStatus")}>
          {status}
        </span>
        <span className="w-2/12" onClick={() => setAmount(0)}>
          {" "}
          {amount}{" "}
        </span>
        
        <ExpensesDate date={props.date}></ExpensesDate>
      </CardItem>
    </Wrap>
  );
};

export default ExpensesItem;
