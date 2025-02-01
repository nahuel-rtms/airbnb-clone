import { Link } from "react-router-dom";
import logo from "../assets/airbnb.png";

function NavBar() {
  return (
    <div className="navbar bg-primary text-base-200">
      <Link to="./" className="flex items-center w-1/6 ">
        <img src={logo} alt="logo" className="h-8 mx-3"/>
        <p className="text-xl font-bold font-sans text-gray-950" >Airbnb</p>
        <p className="text-xl font-bold font-sans text-gray-950 line-through" >Clone</p>
      </Link>
      <div className="flex w-4/6 h-max items-center justify-center space-x-14 ">
      <Link to="./" className="btn btn-ghost font-medium">
          Home
        </Link>
        <Link to="./properties" className="btn btn-ghost font-medium">
          Split View
        </Link>
        <Link to="./toggle_view" className="btn btn-ghost font-medium">
          Toggle View
        </Link>
        <Link to="./blog" className="btn btn-ghost font-medium">
          Blog
        </Link>
        <Link to="./comingsoon" className="btn btn-ghost font-medium">
          Real Estate Stats
        </Link>
        <Link to="./comingsoon" className="btn btn-ghost font-medium">
          3D View
        </Link>
      </div>
      <div className="justify-end w-1/6 flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
