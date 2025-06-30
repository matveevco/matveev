import Tags from "./Tags.jsx";

const CardTextOne = () => {
  return (
    <div className="card-text">
      <p className="text-title">
        <span className="text-hl">I’m Alex. I design functional products</span>{" "}
        step by step – even when things get complex. My process helps me avoid
        mistakes and notice details that others might miss.
      </p>
      <Tags />
    </div>
  );
};

export default CardTextOne;
