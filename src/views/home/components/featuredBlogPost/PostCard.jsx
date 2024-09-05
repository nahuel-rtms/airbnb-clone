import postimg from "../../../../assets/blog.jpg";

function PostCard() {
  return (
    <div className="h-80 w-full bg-base-100 shadow-md rounded-md overflow-hidden">
      <div className="h-[50%] w-full overflow-hidden">
        <img src={postimg} alt="post-image" className="w-full" />
      </div>
      <div className="h-[60%] w-full p-6">
        <p className="font-bold text-lg">
          Guia practica para la gestion de inmuebles
        </p>
        <p className="font-light text-md">
          Ensamos nuestros filtros, mapas y comparadores Desde tu cuenta podés
          acceder de forma segura a los avisos contactados, favoritos, las notas
        </p>
      </div>
    </div>
  );
}

export default PostCard;
