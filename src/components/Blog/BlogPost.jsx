import postimg from "../../assets/blog.jpg";

function BlogPost({ title, content }) {

  console.log(title, content)
  return (
    <div className="h-80 w-full bg-base-100 shadow-md rounded-md overflow-hidden">
      <div className="h-[50%] w-full overflow-hidden">
        <img src={postimg} alt="post-image" className="w-full" />
      </div>
      <div className="h-[60%] w-full p-6">
        <p className="font-bold text-lg line-clamp-1">
          {title}
        </p>
        <p className="font-light text-md line-clamp-3">
          {content}
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
