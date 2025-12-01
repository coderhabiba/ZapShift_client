import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  

  return (
    <div className="mt-8 mb-28">
      <div className="lg:py-20 p-5 bg-white lg:px-28 rounded-4xl">
        <h2 className="lg:text-[56px] text-2xl font-extrabold text-secondary">
          We are available in 64 districts
        </h2>

        <div className="relative flex rounded-lg lg:w-[40%] lg:mt-12 mt-3">
          <input
            type="text"
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            className="py-2.5 sm:py-3 px-4 ps-11 w-full rounded-full sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#EAECED]"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <svg
              className="shrink-0 size-4 text-gray-400 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>

          <button
            type="button"
            className="absolute right-0 py-3 px-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full bg-primary text-secondary hover:bg-lime-400 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
          >
            Search
          </button>
        </div>
        <div className="divider lg:my-12 my-4"></div>
        <h4 className="lg:mb-12 mb-4 lg:text-3xl text-xl font-extrabold text-secondary">
          We deliver almost all over Bangladesh
        </h4>

        <div className="w-full h-[1200px]">
          <MapContainer
            className="h-[1200px]"
            center={position}
            zoom={8}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenters.map(center => (
              <Marker position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.district}</strong> <br />Service Area: {center.covered_area.join(',')}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
