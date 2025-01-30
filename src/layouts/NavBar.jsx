import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="navbar bg-primary text-base-200">
      <Link to="./" className="flex w-1/6 ">
        <img src={logo} alt="logo" className="h-12"/>
        <p className="text-2xl font-thin" >BA</p>
      </Link>
      <div className="flex w-4/6 h-max items-center justify-center space-x-14 ">
        <Link to="./properties" className="btn btn-ghost font-medium">
          Properties
        </Link>
        <Link to="./comingsoon" className="btn btn-ghost font-medium">
          Stats
        </Link>
        <Link to="./comingsoon" className="btn btn-ghost font-medium">
          Blog
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
