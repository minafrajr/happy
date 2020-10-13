import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/pages/orphanages-map.css'
import {FiPlus} from 'react-icons/fi'
import mapMarkerIMg from '../images/map-marker.svg'
import {Map,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
      return(
            <div id="page-map">
                  <aside>
                        <header>
                              <img src={mapMarkerIMg} alt="Happy"/>
                              <h2>Escolha um orfanato no mapa</h2>
                              <p>Muitas crianças estão esperando a sua visita :)</p>
                        </header>
                        <footer>
                              <strong>Belo Horizonte</strong>
                              <span>Minas Gerais</span>
                        </footer>

                  </aside>
                  
               <Map center={[-19.9224852,-44.0000944]} zoom={15}
               style={{width:'100%', height:'100%'}}>
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    
               </Map>

                  <Link to="" className="create-orphanage">
                        <FiPlus size={32} color="#fff"/>
                  </Link>
            </div>
      ); }

export default OrphanagesMap;