import data from '../json/data.json';
import ToolCard from './ToolCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, EffectFade } from 'swiper';
import 'swiper/css';

const Index = () => {
  return (
    <section id='tools'>
      <div className='pt-10'>
        <Swiper
          modules={[Autoplay, A11y]}
          loop={true}
          fill
          transitionDuration={1000}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          touchReleaseOnEdges={true}
          slidesPerView='auto'
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 7 },
          }}
        >
          {data.tools.map((tool) => {
            return (
              <div key={tool.id}>
                <SwiperSlide className='flex justify-center mt-3 pb-8 swiper-wrapper'>
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
