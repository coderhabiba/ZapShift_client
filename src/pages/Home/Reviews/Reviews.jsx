import { use } from 'react';
import customer from '../../../assets/customer-top.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from 'swiper/modules';
import ReviewCard from './ReviewCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
 
  return (
    <div className="pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <div className="mb-8 w-[150px] h-[70px] mx-auto">
            <img
              className="w-full h-full object-contain"
              src={customer}
              alt="Customer Icon"
            />
          </div>
          <h3 className="mb-4 text-3xl md:text-[40px] font-extrabold text-neutral">
            What our customers are saying
          </h3>

          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro.Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true} // ছোট স্ক্রিনের জন্য স্লাইড সংখ্যা সেট করা হয়েছে
            slidesPerView={'auto'} // 'auto' ব্যবহার করে রেসপনসিভ করা
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            coverflowEffect={{
              rotate: 0, // রোটেশন স্ক্রিনশট অনুযায়ী বাদ দেওয়া হলো
              stretch: 0, // স্ট্রেচ শূন্য করা হলো
              depth: 100, // ডেপথ কমানো হলো
              modifier: 1,
              scale: 0.9, // পার্শ্ববর্তী কার্ডগুলো সামান্য ছোট হবে
              slideShadows: false, // শ্যাডো বাদ দেওয়া হলো কারণ কার্ডে শ্যাডো দেওয়া আছে
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
           
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper pb-12"
          >
            {reviews.map(review => (
              <SwiperSlide key={review.id} className="w-[400px] mb-12">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

        
      </div>
    </div>
  );
};

export default Reviews;
