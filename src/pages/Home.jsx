import Fact from "../components/Fact";
import NavBar from "../components/NavBar";
import SplitText from "../components/SplitText";
import FadeContent from "../components/FadeContent";
import useAtBottom from "../hooks/useAtBottom";
import ScrollIndicator from "../components/ScrollIndicator";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const atBottom = useAtBottom();
  return (
    <>
      <NavBar />
      <section className="flex gap-40 flex-col justify-center items-center h-100 mt-50 mb-70">
        <SplitText
          text="UNDERSTANDING MODERN DAY SLAVERY"
          className="font-[Funnel_Sans] font-extrabold text-5xl"
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-in-out"
          delay={750}
          initialOpacity={0}
        >
          {
            <p className="text-center w-150">
              Modern slavery still exists today, even though many people think
              it ended long ago. It includes things like forced labour, human
              trafficking, and child exploitation. Millions of people around the
              world are trapped in situations where they’re abused, controlled,
              and can’t leave.
            </p>
          }
        </FadeContent>
      </section>

      <FadeContent
        blur={true}
        duration={2000}
        easing="ease-in-out"
        delay={0}
        initialOpacity={0}
      >
        {
          <section className="flex gap-30 justify-center mb-70">
            {" "}
            <Fact
              stat="50M"
              text="People are currently living in modern slavery"
            />
            <Fact stat="1/4" text="Victims of modern slavery are children" />
            <Fact stat="22M" text="People are trapped in forced marriages" />
          </section>
        }
      </FadeContent>

      <FadeContent
        blur={true}
        duration={2000}
        easing="ease-in-out"
        delay={0}
        initialOpacity={0}
      >
        {
          <section className="flex flex-col items-center">
            <img src="/map.webp" className="w-200 m-20" />
          </section>
        }
      </FadeContent>
      <FadeContent
        blur={true}
        duration={2000}
        easing="ease-in-out"
        delay={0}
        initialOpacity={0}
      >
        {
          <section className="flex flex-col items-center">
            <p className="text-center mb-15 w-150">
              Modern slavery exists in every country, including places like
              Australia. It can be hidden in everyday jobs like farming,
              construction, cleaning, or even domestic work.
            </p>
          </section>
        }
      </FadeContent>
      <div>{!atBottom && <ScrollIndicator />}</div>
    </>
  );
};

export default Home;
