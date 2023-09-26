import Image from 'next/image';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


export default function ImageGallery({ gallery, thumbsSwiper }) {
  
  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        slidesPerView={1}
        centeredSlides={true}
      >
        {gallery?.map((item) => (
          <SwiperSlide
            key={`product-gallery-${item.id}`}
            className="flex justify-center items-center"
          >
            <Image
              src={item.imgUrl}
              alt={`Product gallery ${item.id}`}
              width={800}
              height={550}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}