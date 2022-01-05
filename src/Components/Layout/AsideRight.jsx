import CardItem from "../UI/CardItem";
import Counter from "../Counter/Counter";

const AsideRight = () => {
  return (
    <aside id="right" className=" w-96 shadow-md bg-blue-900 p-5">
      <CardItem>
        <h1 className="text-sm">Expneses Recently</h1>
      </CardItem>
      <CardItem>
        <Counter></Counter>
      </CardItem>
    </aside>
  );
};

export default AsideRight;
