import React, { Component } from 'react';

import './accordion.css';





export default class ProfileMainBody extends Component {
  render() {
    return ( 
      <div className="container mt-5" style={{ maxWidth: '500px', background: '' }}>


        <div className="row">
          <div className="col">
            <div class="accordion accordion-flush" id="accordionFlushExample" style={{ color: '#fff !important' }}>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class=" acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h5 className="ct-heading d-flex justify-content-start" >BestSellers </h5>
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div className="mt-n-2 u-d-line" ></div>
                    <ul className="body-ul">
                      <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <i class="fas fa-home "></i>  &nbsp; Mange Address <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                      <li className="mt-4 " > <a href="#favorite" className="text-decoration-none ct-heading"> <i class="fas fa-home "></i>  &nbsp; Favorites <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                      <li className="mt-4 " > <a href="#offers" className="text-decoration-none ct-heading"> <i class="fas fa-percentage mr-1"></i>  &nbsp;  Offers <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <h5 className="ct-heading d-flex justify-content-start" >cHINES</h5>
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div className="mt-n-2 u-d-line" ></div>
                    <ul className="body-ul">
                      <li className="mt-4 " > <a href="#refunds" className="text-decoration-none ct-heading"> <i class="fas fa-wallet"></i>  &nbsp; Active Refunds <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                      <li className="mt-4 " > <a href="#payment-mode" className="text-decoration-none ct-heading"> <i class="fas fa-home "></i>  &nbsp; Payment Modes <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="u-line" ></div>
          </div>
        </div>

        
      </div>
    )
  }
}
