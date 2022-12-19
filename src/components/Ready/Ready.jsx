import './ready.css';
import React, {memo, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import Button from '../Button/Button'


const Ready = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleReadyClick = () => {
        navigate('/')
    }

    return (
        <>
        <div className="ready-inner-background"></div>
        <section className="ready-container">
        <div className="ready-img-container">
                <img src={location['state']['donutImage']} alt="donut"/>
            </div>
        <div className="ready-content-container">
            <div className="ready-text-container">
               <p>You can now come</p>
               <p>and pick up</p>
               <p>your amazing Donut!</p>
            </div>
            <Button title={"done"} handleClick={handleReadyClick} />
        </div>    
        </section>
        </>
    )
}

export default memo(Ready)
