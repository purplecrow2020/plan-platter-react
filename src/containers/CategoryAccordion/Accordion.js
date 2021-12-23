import React, { Component } from 'react';
import MenuItemCard from '../Cards/Menu/ItemCard';

import './accordion.css';





export default class ProfileMainBody extends Component {
  render() {
    return ( 
      <div className="container mt-5" style={{ maxWidth: '500px', background: '' }}>
        <div className="row">
          <div className="col">
            <div class="accordion accordion-flush" id="accordionFlushExample" style={{ color: '#fff !important' }}>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="pb-2 acc-btn ct-heading accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                    BestSellers (9)
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div className="mt-n-2 u-d-line" ></div>
                    <ul className="body-ul">
                      <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <MenuItemCard/></a> </li>
                      <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <MenuItemCard/></a> </li>
                      <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <MenuItemCard/></a> </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="pb-2 acc-btn ct-heading accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"  style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                    cHINES (5)
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div className="mt-n-2 u-d-line" ></div>
                    <ul className="body-ul">
                      <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <MenuItemCard/></a> </li>
                      <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <MenuItemCard/></a> </li>
                      <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <MenuItemCard/></a> </li>
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
