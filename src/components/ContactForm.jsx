import { BuildingOffice, DeviceMobile } from "@phosphor-icons/react";

function ContactForm() {
  return (
    <div className="sticky top-0 w-1/4 h-fit bg-base-100 rounded-lg p-6 py-10 flex flex-col items-center justify-center space-y-5">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex flex-col space-y-2 items-center">
        <p className="text-xl">Carla Romera</p>
        <p className="text-md font-light">Carla Romera Propiedades</p>
        <div className="flex space-x-3">
          <div className="flex space-x-1">
            <DeviceMobile size={24} weight="light" />
            <p>+5411897563</p>
          </div>
          <div className="flex space-x-2">
            <BuildingOffice size={24} weight="light" />
            <p>47900273</p>
          </div>
        </div>
      </div>
      <textarea
        className="textarea textarea-bordered w-full h-28"
        placeholder="Hola, tengo un cliente que puede estar interesado en ver esta propiedad. ¿Podrías contactarme?"
      ></textarea>
      <div className="space-y-3 w-full flex flex-col items-center justify-center">
        <button className="btn btn-accent w-full">
          Enviar Whattsapp{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M185.79,148.42l-32-16a4,4,0,0,0-4,.25l-16.64,11.1a44.56,44.56,0,0,1-20.91-20.91l11.1-16.64a4,4,0,0,0,.25-4l-16-32A4,4,0,0,0,104,68a36,36,0,0,0-36,36,84.09,84.09,0,0,0,84,84,36,36,0,0,0,36-36A4,4,0,0,0,185.79,148.42ZM152,180a76.08,76.08,0,0,1-76-76,28,28,0,0,1,25.58-27.9l13.8,27.61-11,16.54A4,4,0,0,0,104,124a52.43,52.43,0,0,0,28,28,4,4,0,0,0,3.76-.37l16.54-11,27.61,13.8A28,28,0,0,1,152,180ZM128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"></path>
          </svg>
        </button>
        <button className="btn btn-primary w-full">Enviar mensaje</button>
      </div>
      {/* Aquí podrías agregar más detalles o información relevante */}
    </div>
  );
}

export default ContactForm;
