import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="mb-2 w-[90%] mx-auto py-2 text-purple-950">
      <div className="flex justify-between content-center w-[100%] px-2">
        <NavLink className="text-xl py-2" to="/">
          Habit Tracker
        </NavLink>
        <div className="p-1 flex justify-end content-center">
          <NavLink className="text-lg mx-4 p-1" to="/">
            Home
          </NavLink>
          <NavLink className="text-lg mx-4 p-1" to="/goals">
            Goals
          </NavLink>
          <NavLink className="text-lg mx-4 p-1" to="/user-dashboard/1">
            Dashboard
          </NavLink>
          <NavLink className="text-lg mx-4 p-1" to="/sign-in">
            Sign In
          </NavLink>
          <NavLink className="text-lg mx-4 p-1" to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink className="text-lg mx-4 p-1" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
