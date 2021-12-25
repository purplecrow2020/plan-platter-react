import React from 'react'
import DetailsCart from './DetailsCart';
import DefaultCart from './DefaultCart';
import './Cart.css'

export default function CartBody() {
    return (
        <div className="    ">
            <DefaultCart/>
            <DetailsCart/>
        </div>
    )
}