import { useState } from "react";
import { TextEffect } from "../../../motion-ui/TextEffect";
import useObserver from "../../../Layout/useObserver";
import SliderModal from "./Slidermodal";

const PastEvents = () => {
  const block1 = useObserver({ once: false });
  const block2 = useObserver({ once: false });
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);


  const events = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/150", 
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/301",
        "https://via.placeholder.com/302",
      ],
      title: "Event 1",
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/150",
      images: [
        "https://via.placeholder.com/303",
        "https://via.placeholder.com/304",
        "https://via.placeholder.com/305",
      ],
      title: "Event 2",
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/150",
      images: [
        "https://via.placeholder.com/306",
        "https://via.placeholder.com/307",
        "https://via.placeholder.com/308",
      ],
      title: "Event 3",
    },
  ];

  

  const handleOpenModel = (event) => {
    console.log("Opening Modal");
    setIsModelOpen(true);
    setActiveEvent(event);
  };

  return (
    <section className="min-h-[160vh] lg:min-h-[100vh] max-w-[100vw] mt-10">
      <div className="h-[160vh] lg:h-[100vh] w-[100%]  flex  flex-col justify-evenly items-center ">
        <div
          ref={block1.ref}
          className="h-[35vh] w-[99vw] lg:w-[75vw] flex flex-col justify-center items-center"
        >
          {block1.isVisible && (
            <>
              <div className="bg-[#333] text-purple-300 neon-purple-text py-1 lg:py-0 px-4 rounded-xl flex justify-center items-center text-xl sm:text-3xl lg:text-lg mb-6 box-border motion-scale-in-[0.05] sm:motion-scale-in-[0.06] md:motion-scale-in-[0.08] lg:motion-translate-x-in-[-3%] motion-translate-y-in-[-4%] motion-duration-[4000ms] motion-delay-[100ms] lg:motion-translate-x-0 sm:translate-x-0">
                Visit our previous Events Gallery
              </div>
              <div className="text-[1.5rem] sm:text-3xl lg:text-4xl text-center mb-8 neon-neutral-text">
                <TextEffect
                  per="char"
                  delay={0.5}
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, rotateX: 90, y: 10 },
                      visible: {
                        opacity: 1,
                        rotateX: 0,
                        y: 0,
                        transition: { duration: 0.3 },
                      },
                    },
                  }}
                >
                  Relive the best moments from the Logix 2024 through videos and
                  photos in our gallery
                </TextEffect>
              </div>
            </>
          )}
        </div>

        <div className=" flex flex-col lg:flex-row h-[125vh] lg:h-[85vh] w-[99vw] lg:w-[99vw] gap-4 justify-center items-center p-4">
          {events.map((event) => (
            <div ref={block2.ref} className="h-[60%] w-[100%] lg:h-[95%]">
              {block2.isVisible && (
                <div
                  key={event.id}
                  onClick={() => handleOpenModel(event)}
                  className="h-[60%] w-[100%] lg:h-[85%] cursor-pointer bg-gray-200 neon-neutral-shadow rounded-lg overflow-hidden shadow-xl transition-shadow motion-translate-x-in-[-105%] motion-translate-y-in-[0%] motion-duration-[1000ms] motion-delay-[200ms] motion-delay-[0ms]/translate motion-ease-linear"
                >
                  <>
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-48 h-48 object-cover"
                    />
                    <p className="text-center p-2">{event.title}</p>
                  </>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isModelOpen && (
        <SliderModal
          ismodelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}
          activeEvent={activeEvent}
          setActiveEvent={setActiveEvent}
        />
      )}
    </section>
  );
};

export default PastEvents;
