import './payment.css'
import React, {memo} from 'react'
import Title from '../Title/Title';
import Button from '../Button/Button'

const Payment = () => {
    return (
        <section  className="payment-container">
            <Title   firstLine={'you can'} secondLine={'pay us'} thirdLine={'now'}/>
            <div className="button-container">
               <Button img={'/apple-pay.png'} />
               <Button img={'/google-pay.png'}/>
            </div>
        </section>
    )
}

export default memo(Payment)
