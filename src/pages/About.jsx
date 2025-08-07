import FadeContent from "../components/FadeContent";
import NavBar from "../components/NavBar";
import SplitText from "../components/SplitText";
import WorkCard from "../components/WorkCard";
import useAtBottom from "../hooks/useAtBottom";
import ScrollIndicator from "../components/ScrollIndicator";

const About = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const atBottom = useAtBottom();
  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-10 mb-30">
        <SplitText
          text="WHO ARE WE?"
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
      <section className="flex flex-col gap-100 mb-100 items-center ">
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
          {
            <p className="text-center text-lg w-100">
              Free/Faithful started as a school project by a small group of
              Catholic students who were shocked to learn how modern slavery
              still exists — in farms, factories, and even supply chains that
              reach into our homes.
            </p>
          }
        </FadeContent>
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
          {
            <p className="text-center text-lg w-100">
              Driven by faith and the belief that every person is made in the
              image of God, they decided to take action. What began as a class
              campaign quickly grew into a youth-led movement. With support from
              teachers, local parishes, and Catholic organisations, Free &
              Faithful became a platform to raise awareness, educate others, and
              advocate for real change.
            </p>
          }
        </FadeContent>
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
          {
            <p className="text-center text-lg w-100">
              We believe faith isn't just something you live quietly — it's
              something you live boldly, especially when others' dignity is at
              stake.
            </p>
          }
        </FadeContent>
      </section>
      <section className="flex items-center flex-col mb-40 gap-6 0">
        <SplitText
          text="OUR WORK"
          className="font-[Funnel_Sans] font-extrabold text-4xl"
          delay={100}
          duration={0.6}
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
      <div>{!atBottom && <ScrollIndicator />}</div>
    </>
  );
};

export default About;
