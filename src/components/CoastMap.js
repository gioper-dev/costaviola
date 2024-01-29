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
    <Marker position={poi.frontmatter.coordinates} key={poi.frontmatter.name} eventHandlers={{ click: () => openPanel(poi) }}>
      {/* <Popup>
        <h3 className="title is-5">{poi.name}</h3>
        <p>ciao ciao ciao</p>
      </Popup> */}
    </Marker>
  );

  return (
    <div>
      <MapContainer style={{ width:'100%', height:'92vh'}} center={[38.353, 15.833]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {markers}
      </MapContainer>
      { showPanel && <BottomPanel poi={selectedPOI} closePanel={closePanel}/> }
    </div>  
  )
}

export default CoastMap