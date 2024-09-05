import Carousel from "./components/Carousel";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Info from "./components/Info";

function Detail() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto no-scrollbar py-10 px-8">
      <div className="w-full h-[500px] bg-base-200 rounded-xl mb-10">
        <Carousel />
      </div>
      <div className="flex px-28 space-x-8">
        {/* Left Section with Property Info */}
        <Info />
        {/* Right Section (Sidebar) */}
        <Contact />
      </div>
    </div>
  );
}

export default Detail;
