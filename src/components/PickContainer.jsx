
import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext';
import chla from "../static/images/chla.PNG"
import turb from "../static/images/turb.PNG"
import sd from "../static/images/sd.PNG"
import {algorithms, data} from "./DrawerComponent"
import {loadWholeYear, clearWholeYear, loadStatisticLayer} from "../LoadLayer"

const PickContainer = ({sources, source13}) => {
    const { value2,value4, value5, value6, value7 } = useContext(AppContext)
    const [activeButton, setActiveButton] = value2
    const [currentStatistic, setCurrentStatistic] = value4
    const [currentAlgorithm, setCurrentAlgorithm] = value5
    const [currentData, setCurrentData] = value6
    const [currentActiveStatisticsButton, setCurrentActiveStatisticsButton] = value7
    const [currentlyShowingAlgorithm, setCurrentlyShowingAlgorithm] = useState(1)

    const handleButtonClick = (button) => {
        setActiveButton(button)

        // load nothing!
        if (button == currentlyShowingAlgorithm) {
            return false
        }

        if (button == 1) {
            setCurrentlyShowingAlgorithm(1)

            if (currentActiveStatisticsButton == 1) {
                loadWholeYear("chla", sources)
                return false
            }

            // clearWholeYear()
            loadStatisticLayer(currentStatistic, source13, button)


            setCurrentAlgorithm(algorithms.chlorophyll)
            setCurrentData(data.chlorophyll)
        } else if (button == 2) {
            setCurrentlyShowingAlgorithm(2)

            if (currentActiveStatisticsButton == 1) {
                loadWholeYear("turbidity", sources)
                return false
            }

            // clearWholeYear()
            loadStatisticLayer(currentStatistic, source13, button)



            setCurrentAlgorithm(algorithms.turbidity)
            setCurrentData(data.turbidity)
        } else {
            setCurrentlyShowingAlgorithm(3)

            if (currentActiveStatisticsButton == 1) {
                loadWholeYear("sd", sources)
                return false
            }

            // clearWholeYear()
            loadStatisticLayer(currentStatistic, source13, button)

            setCurrentAlgorithm(algorithms.secchi)
            setCurrentData(data.secchi)
        }
    }

    return (
        <div id="drawerGrid">
            <div>
                <img src={chla} className="drawerButton" onClick={() => handleButtonClick(1)} style={{opacity: activeButton == 1 ? 1 : 0.4, border: activeButton == 1 ? "1px solid black" : "none"}} />
                <h3 className="drawerButtonText">Chlorophyll-a</h3>
            </div>
            <div>
                <img src={turb} className="drawerButton drawerButton-turbidity" onClick={() => handleButtonClick(2)} style={{opacity: activeButton == 2 ? 1 : 0.4, border: activeButton == 2 ? "1px solid black" : "none"}}></img>
                <h3 className="drawerButtonText">Turbidity</h3>
            </div>
            <div>
                <img src={sd} className="drawerButton drawerButton-sd" onClick={() => handleButtonClick(3)} style={{opacity: activeButton == 3 ? 1 : 0.4, border: activeButton == 3 ? "1px solid black" : "none"}}></img>
                <h3 className="drawerButtonText">Secchi Disk</h3>
            </div>
        </div>
    )
}

export default PickContainer
