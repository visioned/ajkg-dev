import data from '../json/data.json';
import ToolCard from './ToolCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper';
import 'swiper/css';

const Index = () => {
  return (
    <section id='tools'>
      <small>tools I use</small>
      <div>
        <Swiper
          modules={[Autoplay, A11y]}
          loop={true}
          speed={1800}
          fill
          freeMode={
            true /* freeModeMomentumReleaseOnEdges={true} freeModeMomentumBounce={true} */
          }
          touchReleaseOnEdges={true}
          slidesPerView='auto'
          autoplay={{ delay: null, disableOnInteraction: false }}
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
                <SwiperSlide className='flex justify-center mt-3 pb-8'>
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
