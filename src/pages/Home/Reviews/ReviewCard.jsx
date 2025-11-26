import quote from '../../../assets/reviewQuote.png'; // ধরে নিচ্ছি এই ইমেজটি আপনার স্ক্রিনশট এর কোটেশন মার্ক

const ReviewCard = ({ review }) => {
  const { user_photoURL, userName, review: testimonial, profession } = review;
  return (
    <div className="card w-full shadow-xl bg-[#ffffffb3] p-8 rounded-3xl border border-gray-100 transform transition duration-300">
      <img className="w-10 h-10 mb-4" src={quote} alt="Quotation Mark" />
      <p className="text-sm font-medium mb-6 text-gray-700 leading-relaxed">
        {testimonial}
      </p>
      <div className="border-t border-dashed border-gray-300 my-4"></div>
      <div className="flex items-center mt-4">
        {/* DaisyUI Avatar component */}
        <div className="avatar mr-4">
          
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
            
            <img
              src={user_photoURL}
              alt={userName}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          
          <h4 className="text-md font-bold text-gray-900">{userName}</h4>
          <p className="text-xs text-gray-500">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
