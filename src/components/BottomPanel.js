import React from 'react';
import './panel.scss'
import locationImage from "../../images/motta.jpeg"
import { useState, useEffect } from 'react';

const BottomPanel = ({ poi, closePanel }) => {

  const [anotherComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const loadDynamicComponent = async () => {
      try {
        // Dynamically import the module or component
        const DynamicModule = await import('../../content/rovaglioso.mdx');
        console.log('Component', DynamicModule);

        // Set the dynamically imported component/module into state
        const AnotherComponent = DynamicModule.default;
        setDynamicComponent(<AnotherComponent />);
      } catch (error) {
        console.error('Error loading dynamic component:', error);
      }
    };

    loadDynamicComponent();
  }, []);


  return (
    <div className="bottom-panel-container has-overlay"> 
      <div className="panel is-primary">
        {/* <div className="panel-heading">Panel Title</div> */}
        <div className="panel-block" style={{display:"block"}}>
          <div>
            <div class="columns is-mobile">
              <div class="column"><h2 className="title is-5">{poi.frontmatter.name}</h2></div>
              <div class="column has-text-right"><button class="delete" aria-label="close" onClick={closePanel}></button></div>
            </div>
          </div>
          <div>
            <div class="columns">
              <div class="column is-one-third"><img src={locationImage} width="70%" alt="Logo" /></div>
              <div class="column">
                <h2 className="title is-6"><i class="fa-solid fa-location-dot"></i> Coordinate</h2>
                <div>{poi.frontmatter.coordinates[0]} - {poi.frontmatter.coordinates[1]}</div>
              </div>
              <div class="column">
                <h2 className="title is-6"><i class="fa-solid fa-book-open"></i> Informazioni</h2>
                <div>        
                  <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.</p> 
                  {poi.body}
                  {anotherComponent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default BottomPanel;