import { useState } from "react";
import Card from "../UI/Card";

const Form = (props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  console.log(name);

  const sumbitForm = (event) => {
    event.preventDefault();

    const dataInput = {
      Dname: name,
      Dstatus: status,
      Damount: parseInt(amount),
      Ddate: date,
    };

    props.onUploadData(dataInput);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setStatus(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <Card>
      <form
        className="font-nunito grid grid-cols-2 gap-3"
        onSubmit={sumbitForm}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-600">
            Name
          </label>
          <input
            className="shadow p-2 rounded-md mt-2 outline-none focus:border-2 focus:border-sky-100"
            type="text"
            name="name"
            id="name"
            placeholder="expense name"
            value={name}
            onChange={nameChangeHandler}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="status" className="text-gray-600">
            Status
          </label>
          <input
            className="shadow p-2 rounded-md mt-2 outline-none focus:border-2 focus:border-sky-100"
            type="text"
            name="status"
            id="status"
            placeholder="expense status"
            value={status}
            onChange={statusChangeHandler}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-gray-600">
            Amount
          </label>
          <input
            className="shadow p-2 rounded-md mt-2 outline-none focus:border-2 focus:border-sky-100"
            type="number"
            name="amount"
            id="amount"
            placeholder="expense amount"
            value={amount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-gray-600">
            Date
          </label>
          <input
            className="shadow p-2 rounded-md mt-2 outline-none focus:border-2 focus:border-sky-100"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="col-span-2 flex justify-center gap-3 py-4">
          <button
            onClick={props.onCancel}
            type="button"
            className="shadow px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Cancel
          </button>
          <button className="shadow px-4 py-2 bg-secondary text-white rounded-md">
            Add Expense
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
