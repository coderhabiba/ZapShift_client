import tracking from '../../../assets/live-tracking.png';
import safe from '../../../assets/safe-delivery.png';

const ParcelFeatures = () => {
  const features = [
    {
      title: 'Live Parcel Tracking',
      description: (
        <>
          Stay updated in real-time with our live parcel tracking feature. From
          pick-up to delivery, monitor your shipment's journey and get <br />{' '}
          instant status updates for complete peace of mind.
        </>
      ),
      img: tracking,
    },
    {
      title: '100% Safe Delivery',
      description: (
        <>
          We ensure your parcels are handled with the utmost care and delivered
          securely to their destination. Our reliable process <br /> guarantees
          safe and damage-free delivery every time.
        </>
      ),
      img: safe,
    },
    {
      title: '24/7 Call Center Support',
      description: (
        <>
          Our dedicated support team is available around the clock to assist you
          with any questions, updates, or delivery <br /> concerns—anytime you need us.
        </>
      ),
      img: safe,
    },
  ];

  return (
    <div className="py-16 border-t border-b border-dashed border-[#03464d] mb-20">
      <div className="space-y-6">
        {features?.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffffb3] rounded-3xl shadow-sm p-8 flex lg:flex-row flex-col gap-6 items-center"
          >
            <div className="pr-12 lg:border-r border-b border-dashed border-gray-300 flex items-center justify-center w-[200px] h-[200px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="pl-12">
              <h3 className="text-2xl font-extrabold text-secondary mb-4">
                {item.title}
              </h3>
              <p className="text-[#606060] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelFeatures;
