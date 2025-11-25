export default function CareCard({ title, description, icon }) {
   return (
    <div className="bg-[#ffffffb3] p-8 rounded-3xl hover:shadow-xl transition duration-300">
      <div className="text-3xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#03373d] mb-4">
        {title}
      </h3>
      <p className="font-medium text-[#606060]">
        {description}
      </p>
    </div>
  );
}
