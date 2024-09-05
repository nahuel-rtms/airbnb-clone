import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-disabled text-xl">BInmbliria</a>
      </div>
      <div className="flex w-full h-max items-center justify-center space-x-20">
        <Link to="./" className="btn btn-ghost font-medium">
          Inicio
        </Link>
        <Link to="./comingsoon" className="btn btn-ghost font-medium">
          Inmobiliarias
        </Link>
        <Link to="./search" className="btn btn-ghost font-medium">
          Ver propiedades
        </Link>
        <Link to="./comingsoon" className="btn btn-ghost font-medium">
          Mis propiedades
        </Link>
        <Link to="./comingsoon" className="btn btn-ghost font-medium">
          BInmbliria Blog
        </Link>
      </div>
      <div className="flex-none">
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
