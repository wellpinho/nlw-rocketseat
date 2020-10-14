import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowDownRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import './../styles/pages/orphanages-map.css'

import MapMarkerImg from './../../src/images/icon-happy.svg'
import Leaflet from 'leaflet'

const mapIcon = Leaflet.icon({
  iconUrl: MapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [28, 68],
  popupAnchor: [170, 2]
})

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <Link to="/">
            <img src={MapMarkerImg} alt="Happy"/>
          </Link>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>RJ Capital</span>
        </footer>
      </aside>

      <Map 
        center={[-22.9220932,-43.3379576]}
        zoom={12.3}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />

        <Marker 
          icon={mapIcon}
          position={[-22.9220932,-43.3379576]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={248} className="mappopup">
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowDownRight size="20" color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>

    </div>
  )
}

export default OrphanagesMap