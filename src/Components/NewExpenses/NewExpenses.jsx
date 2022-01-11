import { useState } from "react";
import Form from "./Form";

const NewExpenses = (props) => {
  const [showForm, setShowForm] = useState(false);

  const uploadData = (data) => {
    const newData = {
      id: Math.random(),
      name: data.Dname,
      status: data.Dstatus,
      amount: data.Damount,
      date: data.Ddate,
    };

    props.onSaveData(newData);
  };



  const toggleFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {showForm === false && (
        <div className="mx-8 p-2 flex justify-center ">
          <button
            onClick={toggleFormHandler}
            className="bg-secondary shadow-md text-white font-nunito px-2 py-1 rounded-lg border-2 border-white"
          >
            Add Expense
          </button>
        </div>
      )}
      {showForm === true && (
        <Form onUploadData={uploadData} onCancel={toggleFormHandler} />
      )}
    </>
  );
};

export default NewExpenses;
