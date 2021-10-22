import React from 'react'

const Slider = () => {
    return (
        <div id="slider">
            <input id="sliderInput" type="range" min="0" max="100" step="25" list="steplist" />
                <datalist id="steplist">
                    <option>0</option>
                    <option>25</option>
                    <option>50</option>
                    <option>75</option>
                    <option>100</option>
                </datalist>
        </div>
    )
}

export default Slider
