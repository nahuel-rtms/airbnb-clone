import BlogPost from "../components/BlogPost/BlogPost";
import BlogPostContainer from "../components/BlogPost/BlogPostContainer";

function BlogView () {
    return (
        <div className="flex flex-col w-full h-full overflow-scroll no-scrollbar">
            <BlogPostContainer/>
        </div>
    )
}

export default BlogView;