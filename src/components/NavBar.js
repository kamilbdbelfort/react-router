import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <NavLink
          to="/discover"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Discover Movies
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          About
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "purple",
          }}
        >
          Home
        </NavLink>
      </div>
    </div>
  );
}
