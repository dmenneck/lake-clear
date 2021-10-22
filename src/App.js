import React, { Component } from 'react'
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import * as olProj from 'ol/proj';

import 'ol/ol.css';
import 'antd/dist/antd.css';
import './app.css'

import {
  MapComponent, MultiLayerSlider
} from '@terrestris/react-geo';

import PickContainer from './components/PickContainer.jsx';
import Slider from "./components/Slider.jsx"

import ButtonsContainer from './components/ButtonsContainer';

const layer1 = new OlLayerTile({
  name: 'Vegetation',
  source: new OlSourceTileWMS({
    url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
    params: {'LAYERS': 'clear_lake:chla_max', 'TILED': true},
    serverType: 'geoserver'
  })
});
// https://geoserver.mundialis.de/geoserver/wms
// https://vm275.rz.uni-osnabrueck.de/geoserver/wms?.

// ------------



/*
const layer1 = new OlLayerTile({
  name: 'Land/Water',
  source: new OlSourceTileWMS({
    url: 'https://geoserver.mundialis.de/geoserver/wms',
    params: {'LAYERS': '1_8A1104', 'TILED': true},
    serverType: 'geoserver'
  })
});

const layer2 = new OlLayerTile({
  name: 'True Color Composite',
  source: new OlSourceTileWMS({
    url: 'https://geoserver.mundialis.de/geoserver/wms',
    params: {'LAYERS': '1_040302', 'TILED': true},
    serverType: 'geoserver'
  })
});

const layer3 = new OlLayerTile({
  name: 'Color Infrared (vegetation)',
  source: new OlSourceTileWMS({
    url: 'https://geoserver.mundialis.de/geoserver/wms',
    params: {'LAYERS': '1_080403', 'TILED': true},
    serverType: 'geoserver'
  })
});

const layer4 = new OlLayerTile({
  name: 'Atmospheric Penetration',
  source: new OlSourceTileWMS({
    url: 'https://geoserver.mundialis.de/geoserver/wms',
    params: {'LAYERS': '1_12118A', 'TILED': true},
    serverType: 'geoserver'
  })
});

const layer5 = new OlLayerTile({
  name: 'Vegetation',
  source: new OlSourceTileWMS({
    url: 'https://geoserver.mundialis.de/geoserver/wms',
    params: {'LAYERS': '1_118A04', 'TILED': true},
    serverType: 'geoserver'
  })
});
*/
// ------------

const view = new OlView({
  center: olProj.fromLonLat([-99.71511025602402, 38.07822991619122]), 
  zoom: 4
})

const layer = new OlLayerTile({
  source: new OlSourceOsm()
});

const map = new OlMap({
  view,
  layers: [layer, layer1],
  // layers: [layer, layer1, layer2, layer3, layer4, layer5]
});

map.on('click', function(evt){
  console.log(olProj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
  console.log(evt.coordinate)
});


setTimeout(() => {
  view.animate({zoom: 11.5, center: [-13668995.226402676, 4726459.790432823], duration: 4500 });
}, 1500)

// layer1, layer2, layer3, layer4, layer5

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<button onClick={() => console.log(map.getView().calculateExtent(map.getSize()))}>hi</button>*/}
        <MapComponent map={map} id="map"/>

        <div id="sliderContainer">
          
          <PickContainer />
          <Slider />
        </div>

        <ButtonsContainer />


      {/*
      <MultiLayerSlider
        id="multiLayerSlider"
        layers={[
          layer1,
          layer2,
          layer3,
          layer4,
          layer5
        ]}
      />
      */}

      </div>
    )
  }
}

export default App
