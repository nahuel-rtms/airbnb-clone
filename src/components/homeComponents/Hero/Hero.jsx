import Stats from "./Stats";
import heroimg from "../../../assets/heroImg/hero.jpg";

function Hero() {

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center w-full h-full"
    >
      <img
        src={heroimg}
        alt="hero-img"
        className="w-full brightness-50 transition-transform duration-300 ease-out"
      />
      <div className="absolute flex flex-col items-center text-white drop-shadow-2xl justify-center space-y-3">
        <p className="text-5xl font-bold">Discover Your New Home</p>
        <p className="text-xl font-medium">
          Helping 100 million renters find their perfect fit.
        </p>
        <div className="flex flex-col justify-start items-center space-y-5">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Almagro"
              className="input input-bordered w-80 max-w-sm"
            />
            <button className="btn btn-success">Buscar</button>
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default Hero;
