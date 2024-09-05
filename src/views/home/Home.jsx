import Footer from "../../components/Footer";
import Featured from "./components/featured/Featured";
import FeaturedBlogPost from "./components/featuredBlogPost/FeaturedBlogPost";
import Hero from "./components/Hero";

function Home() {
  return (
    <div className="w-full h-full overflow-scroll no-scrollbar">
      <div className="min-h-[91vh] pb-40">
        <div className="w-full h-[91vh] bg-slate-500 mb-8">
          <Hero />
        </div>
        <Featured />
        <FeaturedBlogPost />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
