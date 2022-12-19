import './donut.css'
import React, {memo} from 'react';
import {useNavigate} from 'react-router-dom'


const Donut = ({firstName, secondName, img}) => {


     const navigate = useNavigate()

     const navigationFn = () => {
    navigate('/payment', {state: {'donutImage': img}})
     }

    return (
        <article onClick={() => navigationFn()} className="donut-container">
            <div className="donut-name-container">
               <p>{firstName}</p>
               <p>{secondName}</p>
            </div>
            <div className="donut-img-container">
            <img className="donut-img" src={img} alt="donut-img" />
            </div>
        </article>
    )
}

export default memo(Donut)
