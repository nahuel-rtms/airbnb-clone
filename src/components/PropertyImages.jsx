import { useState } from "react";

function PropertyImages() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161ab8ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2800&q=80",
    "https://images.unsplash.com/photo-1600585153943-69ee27a1cf4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1600585154155-0f85bd65632e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2800&q=80",
    "https://images.unsplash.com/photo-1600585154087-e4030f14d772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1600585154019-989526a7e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2800&q=80",
  ];

  return (
    <div className="w-full h-full grid grid-cols-10 gap-4">
      {/* Main Image */}
      <div className="col-span-7">
        <img
          src={images[0]}
          alt="Main"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="col-span-3 grid grid-cols-2 gap-2">
        {images.slice(1, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="h-48 w-full object-cover rounded-lg cursor-pointer"
            onClick={() => openModal(index + 1)}
          />
        ))}
      </div>

      {/* Modal for Full Gallery */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-5xl">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="carousel">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className={`${
                    index === activeIndex ? "block" : "hidden"
                  } h-full w-full object-cover`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyImages;
