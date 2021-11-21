import React, {useState, useContext} from 'react'
import DrawerComponent from './DrawerComponent'
import { AppContext } from '../context/AppContext';

const ButtonsContainer = ({map, view}) => {
    const { value1 } = useContext(AppContext)
    const [openDrawer, setOpenDrawer] = value1

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
        
        !openDrawer ? document.getElementById("slider").style.left = "32%" : document.getElementById("slider").style.left = "50%"

        const center = map.getView().getCenter();
        const resolution = map.getView().getResolution();

        if (openDrawer) {
            map.getView().setCenter([center[0] - 150*resolution, center[1] ]);
        } else {
            map.getView().setCenter([center[0] + 150*resolution, center[1] ]);
        }
    }

    const zoomToLayer = () => {
        view.animate({zoom: 11.5, center: [-13668995.226402676, 4726459.790432823], duration: 1000 }); 
    }

    return (
        <div 
        id="buttonsContainer"
        style={{right: openDrawer ? "37%" : "2%"}}
            >
            <button onClick={zoomToLayer}>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M15,3l2.3,2.3l-2.89,2.87l1.42,1.42L18.7,6.7L21,9V3H15z M3,9l2.3-2.3l2.87,2.89l1.42-1.42L6.7,5.3L9,3H3V9z M9,21 l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3,17.3L3,15v6H9z M21,15l-2.3,2.3l-2.87-2.89l-1.42,1.42l2.89,2.87L15,21h6V15z"/></g></g></g></svg>
            </button>
            <button onClick={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/></svg>
            </button>
        </div>
    )
}

export default ButtonsContainer
