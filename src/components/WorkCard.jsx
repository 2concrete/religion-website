import FadeContent from "./FadeContent";

const WorkCard = ({ title, text }) => {
  return (
    <FadeContent
      blur={true}
      duration={2000}
      easing="ease-out"
      initialOpacity={0}
    >
      {
        <div className="h-full w-80 border rounded-md p-2 flex flex-col gap-2">
          <p className="text-lg font-semibold">{title}</p>
          <p>{text}</p>
        </div>
      }
    </FadeContent>
  );
};

export default WorkCard;
