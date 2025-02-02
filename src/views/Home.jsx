import FeaturedProperties from "../components/homeComponents/FeaturedProperties";
import Hero from "../components/homeComponents/Hero/Hero";
import BlogContainer from "../components/blog/BlogContainer";
import Footer from "../layouts/Footer";


function Home() {
  return (
    <div className="w-full h-full overflow-scroll no-scrollbar">
      <div className="min-h-[91vh] pb-40">
        <div className="w-full h-[91vh] bg-slate-500 mb-8">
          <Hero />
        </div>
        <FeaturedProperties />
        <BlogContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
