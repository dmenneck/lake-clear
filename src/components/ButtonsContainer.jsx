import React, {useState} from 'react'
import DrawerComponent from './DrawerComponent'

const ButtonsContainer = () => {
    return (
        <div id="buttonsContainer">
            <DrawerComponent />
            <button className="buttonTop">1</button>
            <button className="buttonTop">2</button>
            <button className="buttonTop">back</button>
        </div>
    )
}

export default ButtonsContainer
