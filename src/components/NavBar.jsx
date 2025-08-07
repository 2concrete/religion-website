import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center relative p-7">
      <div className="flex items-center gap-2 absolute p-2 left-1">
        <img className="h-13" src="/logo.png" />
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
