import NavBar from "../layouts/NavBar";

function ErrorPage() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="w-full h-[91vh] flex items-center justify-center">
        <div>
          <p className="font-bold text-xl">
            Error al solicitar la ruta indicada
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
