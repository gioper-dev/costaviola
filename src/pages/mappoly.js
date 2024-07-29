import React from "react"
import "./mystyles.scss"
import Layout from "../components/layout"
import CoastMapPolyline from "../components/CoastMapPolyline"

const MapPage = () => {
  return (
    <Layout>
      <CoastMapPolyline/>
    </Layout>
  )
}

export default MapPage
