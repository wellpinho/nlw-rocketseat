import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowDownRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapIcon from '../utils/mapIcon'

import MapMarkerImg from './../../src/images/icon-happy.svg'
import './../styles/pages/orphanages-map.css'
import api from '../services/api'
import Orphanage from './Orphanage'

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

function OrphanagesMap() {
  // sempre que tiver uma var que precisa ser alterada usamos state
  const [ orphanages, setOrphanages ] = useState<Orphanage[]>([])

  // sempre que chamar dados da api usar useEffect
  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

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

        {
          orphanages.map(orphanage => {
            return (
              <Marker 
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={248} className="mappopup">
                { orphanage.name }
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowDownRight size="20" color="#fff" />
                </Link>
              </Popup>
            </Marker>
            )
          })
        }
      </Map>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>

    </div>
  )
}

export default OrphanagesMap