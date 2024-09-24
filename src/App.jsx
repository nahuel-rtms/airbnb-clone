import { Outlet } from "react-router-dom";
import useDatasetStore from "./stores/datasetStore";
import { StrictMode, useEffect } from "react";
import NavBar from "./layouts/NavBar";

function App() {
  const { fetchDataset } = useDatasetStore();

  useEffect(() => {
    fetchDataset();
  }, [fetchDataset]);

  return (
    <StrictMode>
      <div className="h-screen w-screen no-scrollbar bg-base-300">
        <NavBar />
        <div className="h-[91vh] w-screen">
          <Outlet />
        </div>
      </div>
    </StrictMode>
  );
}

export default App;
