import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center relative p-7">
      <div className="flex items-center gap-2 absolute p-2 left-1">
        <img
          className="h-13"
          src="https://media.discordapp.net/attachments/1331835305233219646/1402648871477313607/Untitled_design.png?ex=6894ae0e&is=68935c8e&hm=80ed93cf9373cf4352179b5669d4c435da97b4fbb52985e84ebe2d10ad3b6fb6&=&format=webp&quality=lossless&width=1414&height=1414"
        />
        <p className="font-[Funnel_Sans] text-2xl font-bold">FREE & FAITHFUL</p>
      </div>
      <ul className="gap-3 flex">
        <NavBarItem title="Home" to="/" />
        <NavBarItem title="About" to="/about" />
        <NavBarItem title="Principles" to="/principles" />
      </ul>
    </div>
  );
};

export default NavBar;
