const Fact = ({ stat, text }) => {
  return (
    <div className="gap-2 flex flex-col items-center">
      <p className="text-8xl">{stat}</p>
      <p className="text-center w-50">{text}</p>
    </div>
  );
};

export default Fact;
