import AsideLeft from "./Components/Layout/AsideLeft";
import AsideRight from "./Components/Layout/AsideRight";
import Expenses from "./Components/Expenses/Expenses";
import Header from "./Components/Layout/Header";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: "i1",
      name: "New Mobile",
      status: "Pending",
      amount: 499,
      date: "2022-01-03",
    },
    {
      id: "i2",
      name: "Macbook Prop",
      status: "Paid",
      amount: 1844,
      date: "2021-12-03",
    },
    {
      id: "i1",
      name: "Hisense Tv",
      status: "Paid",
      amount: 350,
      date: "2020-10-03",
    },
  ];

  return (
    <>
      <div id="container" className="flex bg-blue-900">
        <AsideLeft></AsideLeft>
        <main className="grow">
          <Header />
          <NewExpenses></NewExpenses>
          <Expenses expenses={expenses}></Expenses>
        </main>
        <AsideRight />
      </div>
    </>
  );
};

export default App;
