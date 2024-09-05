import PostCard from "./PostCard";

function FeaturedBlogPost() {
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <p className="m-5 font-bold text-xl">
        En nuestro blog podes encontrar temas que te pueden interesar
      </p>
      <div className="w-full h-fit px-28 py-10 grid grid-cols-3 gap-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default FeaturedBlogPost;
