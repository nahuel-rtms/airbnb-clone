import BlogPost from "./BlogPost";
import posts from "./posts.json"

function BlogPostContainer() {

  console.log(posts)

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <p className="m-5 font-bold text-xl">
        Latest Insights from Our Real Estate Blog
      </p>
      <div className="w-full h-fit px-28 py-10 grid grid-cols-3 gap-3">
        {posts?.map((post, index) =>
          <BlogPost title={post.title} content={post.content} key={index} />
        )}
      </div>
    </div>
  );
}

export default BlogPostContainer;
