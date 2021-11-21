import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext';
import { refresh } from '../App';
import { loadWholeYear, clearWholeYear, loadStatisticLayer } from "../LoadLayer"

const Statistics = ({sources, source13}) => {
    const { value1, value2, value4, value5, value7 } = useContext(AppContext)
    const [openDrawer, setOpenDrawer] = value1
    const [activeButton, setActiveButton] = value2
    const [currentStatistic, setCurrentStatistic] = value4
    const [currentAlgorithm, setCurrentAlgorithm] = value5
    const [currentActiveStatisticsButton, setCurrentActiveStatisticsButton] = value7

    const [showStatistics, setShowStatistics] = useState(false)
    const [areSourcesCleared, setAreSourcesCleared] = useState(false)

    useEffect(() => {
        if (currentActiveStatisticsButton === 1) {
            document.getElementById("slider").style.display = "block"
        } else {
            document.getElementById("slider").style.display = "none"
        }
    }, [currentActiveStatisticsButton])

    setTimeout(() => {
        setShowStatistics(true)
    }, 7000)

    
    const clearSourcesOfWholeYear = () => {
        clearWholeYear(sources)
        setAreSourcesCleared(true)
    }

    const handleButtonClick = (button) => {

        setCurrentActiveStatisticsButton(button)

        if (button !== 1) {

            if (button == 2) {
                setCurrentStatistic("min")
                loadStatisticLayer("min", source13, activeButton)
            } else if (button == 3 ) {
                setCurrentStatistic("max")
                loadStatisticLayer("max", source13, activeButton)
            } else if (button == 4) {
                setCurrentStatistic("mean")
                loadStatisticLayer("mean", source13, activeButton)
            } else if (button == 5) {
                setCurrentStatistic("std")
                loadStatisticLayer("std", source13, activeButton)
            }


            !areSourcesCleared && clearSourcesOfWholeYear()
        }

        if (button === 1) {
            setCurrentStatistic("whole_year")
            
            source13.clear()
            source13.updateParams({LAYERS: `` });


            if (activeButton == 1) {
                loadWholeYear("chla", sources)
            } else if (activeButton == 2) {
                loadWholeYear("turbidity", sources)
            } else {
                loadWholeYear("sd", sources)
            }

            setAreSourcesCleared(false)
        }
    }

    return (
        <div id="statistics__container" style={{right: openDrawer ? "37%" : "2%", display: showStatistics ? "block" : "none"}}>
            <p className="statistics-options" style={{border: currentActiveStatisticsButton === 1 ? "1px solid black" : "none", backgroundColor: currentActiveStatisticsButton === 1 ? "rgb(246, 244, 244)" : "white"}} onClick={() => handleButtonClick(1)}>Whole year</p>
            <p className="statistics-options" style={{border: currentActiveStatisticsButton === 2 ? "1px solid black" : "none", backgroundColor: currentActiveStatisticsButton === 2 ? "rgb(246, 244, 244)" : "white"}} onClick={() => handleButtonClick(2)}>Minimum</p>
            <p className="statistics-options" style={{border: currentActiveStatisticsButton === 3 ? "1px solid black" : "none", backgroundColor: currentActiveStatisticsButton === 3 ? "rgb(246, 244, 244)" : "white"}} onClick={() => handleButtonClick(3)}>Maximum</p>
            <p className="statistics-options" style={{border: currentActiveStatisticsButton === 4 ? "1px solid black" : "none", backgroundColor: currentActiveStatisticsButton === 4 ? "rgb(246, 244, 244)" : "white"}} onClick={() => handleButtonClick(4)}>Mean</p>
            <p className="statistics-options" style={{border: currentActiveStatisticsButton === 5 ? "1px solid black" : "none", backgroundColor: currentActiveStatisticsButton === 5 ? "rgb(246, 244, 244)" : "white"}} onClick={() => handleButtonClick(5)}>Standard deviation</p>
        </div>
    )
}

export default Statistics
