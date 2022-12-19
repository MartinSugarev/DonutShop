import './payment.css'
import React, {memo, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Title from '../Title/Title';
import Button from '../Button/Button'

const Payment = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const handlePaymentClick = (e) => {
         e.stopPropagation()
         navigate('/preparation', {state: {'donutImage': location.state['donutImage']}})
    }


    return (
        <section  className="payment-container">
            <Title   firstLine={'you can'} secondLine={'pay us'} thirdLine={'now'}/>
            <div className="button-container">
               <Button img={'/apple-pay.png'} handleClick={handlePaymentClick}/>
               <Button img={'/google-pay.png'} handleClick={handlePaymentClick}/>
            </div>
        </section>
    )
}

export default memo(Payment)
