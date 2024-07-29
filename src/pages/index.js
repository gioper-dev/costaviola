import React from "react"
import "./mystyles.scss"
import Layout from "../components/layout"
import ImageMap from "../images/costa_viola_map_2.png" 

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-medium is-primary background-hero">
        <div className="hero-body">
          <p className="title">
            Medium hero
          </p>
          <p className="subtitle">
            Medium subtitle
          </p>
        </div>
      </section>      
      <section className="section">
        <h2 className="title is-2">Context</h2>
          <div class="columns">
            <div class="column">
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.</p>
            </div>
            <div class="column">
              <img src={ImageMap} alt="costa viola" />          
            </div>
          </div>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="notification is-info">
              <i className="fa-solid fa-map-location-dot fa-3x"></i>
              <p className="is-size-3">Mappa interattiva</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="notification is-info">
                <i className="fa-solid fa-table-list fa-3x"></i>
                <p className="is-size-3">I posti</p>
              </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
