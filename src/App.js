import AsideLeft from "./Components/AsideLeft";
import AsideRight from "./Components/AsideRight";
import ExpensesItem from "./Components/ExpensesItem";

const App = () => {
  const id = "#2232";
  const name = "Apple MackBook";
  const status = "Aproved";
  const amount = 1200;
  const date = "2021-01-04";
  return (
    <>
      <div id="container" className="flex bg-sky-50">
        <AsideLeft></AsideLeft>
        <main className="grow">
          <div className="bg-white mx-8 mt-5 shadow shadow-sky-100 px-8 py-5">
            <h1 className="font-[700] tracking-wider font-nunito">
              Expenses History
            </h1>

            <div className=" mt-5 bg-gray-50 px-4 py-8 rounded-lg">
              <ExpensesItem
                name={name}
                status={status}
                amount={amount}
                date={date}
                id={id}
              ></ExpensesItem>
            </div>
          </div>
        </main>
        <AsideRight />
      </div>
    </>
  );
};

export default App;
