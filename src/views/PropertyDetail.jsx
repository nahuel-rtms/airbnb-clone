import ContactForm from "../components/ContactForm";
import PropertyDescription from "../components/PropertyDescription";
import PropertyImages from "../components/PropertyImages";

function PropertyDetail() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto no-scrollbar py-10 px-8">
      <div className="w-full h-[500px] bg-base-200 rounded-xl mb-10">
        <PropertyImages />
      </div>
      <div className="flex px-28 space-x-8">
        {/* Left Section with Property Info */}
        <PropertyDescription />
        {/* Right Section (Sidebar) */}
        <ContactForm />
      </div>
    </div>
  );
}

export default PropertyDetail;
