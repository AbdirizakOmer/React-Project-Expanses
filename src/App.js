import AsideLeft from "./Components/Layout/AsideLeft";
import AsideRight from "./Components/Layout/AsideRight";
import Expenses from "./Components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      name: "New Mobile",
      status: "Pending",
      amount: 499,
      date: "2022-01-03",
    },
    {
      name: "Macbook Prop",
      status: "Paid",
      amount: 1844,
      date: "2021-12-03",
    },
    {
      name: "Hisense Tv",
      status: "Paid",
      amount: 350,
      date: "2020-10-03",
    },
  ];

  return (
    <>
      <div id="container" className="flex bg-sky-50">
        <AsideLeft></AsideLeft>
        <main className="grow">
          <Expenses expenses={expenses}></Expenses>
        </main>
        <AsideRight />
      </div>
    </>
  );
};

export default App;
