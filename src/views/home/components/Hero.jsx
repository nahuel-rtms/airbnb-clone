import React, { useState } from "react";
import Stats from "./Stats";
import heroimg from "../../../assets/hero.jpg";

function Hero() {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calcular el porcentaje de la posición del cursor dentro del contenedor
    const xPercent = (clientX - left) / width;
    const yPercent = (clientY - top) / height;

    // Ajustar los valores para el efecto skew
    const skewX = (xPercent - 0.5) * 0.3; // Cambia 20 para ajustar la intensidad del skew en X
    const skewY = (yPercent - 0.5) * 0.3; // Cambia 20 para ajustar la intensidad del skew en Y

    setTransform(`skew(${skewX}deg, ${skewY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform(""); // Restablece la transformación cuando el cursor sale del área
  };

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={heroimg}
        alt="hero-img"
        className="w-full brightness-90 transition-transform duration-300 ease-out"
        style={{ transform }}
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
