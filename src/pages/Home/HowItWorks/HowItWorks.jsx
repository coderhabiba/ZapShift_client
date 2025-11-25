import CareCard from './CareCard';
import {
  HiOutlineTruck,
  HiOutlineCash,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
} from 'react-icons/hi';

const workData = [
  {
    title: 'Booking Pick & Drop',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <HiOutlineTruck size={40} className="text-[#acc857]" />,
  },
  {
    title: 'Cash On Delivery',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <HiOutlineCash size={40} className="text-[#acc857]" />,
  },
  {
    title: 'Delivery Hub',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <HiOutlineOfficeBuilding size={40} className="text-[#acc857]" />,
  },
  {
    title: 'Booking SME & Corporate',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <HiOutlineUserGroup size={40} className="text-[#acc857]" />,
  },
];

const HowItWorks = () => {
  return (
    <section className={`px-4 mb-[100px]`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8`}>
         How it Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
          {workData.map((work, index) => (
            <CareCard
              key={index}
              title={work.title}
              description={work.description}
              icon={work.icon}
            />
          ))}
        
        </div>
       
      </div>
    
    </section>
  );
};

export default HowItWorks;
