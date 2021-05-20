import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import icon from "../assets/pin.png";

const newicon = new L.icon({
  iconUrl: icon,
  iconSize: [30, 30]
});

export default function Map(props) {
  let geojsonKey = Math.random()
  let trail = <GeoJSON key={geojsonKey} data={props.trail} />

  return (
    <MapContainer center={[36.987022873918896, -111.72939526824806]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trail}
      <Marker key={'marker-01'} position={[37.08003, -111.89026]} icon={newicon}>
        <Popup>
          Start of trailhead. White House Campground.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
