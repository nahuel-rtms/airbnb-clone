import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen w-screen no-scrollbar bg-base-300">
      <NavBar />
      <div className="h-[91vh] w-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
