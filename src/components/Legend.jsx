import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Legend = () => {
    const { value2, value3 } = useContext(AppContext)
    const [activeButton, setActiveButton] = value2
    const [showLegend, setShowLegend] = value3

    let legend;

    console.log(activeButton)

    if (activeButton === 1) {
        legend = (
            <div>
                <p className="legende-p">Chlorophyll-a</p>
                <p className="bottom-margin">in mg/L</p>
    
                <div id="legende-chla-grid">
                    <div style={{backgroundColor: "#0b0757"}}></div>
                    <div className="legende-text">0</div>
                    <div style={{backgroundColor: "#76c8bc"}}></div>
                    <div className="legende-text">50</div>
                    <div style={{backgroundColor: "#c1f871"}}></div>
                    <div className="legende-text">100</div>
                    <div style={{backgroundColor: "#f2bd3a"}}></div>
                    <div className="legende-text">150</div>
                    <div style={{backgroundColor: "#7e1017"}}></div>
                    <div className="legende-text">250</div>
                </div>
            </div>
        )
    } else if (activeButton === 2) {
        legend = (
            <div>
                <p className="legende-p">Turbidity</p>
                <p className="bottom-margin">in ?</p>
    
                <div id="legende-chla-grid">
                    <div style={{backgroundColor: "#2b83ba"}}></div>
                    <div className="legende-text">?</div>
                    <div style={{backgroundColor: "#abdda4"}}></div>
                    <div className="legende-text">?</div>
                    <div style={{backgroundColor: "#ffffbf"}}></div>
                    <div className="legende-text">?</div>
                    <div style={{backgroundColor: "#fdae61"}}></div>
                    <div className="legende-text">?</div>
                    <div style={{backgroundColor: "#d7191c"}}></div>
                    <div className="legende-text">?</div>
                </div>
            </div>
        )
    } else {
        legend = (
            <div>
                <p className="legende-p">Secchi disk transparency</p>
                <p className="bottom-margin">in meters</p>
    
                <div id="legende-chla-grid">
                    <div style={{backgroundColor: "#d7191c"}}></div>
                    <div className="legende-text">0</div>
                    <div style={{backgroundColor: "#f1a45c"}}></div>
                    <div className="legende-text">1</div>
                    <div style={{backgroundColor: "#33ff66"}}></div>
                    <div className="legende-text">2</div>
                    <div style={{backgroundColor: "#a2cfdd"}}></div>
                    <div className="legende-text">3</div>
                    <div style={{backgroundColor: "#2c7bb6"}}></div>
                    <div className="legende-text">4</div>
                </div>
            </div>
        )
    }

    setTimeout(() => {
        setShowLegend(true)
    }, 7000)

    return (
        <div id="legende-container" style={{display: showLegend ? "block" : "none"}}>
            {legend}
        </div>
    )
}

export default Legend
