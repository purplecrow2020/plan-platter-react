import React, { Component } from 'react';
import './index.css'

export default class OrderInfo extends Component {
    render() {
        return (
            <div className='container mb-5' style={{ maxWidth: '500px', background: '#fcf9f9', position: 'relative' }}>

                <div className="row text-center mx-auto py-3"  style={{maxWidth: '400px'}}>
                    <div className='col-7'>
                        <div className="row">
                            <div className='col-4'>
                            <img src='https://bit.ly/3pXLJav' className='img-fluid rounded-circle' alt='item-img' style={{ maxWidth: '50px' }} />
                            </div>
                            <div className='col-8'>
                                <div className='rd-heading-3' style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Avenger Endgame</div>
                                <div className=''>
                                <i class="fas fa-star rd-icon-2 "/> 4.3
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-5 my-auto '>
                        <div className=''>
                        <span className='rd-icon-2 mr-2 rounded-circle' style={{background: '#fff',  padding: '15px'}}>
                        <i class="fas fa-star"/>
                        </span>
                        <span className=' rd-icon-2 rounded-circle' style={{background: '#fff',  padding: '15px'}}>
                        <i class="fas fa-star"/>
                        </span>
                        </div>
                       
                    </div>
                </div>

                <div className="row mt-2" style={{borderBottom: '1px dotted rgb(70, 62, 62)', width: '50px', transform: 'rotate(90deg)', position: 'absolute', top: '270px', left:'40px'}}></div>

                <div className='row bg-white text-center' style={{borderRadius: '25px'}}>
                    <div className='row mt-4'>
                        <div className='col'>
                            <h3 className='rd-heading-1'>15:56</h3>
                            <p className='rd-text-3 d-flex justify-content-center'>Estimated Remaining Time</p>
                        </div>
                    </div>
                    <div className='row mt-3 mx-auto' style={{maxWidth: '370px'}}>
                        <div className='col-3 pt-2' >
                            <span className='px-3 py-3 rounded-circle' style={{background: '#fcf9f9'}}>
                            <i class="fas fa-star" />
                            </span>
                       
                        </div>
                        <div className='col-9'>
                            <h4 className='rd-heading-2 text-start'>Stark Tower (30 Mins)</h4>
                            <p className='rd-text-3 text-start '>Estimated Remaining Time</p>
                        </div>
                    </div>


                    <div className='row mt-3 mx-auto my-auto' style={{maxWidth: '370px'}}>
                        <div className='col-3 pt-2 ' >
                            <span className='px-3 py-3 rounded-circle' style={{background: '#fcf9f9'}}>
                            <i class="fas fa-star" />
                            </span>
                       
                        </div>
                        <div className='col-9'>
                            <h4 className='rd-heading-2 text-start'>C-421, 3rd Floor, IITGN</h4>
                            <p className='rd-text-3 text-start '>Your Office Address</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
