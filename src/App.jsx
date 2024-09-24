import { Outlet } from "react-router-dom";
import useDatasetStore from "./stores/datasetStore";
import { StrictMode, useEffect } from "react";
import NavBar from "./layouts/NavBar";

function App() {
  const { fetchDataset, isLoading, error } = useDatasetStore();

  useEffect(() => {
    fetchDataset();
  }, [fetchDataset]);

  if (isLoading) {
    return <p>Loading dataset...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
