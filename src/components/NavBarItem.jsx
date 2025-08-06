import { NavLink } from "react-router";

const NavBarItem = ({ to, title }) => {
  return (
    <NavLink
      className={
        ({ isActive }) =>
          isActive
            ? "underline hover:text-neutral-600 underline-offset-8 transition-all" // active style
            : "hover:text-neutral-600 underline-offset-8 transition-all" // inactive style
      }
      to={to}
      end
    >
      {title}
    </NavLink>
  );
};

export default NavBarItem;

// hover:text-neutral-600 hover:underline underline-offset-8 transition-all
