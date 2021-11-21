import React, {useState, useContext, useEffect } from 'react'
import { Drawer, Button, Radio, Space } from 'antd';
import { Line } from 'react-chartjs-2';
import PickContainer from './PickContainer';
import { AppContext } from '../context/AppContext';

export const algorithms = {
  chlorophyll: {
    text: "Chlorophyll-a Algorithm Explanation.",
    name: "chlorophyll",
    eq: "Chl-a = 127.63 * (B5 / B4) - 99.2",
    chartName: "Chl-a in mg/L"
  },
  turbidity: {
    text: "Turbidity Algorithm Explanation.",
    name: "turbidity",
    eq: "turbidity = ((B4 - B3) / (B4 + B3))",
    chartName: "Turbidity in meters"
  },
  secchi: {
    text: "Secchi disk transparency Algorithm Explanation.",
    name: "secchi",
    eq: "sdt = 4.7134 * (B2 / B3)**2.5569",
    chartName: "Secchi disc transparency"
  }
} 

export const data = {
  turbidity: [-0.47337312776740575, -0.45009408616554225, -0.4540875338704488, -0.5117864769698615, -0.38301128212504104, -0.4044019471142029, -0.37751391653788297, -0.4017764790244758, -0.2675568802910587, -0.33645256472375173, -0.3880021516188478, -0.3307722196844344],
  chlorophyll: [45.82470290581969, 0.7895867074723638, -0.33341005713326577, 1.3653681007592098, 24.938326536757828, 121.6433115468947, 75.81141540078336, 57.70056316079183, 81.88638481803999, 110.39130193984828, 56.54534984882866, 28.39099149748198],
  secchi: [1.9344614545612244, 1.6253198644830684, 3.2462613599564514, 2.572772459553988, 2.1719825356888727, 1.5886987429252333, 1.661737510354315, 0.9739514294918258, 2.625906354852183, 1.1106058323969894, 0.7540661709663996, 2.659471275740757]
}

const DrawerComponent = ({setCurrentParameter, map, source13, sources}) => {
  const { value1, value4, value2 } = useContext(AppContext)
  const [openDrawer, setOpenDrawer] = value1
  const [activeButton, setActiveButton] = value2
  const [currentStatistic, setCurrentStatistic] = value4

  const [currentAlgorithm, setCurrentAlgorithm] = useState(algorithms.chlorophyll)
  const [currentData, setCurrentData] = useState(data.chlorophyll)

  useEffect(() => {
    setCurrentParameter(currentAlgorithm.name)
  }, [currentAlgorithm])
  
  const graph = {
    labels: ['30.01', '17.02', '13.03', '14.04', '09.05', '18.06', '18.07', '15.08', '16.09', '16.10', '10.11', '18.12'],
    datasets: [
      {
        label: `${currentAlgorithm.chartName}`,
        data: currentData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
    
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
    
  const onClose = () => {
    setOpenDrawer(false)
  }
  
  const closeHandler = () => {
    setOpenDrawer(false)
    document.getElementById("slider").style.left = "50%"

    const center = map.getView().getCenter();
    const resolution = map.getView().getResolution();

    map.getView().setCenter([center[0] - 150*resolution, center[1]]);
  }

    return (
        <div>
            <Drawer
                placement={'right'}
                closable={true}
                visible={openDrawer}
                onClose={onClose}
                width={window.innerWidth < 1000 ? "100%" : "35%"}
                mask={false}
                closeIcon={true}
              >
                <p onClick={closeHandler} id="closeDrawer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </p>
                <h1>Clear Lake Water Quality</h1>

                <PickContainer sources={sources} source13={source13} />

                <div id="parameterExplanation">
                  <p>{currentAlgorithm.text}</p>
                  <p className="parameter__eq">{currentAlgorithm.eq}</p>
                </div>

                <Line data={graph} options={options} />
            </Drawer> 
        </div>
    )
}

export default DrawerComponent
