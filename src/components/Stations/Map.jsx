import "../../App.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const stations = [
  {
    name: "Spiro Station 1",
    address: "123 Main St, Kampala",
    latitude: 0.3476,
    longitude: 32.5825,
  },
  {
    name: "Spiro Station 2",
    address: "456 Elm St, Entebbe",
    latitude: 0.0598,
    longitude: 32.4436,
  },
];

function Map() {
  return (
    <div className="bg-gray-800 grid lg:grid-cols-2 grid-cols-1 justify-evenly">
      <div className="h-96 m-4 w-full">
        <MapContainer
          center={[0.3476, 32.5825]}
          zoom={6}
          scrollWheelZoom={false}
          className="h-full w-full rounded-lg shadow-md"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {stations.map((station, idx) => (
            <Marker key={idx} position={[station.latitude, station.longitude]}>
              <Popup>
                <strong>{station.name}</strong>
                <br />
                {station.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="w-8/9 ml-4">
        <p className="text-gray-500 rounded-lg bg-gray-900 p-8 m-4 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white dark:first-letter:text-[#EFFF00] first-letter:me-3 first-letter:float-start">
        Explore our network of Spiro stations located across key locations in Uganda, 
        designed to serve the needs of our community of electric vehicle riders. 
        Each station is strategically placed to provide easy access to services like battery swaps, 
        maintenance, and charging. Whether you&apos;re in the bustling heart of Kampala or near the serene shores of Entebbe, 
        our stations ensure that help is never too far away. Our commitment is to make electric mobility convenient and accessible, 
        empowering you to travel sustainably and reliably. Use the map to find your nearest Spiro station and experience the ease of green transportation!
        </p>
      </div>
    </div>
  );
}

export default Map;
