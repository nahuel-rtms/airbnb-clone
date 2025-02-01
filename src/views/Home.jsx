import FeaturedBlogPost from "../components/Blog/BlogPostContainer";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import Hero from "../components/Hero/Hero";
import Footer from "../layouts/Footer";


function Home() {
  return (
    <div className="w-full h-full overflow-scroll no-scrollbar">
      <div className="min-h-[91vh] pb-40">
        <div className="w-full h-[91vh] bg-slate-500 mb-8">
          <Hero />
        </div>
        <FeaturedProperties />
        <FeaturedBlogPost />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
