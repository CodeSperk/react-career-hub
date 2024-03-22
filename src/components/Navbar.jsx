import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/applied">Applied Jobs</NavLink></li>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-2xl md:text-3xl font-bold">Career<span className="text-red-500">Hub</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
           {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="bg-red-500 text-white px-6 font-semibold py-2 rounded-lg hover:bg-red-600">Apply</a>
      </div>
    </div>
  );
};

export default Navbar;
