import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex justify-center p-7">
      <ul className="gap-3 flex">
        <NavBarItem title="Home" to="/" />
        <NavBarItem title="About" to="/about" />
        <NavBarItem title="Principles" to="/principles" />
      </ul>
    </div>
  );
};

export default NavBar;
