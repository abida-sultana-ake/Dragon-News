import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-3">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className=""></div>
        <div className="flex flex-col md:flex-row gap-4 items-center text-gray-700">
          <NavLink to="/" className="text-base hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/about" className="text-base hover:text-primary">
            About
          </NavLink>
          <NavLink to="/carrer" className="text-base hover:text-primary">
            Career
          </NavLink>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src="/src/assets/user.png"
            alt="user"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <button className="btn btn-primary px-4 md:px-10 text-sm md:text-base">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
