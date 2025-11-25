import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    isHighlighted: false,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    isHighlighted: true,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and other sales support",
    isHighlighted: false,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    isHighlighted: false,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support",
    isHighlighted: false,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility, we allow end customers to return or exchange their products with online business merchants.",
    isHighlighted: false,
  },
];
export default function Services() {

  return (
    <div
      className={`lg:p-[100px] rounded-4xl p-10 bg-[#0A2E36] mb-[100px]`}
    >
      <header className="text-center mb-16">
        <h2 className={`text-4xl font-extrabold mb-4 text-[#CBDFE5]`}>
          Our Services
        </h2>
        <p className={`text-lg text-[#CBDFE5]`}>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we deliver on
          time, every time.
        </p>
      </header>

      <div className="px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
