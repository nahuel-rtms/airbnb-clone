import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import useDatasetStore from "./stores/datasetStore";
import { useEffect } from "react";

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
    <div className="h-screen w-screen no-scrollbar bg-base-300">
      <NavBar />
      <div className="h-[91vh] w-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
