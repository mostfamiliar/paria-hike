import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from "../assets/pin.png";

const newicon = new L.icon({
  iconUrl: icon,
  iconSize: [30, 30]
});

export default function Map() {
  return (
    <MapContainer center={[37.08003, -111.89026]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.08003, -111.89026]} icon={newicon}>
        <Popup>
          Start of trailhead. White House Campground.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
