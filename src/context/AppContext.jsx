import React, { createContext, useState, useEffect } from 'react';
import {algorithms, data} from "../components/DrawerComponent"

export const AppContext = createContext(undefined);

export const ContextProvider = (props)=> {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [activeButton, setActiveButton] = useState(1)
    const [showLegend, setShowLegend] = useState(false)
    const [currentStatistic, setCurrentStatistic] = useState(1)
    const [currentAlgorithm, setCurrentAlgorithm] = useState(algorithms.chlorophyll)
    const [currentData, setCurrentData] = useState(data.chlorophyll)
    const [currentActiveStatisticsButton, setCurrentActiveStatisticsButton] = useState(1)

    return (
        <AppContext.Provider
            value={{
                value1: [openDrawer, setOpenDrawer],
                value2: [activeButton, setActiveButton],
                value3: [showLegend, setShowLegend],
                value4: [currentStatistic, setCurrentStatistic],
                value5: [currentAlgorithm, setCurrentAlgorithm],
                value6: [currentData, setCurrentData],
                value7: [currentActiveStatisticsButton, setCurrentActiveStatisticsButton]
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};