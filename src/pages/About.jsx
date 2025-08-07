import FadeContent from "../components/FadeContent";
import NavBar from "../components/NavBar";
import SplitText from "../components/SplitText";
import WorkCard from "../components/WorkCard";

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
            <div className="flex gap-10 items-center mb-55">
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
      <section className="flex items-center flex-col mb-40 gap-3  0">
        <SplitText
          text="OUR WORK"
          className="font-[Funnel_Sans] font-extrabold text-4xl"
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
        <div className="grid gap-3 grid-cols-3">
          <WorkCard
            title="Launched #FaithForFreedom Campaign"
            text="A social media initiative that reached over 12,000 young people, spreading awareness about modern slavery through infographics, reels, and live Q&As."
          />
          <WorkCard
            title="Partnered with Parishes to Distribute 500+ Freedom Packs"
            text="Care kits with hygiene products and info for people at risk of exploitation, distributed through Catholic schools and churches."
          />

          <WorkCard
            title="Ran 20+ Workshops in Catholic High Schools"
            text="Interactive sessions teaching students about human dignity, Catholic social justice, and how to take action in their communities."
          />

          <WorkCard
            title="Hosted “Justice & Faith” Panel"
            text="An online panel with Catholic leaders and anti-slavery advocates, streamed to over 3,000 viewers."
          />

          <WorkCard
            title="Supported Survivor Story Project"
            text="Collected and shared 10 powerful stories from survivors (with permission), helping amplify real voices behind the issue."
          />
          <WorkCard
            title="Collaborated on Ethical Sourcing Guide for Churches"
            text="Created a downloadable guide to help parishes and schools make ethical purchasing decisions that don’t support exploitative labour."
          />
        </div>
      </section>
    </>
  );
};

export default About;
