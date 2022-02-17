import React from 'react'
import Bill from '../Buttons/Bill'
import CallWater from '../Buttons/CallWater'
import CleanTable from '../Buttons/CleanTable'
import FingerBowl from '../Buttons/FingerBowl'
import Refreshment from '../Buttons/Refreshment'

export default function index() {
    return (
        <div className='container rounded' style={{ border: '1px solid black', maxWidth: '500px', height: '200px' }}>
            <h4 className='mt-2 '>Call  for service</h4>
            <div className='row mb-3 d-flex  justify-content-between'>
                <div className='col' >
                    <CallWater />
                </div>
                <div className='col'><CleanTable /></div>

            </div>
            <div className='row mb-3 d-flex  justify-content-between'  style={{paddingLeft: '0px'}}>
                 <div className='col '  ><Bill /> </div>
                <div className='col'  ><Refreshment /> </div>
            </div>
            <div className='row  d-flex  justify-content-between'  style={{paddingLeft: '0px'}}>
                
                <div className='col' ><FingerBowl /></div>
            </div>


        </div>
    )
}
