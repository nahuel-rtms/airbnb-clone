import BlogPost from "../components/Blog/BlogPost";
import BlogPostContainer from "../components/Blog/BlogPostContainer";

function BlogView () {
    return (
        <div className="flex flex-col w-full h-full overflow-scroll no-scrollbar">
            <BlogPostContainer/>
        </div>
    )
}

export default BlogView;