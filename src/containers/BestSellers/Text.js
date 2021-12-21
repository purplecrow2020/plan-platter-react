import React from 'react';
import HealthySaladImg from '../../images/Healthy-Salad.png';

export default function CurationMarkedCard() {
    return (
        <>
            <div className=" container mt-2">
                <div className="">
                    <img src={HealthySaladImg} className="img-fluid" alt="north-indian-img" />
                    {/* <a href="#curations-healthy-salad" style={{ cursor: 'pointer' }}>
                    </a> */}
                    <div className="border rounded" style={{background: 'red', width: '20px', height: '20px', position: 'absolute', top: ' 10px', right: '10px'}}>
                    </div>
                </div>
                <div className="tsn-text-2 text-center">
                    <span> Healthy <br/> Food </span>
                </div>
            </div>
        </>
    )
}
