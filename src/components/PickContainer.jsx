import React, {useState} from 'react'

const PickContainer = () => {
    const [activeButton, setActiveButton] = useState("chlorophyll")

    return (
        <div id="pickContainer">
            <button className="buttonPick" style={{backgroundColor: activeButton === "chlorophyll" ? "#878784" : "white"}} onClick={() => setActiveButton("chlorophyll")}>Chlorophyll-a</button>
            <button className="buttonPick" style={{backgroundColor: activeButton === "secchi" ? "#878784" : "white"}} onClick={() => setActiveButton("secchi")}>Secchi-Disk</button>
            <button className="buttonPick" style={{backgroundColor: activeButton === "turbidity" ? "#878784" : "white"}} onClick={() => setActiveButton("turbidity")}>Turbidity</button>
        </div>
    )
}

export default PickContainer
