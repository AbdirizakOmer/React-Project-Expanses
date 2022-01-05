const ExpensesDate = (props) => {
    const year = new Date(props.date).getFullYear();
    const month = ["January"];
const M = new Date();
let name = month[M.getMonth()];
    const day = new Date(props.date).getDay();
    return (
      <span className="bg-secondary  text-white text-sm px-5 py-1 rounded-full max-w-3/12 flex flex-col">
        <span>{year}</span>
        <div className="flex justify-around">
          <span>{day}</span>
          <span >{month}</span>
        </div>
      </span>
    );
  };
  
  export default ExpensesDate;
  