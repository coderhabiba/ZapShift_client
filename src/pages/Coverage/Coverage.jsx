import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router-dom';
import { useRef } from 'react';


const Coverage = () => {
  const position = [23.685, 90.3563]; // Bangladesh Center
  const serviceCenters = useLoaderData();
  const mapRef = useRef();

  const handleSearch = e => {
    e.preventDefault();
    const location = e.target.location.value;

    if (!location) return;

    // Search logic: check district
    const district = serviceCenters.find(c =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude]
      console.log(coord,district);
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="mt-8 mb-28">
      <div className="lg:py-20 p-5 bg-white lg:px-28 rounded-4xl">
        <h2 className="lg:text-[56px] text-2xl font-extrabold text-secondary">
          We are available in 64 districts
        </h2>

        {/* Search Box */}
        <div className="rounded-lg w-[50%] lg:mt-12 mt-3">
          <form className='relative' onSubmit={handleSearch}>
            <input
              type="search"
              name="location"
              placeholder="Search Area"
              className="py-2.5 sm:py-3 px-4 w-full rounded-full sm:text-sm bg-[#EAECED] outline-none disabled:cursor-not-allowed disabled:opacity-75"
            />
            <button
              type="submit"
              className="absolute right-0 py-3 px-8 inline-flex justify-center items-center text-sm font-semibold rounded-full bg-primary text-secondary hover:bg-lime-400 disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed"
            >
              Search
            </button>
          </form>
        </div>

        <div className="divider lg:my-12 my-4"></div>

        <h4 className="lg:mb-12 mb-4 lg:text-3xl text-xl font-extrabold text-secondary">
          We deliver almost all over Bangladesh
        </h4>

        {/* Map */}
        <div className="w-full">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className='h-[800px]'
            ref={mapRef}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Render Markers for all service centers */}
            {serviceCenters.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service Area: {center.covered_area.join(', ')}
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
