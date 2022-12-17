import './preparation.css'
import React, {memo} from 'react'

const Preparation = () => {
    return (
        <section className="preparation-container">
            <div className="preparation-img-container">
                <img src='/true_blood.svg' alt="donut"/>
            </div>
            <p>preparing...</p>
        </section>
    )
}

export default memo(Preparation)
