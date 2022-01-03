const ExpensesItem = (props) => {
    return (
      <div className="flex justify-between items-center font-semibold tracking-wider  bg-blue-900 px-4 py-3 rounded-lg shadow-md text-white mb-3">
        <span className="bg-white text-secondary px-3 py-1 rounded" >{props.id}</span>
        <h3 className="max-w-5/12">{props.name} </h3>
        <span className="max-w-2/12">{props.status}</span>
        <span className="max-w-2/12"> {props.amount} </span>
        <span className="bg-white text-secondary px-3 py-1 rounded-full max-w-3/12">
          {props.date}
        </span>
      </div>
    );
  };
  
  export default ExpensesItem;
  