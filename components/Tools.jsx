import data from "../json/data.json";
import ToolCard from "./ToolCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper";
import "swiper/css";

const Index = () => {
  return (
    <section id="tools">
      <div className="pt-10 transition-all ease duration-200">
        <Swiper
          modules={[Autoplay, A11y]}
          className="swiper-container"
          loop={true}
          speed={3000}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          touchReleaseOnEdges={true}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
        >
          {data.tools.map((tool) => {
            return (
              <div key={tool.id}>
                <SwiperSlide className="flex justify-center mt-3 pb-8 swiper-wrapper">
                  <ToolCard tool={tool} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Index;
