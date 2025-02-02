import ContactForm from "../components/detailComponents/ContactForm";
import DetailCarousel from "../components/detailComponents/DetailCarousel";
import DetailDescription from "../components/detailComponents/DetailDescription";


function DetailView() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto no-scrollbar py-10 px-8">
      <div className="w-full h-[500px] bg-base-200 rounded-xl mb-10">
        <DetailCarousel />
      </div>
      <div className="flex px-28 space-x-8">
        {/* Left Section with Property Info */}
        <DetailDescription />
        {/* Right Section (Sidebar) */}
        <ContactForm />
      </div>
    </div>
  );
}

export default DetailView;
