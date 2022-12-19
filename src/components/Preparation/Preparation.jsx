import './preparation.css'
import React, {memo, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

const Preparation = () => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
       setTimeout(() => {
         navigate('/ready', {state: {'donutImage': location.state['donutImage']}})
       }, 5000)
    }, [])

    return (
        <section className="preparation-container">
            <div className="preparation-img-container">
                <img className="preparation-img" src={location.state['donutImage']} alt="donut"/>
            </div>
            <p>preparing...</p>
        </section>
    )
}

export default memo(Preparation)
