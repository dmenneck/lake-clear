import React, { Component } from 'react'
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import * as olProj from 'ol/proj';

import DrawerComponent from './components/DrawerComponent'
import { ContextProvider } from './context/AppContext';
import {loadWholeYear} from "../src/LoadLayer"

import 'ol/ol.css';
import 'antd/dist/antd.css';
import './app.css'

import {
  MapComponent, MultiLayerSlider
} from '@terrestris/react-geo';

import ButtonsContainer from './components/ButtonsContainer';
import Legend from "./components/Legend"
import Statistics from './components/Statistics';

// -------------
const source1 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_30-01-2020`, 'TILED': true},
  serverType: 'geoserver',

})

const layer1 = new OlLayerTile({
  name: '30.01',
  source: source1
});

const source2 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_17-02-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer2 = new OlLayerTile({
  name: '17.02',
  source: source2
});

const source3 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_13-03-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer3 = new OlLayerTile({
  name: '13.03',
  source: source3
});

const source4 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_14-04-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer4 = new OlLayerTile({
  name: '14.04',
  source: source4
});

const source5 =  new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_09-05-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer5 = new OlLayerTile({
  name: '09.05',
  source: source5
});

const source6 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_18-06-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer6 = new OlLayerTile({
  name: '18.06',
  source: source6
});

const source7 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_18-07-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer7 = new OlLayerTile({
  name: '18.07',
  source: source7
});

const source8 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_15-08-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer8 = new OlLayerTile({
  name: '15.08',
  source: source8
});

const source9 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_16-09-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer9 = new OlLayerTile({
  name: '16.09',
  source: source9
});

const source10 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_16-10-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer10 = new OlLayerTile({
  name: '16.10',
  source: source10
});

const source11 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_10-11-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer11 = new OlLayerTile({
  name: '10.11',
  source: source11
});

const source12 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  params: {'LAYERS': `clear_lake:_chla_18-12-2020`, 'TILED': true},
  serverType: 'geoserver'
})

const layer12 = new OlLayerTile({
  name: '18.12',
  source: source12
});

const source13 = new OlSourceTileWMS({
  url: 'https://vm275.rz.uni-osnabrueck.de/geoserver/wms',
  serverType: 'geoserver'
})

const layer13 = new OlLayerTile({
  source: source13
});

const sources = [source1, source2, source3, source4, source5, source6, source7, source8, source9, source10, source11, source12]

// https://geoserver.mundialis.de/geoserver/wms
// https://vm275.rz.uni-osnabrueck.de/geoserver/wms?.


const view = new OlView({
  center: olProj.fromLonLat([-99.71511025602402, 38.07822991619122]), 
  zoom: 4
})

const layer = new OlLayerTile({
  source: new OlSourceOsm()
});

const map = new OlMap({
  view,
  layers: [layer, layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9, layer10, layer11, layer12, layer13],
  // layers: [layer, layer1, layer2, layer3, layer4, layer5]
});

setTimeout(() => {
  view.animate({zoom: 11.5, center: [-13668995.226402676, 4726459.790432823], duration: 4500 });
}, 1500)

let current = "chla"
const setCurrentParameter = (parameter) => {

  let helper = "chla";

  if (parameter === "turbidity") {
    helper = "turbidity"
  } else if (parameter === "secchi") {
    helper = "sd"
  } else {
    helper = "chla"
  }

  if (helper !== current) {
    loadWholeYear(helper, sources)
    current = helper
  }
}

setTimeout(() => {
  document.getElementById("slider").style.opacity = "1"
}, 7000)

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          {/*<button onClick={() => console.log(map.getView().calculateExtent(map.getSize()))}>hi</button>*/}
          <MapComponent map={map} id="map"/>

          <Legend />

          <ButtonsContainer map={map} view={view}/>

          <DrawerComponent map={map} setCurrentParameter={setCurrentParameter} source13={source13} sources={sources} />

          <Statistics sources={sources} source13={source13} />

          <div id="slider">
            Move the slider to change the layer's opacity:
            <MultiLayerSlider
              id="multiLayerSlider"
              layers={[
                layer1,
                layer2,
                layer3,
                layer4,
                layer5,
                layer6,
                layer7,
                layer8,
                layer9,
                layer10,
                layer11,
                layer12,
              ]}
            />
          </div>
        </div>
      </ContextProvider>
    )
  }
}

export default App
