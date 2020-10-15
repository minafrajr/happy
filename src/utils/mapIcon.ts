import Leaflet from 'leaflet';
import mapMarkerIMg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerIMg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
  //   popupAnchor: [0, -62],
});

export default mapIcon;
