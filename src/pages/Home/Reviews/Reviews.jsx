import { use, useRef } from 'react';
import customer from '../../../assets/customer-top.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    // সেকশনের বটম মার্জিন
    <div className="pb-20">
      <div className="container mx-auto px-4">
        {/* হেডার সেকশন */}
        <div className="mb-14 text-center">
          {/* কাস্টমার আইকন */}
          <div className="mb-8 w-[150px] h-[70px] mx-auto">
            <img
              className="w-full h-full object-contain"
              src={customer}
              alt="Customer Icon"
            />
          </div>
          {/* হেডিং */}
          <h3 className="mb-4 text-3xl md:text-[40px] font-extrabold text-neutral">
            What our customers are saying
          </h3>
          {/* সাব-টেক্সট */}
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro.Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        <div className="relative">
          {/* Swiper Carousel */}
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
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper pb-12"
          >
            {reviews.map(
              (
                review // mb-12 বাদ দেওয়া হলো কারণ প্যাডিং ও মার্জিন Swiper নিজে কন্ট্রোল করবে
              ) => (
                <SwiperSlide key={review.id} className="w-[400px] mb-12">
                  <ReviewCard review={review} />
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* কাস্টম নেভিগেশন এবং পেজিনেশন কনটেইনার */}
          {/* Swiper এর ডিফল্ট Pagination/Navigation এর পজিশন ঠিক না হওয়ায় আমরা একটি কাস্টম DIV ব্যবহার করছি */}
          <div className="absolute left-60 right-60 bottom-4 flex justify-center items-center z-10">
            {/* ⬅️ প্রিভিয়াস বাটন */}
            <button
              ref={prevRef}
              className="swiper-button-prev btn btn-circle w-6 h-6 min-h-6 bg-white hover:bg-gray-100 border-none shadow-md text-primary mr-8"
              aria-label="Previous Slide"
            >
              <FaArrowLeft className="w-2 h-2" />
            </button>

            {/* Pagination Dote (Swiper নিজে রেন্ডার করবে) */}
            {/* ডটগুলো এবং তীরগুলোর মাঝে মার্জিন রাখার জন্য এই স্পেসারটি ব্যবহার করা যেতে পারে */}
            <div className="mx-4">
              {/* ফাঁকা Div - Swiper এখানে ডটগুলো রেন্ডার করবে */}
            </div>

            {/* নেক্সট বাটন ➡️ */}
            <button
              ref={nextRef}
              className="swiper-button-next btn btn-circle w-6 h-6 min-h-6 bg-[] border-none shadow-md ml-8"
              aria-label="Next Slide"
            >
              <FaArrowRight className="w-2 h-2" />
            </button>
          </div>
        </div>
        {/* .relative container end */}
      </div>
    </div>
  );
};

export default Reviews;
