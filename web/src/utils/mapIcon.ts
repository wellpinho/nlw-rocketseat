import Leaflet from 'leaflet'

import Logo from './../images/logo.svg'

const mapIcon = Leaflet.icon({
  iconUrl: Logo,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default mapIcon