import React, { Component } from 'react'
import './index.css'

export default class SingleProductDetail extends Component {
    render() {
        return (
            <div className='container' style={{ maxWidth: '500px', background: '#fcf9f9' }}>

                <div className="row ">
                    <a href="#home" className="text-decoration-none col-1 rd-icon-1" style={{ cursor: 'pointer' }}><i class="fas fa-long-arrow-alt-left "></i> </a>
                    <div className="col"></div>
                    <a href="#wishlist" className="text-decoration-none col-1 rd-icon-1 mr-3"><i className="fas fa-heart "></i> </a>
                    
                </div>

                <div className='row mb-2'>
                    <div className='col d-flex'>
                        <img src='https://bit.ly/3pXLJav' className='img-fluid rounded mx-auto ' alt='item-img' style={{ maxWidth: '300px' }} />
                    </div>
                </div>



                <div className="row mt-2">
                    <h4 className='rd-heading-2' style={{ letterSpacing: '1px' }}>Ingredients</h4>
                    <div className="col-3  text-center" style={{ borderRadius: '38%', maxWidth: '80px', height: '110px', background: '#fff' }}>
                        <span className="rd-heading-3" >Sugar</span>
                        <span className="rd-text-3  d-flex justify-content-center mb-3 ">8 Gram</span>
                        <span className="rd-heading-3  py-3 px-3" style={{ borderRadius: '50%', background: '#e2e0e0' }}>
                            <span className='text-center '> 2% </span>
                        </span>
                    </div>



                    <div className="col-3  text-center" style={{ borderRadius: '38%', maxWidth: '80px', height: '110px', background: '#fff' }}>
                        <span className="rd-heading-3" >Sugar</span>
                        <span className="rd-text-3  d-flex justify-content-center mb-3 ">8 Gram</span>
                        <span className="rd-heading-3  py-3 px-3" style={{ borderRadius: '50%', background: '#e2e0e0' }}>
                            <span className='text-center '> 2% </span>
                        </span>
                    </div>

                    <div className="col-3  text-center" style={{ borderRadius: '38%', maxWidth: '80px', height: '110px', background: '#fff' }}>
                        <span className="rd-heading-3" >Sugar</span>
                        <span className="rd-text-3  d-flex justify-content-center mb-3 ">8 Gram</span>
                        <span className="rd-heading-3  py-3 px-3" style={{ borderRadius: '50%', background: '#e2e0e0' }}>
                            <span className='text-center '> 2% </span>
                        </span>
                    </div>

                    <div className="col-3  text-center" style={{ borderRadius: '38%', maxWidth: '80px', height: '110px', background: '#fff' }}>
                        <span className="rd-heading-3" >Sugar</span>
                        <span className="rd-text-3  d-flex justify-content-center mb-3 ">8 Gram</span>
                        <span className="rd-heading-3  py-3 px-3" style={{ borderRadius: '50%', background: '#e2e0e0' }}>
                            <span className='text-center '> 2% </span>
                        </span>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <h4 className='rd-heading-2' style={{ letterSpacing: '1px' }}>Details</h4>
                        <p className='rd-text-2'>A biscuit is a flour-based baked food product. In most countries biscuits are typically hard, flat and unleavened. </p>
                    </div>
                </div>


            </div>

        )
    }
}
