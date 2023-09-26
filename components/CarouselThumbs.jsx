import Image from 'next/image';
import  {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


export default function CarouselThumbs({ gallery, setThumbsSwiper }) {
  return (
    <div className="max-w-md relative">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        watchSlidesProgress={true}
        freeMode={true}
        observer={true}
        observeParents={true}
      >
        {gallery?.map((item) => (
          <SwiperSlide
            key={`product-thumb-gallery-${item.id}`}
            className="flex items-center justify-center cursor-pointer rounded hover:opacity-75"
          >
            <Image
              src={item.imgUrl}
              alt={`Product thumb gallery ${item.id}`}
              width={80}
              height={80}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}