const PrincipleCard = ({ title, text, Icon }) => {
  return (
    <div className="rounded-md flex items-center gap-3 border w-130 p-2 ">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{title}</p>
          {Icon && <Icon className="stroke-1 size-5" />}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PrincipleCard;
