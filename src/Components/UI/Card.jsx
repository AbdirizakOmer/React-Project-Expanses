const Card = (props) => {
  return (
    <div className="bg-white mx-8 mt-5 shadow shadow-sky-100 px-8 py-5">
      {props.children}
    </div>
  );
};

export default Card;
