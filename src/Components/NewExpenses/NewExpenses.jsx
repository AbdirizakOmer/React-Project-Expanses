import { useState } from "react";
import Card from "../UI/Card";

const NewExpenses = () => {
  const [name, setName] = useState("adfadsfads");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const sumbitForm = (event) => {
    event.preventDefault();
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
            onChange={(event) => setName(event.target.value)}
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
            onChange={(input) => setStatus(input.target.value)}
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
            onChange={(event) => setAmount(event.target.value)}
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
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="col-span-2 flex justify-center py-4">
          <button className="shadow px-4 py-2 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary">
            Add Expense
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewExpenses;
