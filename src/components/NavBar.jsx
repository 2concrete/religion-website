import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center relative p-7">
      <div className="flex items-center gap-2 absolute p-2 left-1">
        <img
          className="h-13"
          src="https://media.discordapp.net/attachments/1331835305233219646/1402816295409422558/logo.png?ex=689549fb&is=6893f87b&hm=6ed7447578ba5e35be6c4b00941db724853079525d165c42da2e14e7be54eacb&=&format=webp&quality=lossless&width=1414&height=1414"
        />
        <p className="font-[Funnel_Sans] text-2xl font-bold">free/faithful</p>
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
