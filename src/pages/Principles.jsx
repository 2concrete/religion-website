import FadeContent from "../components/FadeContent";
import NavBar from "../components/NavBar";
import PrincipleCard from "../components/PrincipleCard";
import SplitText from "../components/SplitText";

import {
  HeartHandshake,
  Users,
  HandHelping,
  ShieldCheck,
  Globe,
  Leaf,
  Banknote,
} from "lucide-react";

const Principles = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <NavBar />
      <section className="flex gap-40 flex-col justify-center mt-20 mb-10">
        <SplitText
          text="CATHOLIC SOCIAL JUSTICE PRINCIPLES"
          className="text-4xl font-[Funnel_Sans] font-extrabold text-center"
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
      </section>
      <section className="flex justify-center">
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-in-out"
          delay={750}
          initialOpacity={0}
        >
          {
            <div className="grid gap-2 grid-cols-2 w-fit">
              <PrincipleCard
                title="Dignity of the Human Person"
                text="Every human life is sacred. No one should be treated like property or a product."
                Icon={HeartHandshake}
              />

              <PrincipleCard
                title="The Common Good"
                text="We work for the good of all — not just a few. Society should protect and uplift everyone, especially the vulnerable."
                Icon={Users}
              />

              <PrincipleCard
                title="Solidarity"
                text="We stand with others, not above them. We believe in walking alongside those who suffer, acting as one human family."
                Icon={HandHelping}
              />

              <PrincipleCard
                title="Preferential Option for the Poor"
                text="The needs of the most vulnerable come first. We’re called to put their voices at the centre of everything we do."
                Icon={ShieldCheck}
              />

              <PrincipleCard
                title="Subsidiarity and Participation"
                text="Everyone deserves a say. Decisions should be made at the most local level possible, with real community involvement."
                Icon={Globe}
              />

              <PrincipleCard
                title="Stewardship of Creation"
                text="We respect God’s creation — including people, the planet, and everything in between. Exploitation hurts all of us."
                Icon={Leaf}
              />

              <PrincipleCard
                title="Economic Justice"
                text="Work should lift people out of poverty, not trap them in it. Systems must be fair, safe, and life-giving."
                Icon={Banknote}
              />
            </div>
          }
        </FadeContent>
      </section>
    </>
  );
};

export default Principles;
