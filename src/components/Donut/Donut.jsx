import './donut.css'
import React, {memo} from 'react'

const Donut = ({firstName, secondName, img}) => {
    return (
        <article className="donut-container">
            <div className="donut-name-container">
               <p>{firstName}</p>
               <p>{secondName}</p>
            </div>
            <div className="donut-img-container">
            <img src={img} alt="donut-img" />
            </div>
        </article>
    )
}

export default memo(Donut)
