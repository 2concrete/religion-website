import FadeContent from "../components/FadeContent";
import NavBar from "../components/NavBar";
import SplitText from "../components/SplitText";

const About = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-10 mb-30">
        <SplitText
          text="WHO WE ARE?"
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
      </section>
      <section className="flex justify-center ">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-in-out"
          delay={750}
          initialOpacity={0}
        >
          {
            <div className="flex gap-10 items-center">
              <p className="text-center text-lg w-80">
                Free & Faithful is a youth-led Catholic organisation committed
                to ending modern slavery. Inspired by the teachings of Jesus and
                the Catholic Church’s call for justice, we raise awareness,
                educate communities, and take real action to defend the dignity
                of every person. Our mission is simple: faith in action, freedom
                for all.
              </p>
              <img
                className="w-70 rounded-md"
                src="https://media.discordapp.net/attachments/1331835305233219646/1402654884658024468/63e88632e26598ee0a09f12d7ad1318e.png?ex=6894b3a8&is=68936228&hm=6c2c45494b9f39d6e89db776cba15322790695a312b3794875e60889a62effe2&=&format=webp&quality=lossless&width=1414&height=1414"
              ></img>
            </div>
          }
        </FadeContent>
      </section>
    </>
  );
};

export default About;
