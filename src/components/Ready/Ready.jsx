import './ready.css';
import React, {memo} from 'react';
import Button from '../Button/Button'

const Ready = () => {
    return (
        <>
        <div className="ready-inner-background"></div>
        <section className="ready-container">
        <div className="ready-img-container">
                <img src='/true_blood.svg' alt="donut"/>
            </div>
        <div className="ready-content-container">
            <div className="ready-text-container">
               <p>You can now come</p>
               <p>and pick up</p>
               <p>your amazing Donut!</p>
            </div>
            <Button title={"done"} />
        </div>    
        </section>
        </>
    )
}

export default memo(Ready)
