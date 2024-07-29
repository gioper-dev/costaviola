import * as React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react';
import BottomPanel from './BottomPanel';
import { graphql, useStaticQuery } from 'gatsby';

const CoastMap = () => {

  const pocs = [
    {coordinates:[38.353710, 15.833497], name:"La Motta"},
    {coordinates:[38.364207, 15.839203], name:"Rovaglioso"},
    {coordinates:[38.316179, 15.825643], name:"Cala Janculla"},
  ]

  const data = useStaticQuery(graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          name
          coordinates
        }
        body
      }
    }
  }
`)

  const [showPanel, setShowPanel] = useState(false);
  const [selectedPOI, setPOI] = useState(null);
  
  const openPanel = (poi) => {
    setPOI(poi);
    setShowPanel(true);
  }

  const closePanel = () => {
    setShowPanel(false);
  }

  const markers = data.allMdx.nodes.map((poi) =>
    //eventHandlers={{ click: () => openPanel(poi) }
    <Marker position={poi.frontmatter.coordinates} key={poi.frontmatter.name}>
      <Popup>
        <h3 className="title is-5">{poi.frontmatter.name}</h3>
        <p>Coordinate: {poi.frontmatter.coordinates[0]},{poi.frontmatter.coordinates[1]}</p>
      </Popup>
    </Marker>
  );

  return (
    <div>
      <MapContainer style={{ width:'100%', height:'92vh'}} center={[38.353, 15.833]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution= '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'        
          url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png"
        />
        {markers}
      </MapContainer>
      { showPanel && <BottomPanel poi={selectedPOI} closePanel={closePanel}/> }
    </div>  
  )
}

export default CoastMap