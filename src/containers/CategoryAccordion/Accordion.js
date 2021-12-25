import React, { Component } from 'react';
import MenuItemCard from '../Cards/Menu/ItemCard';

import './accordion.css';





export default class ProfileMainBody extends Component {
  render() {
    return ( 
      <><div className=" mt-5" style={{ maxWidth: '500px', background: '' }}>
        <div class="accordion accordion-flush" id="accordionFlushExample" style={{ color: '#fff !important' }}>
          {
            this.props.menu && Object.keys(this.props.menu).map((item_category, index) => {
              return (

                <div class="accordion-item mb-3">
                  <h2 class="accordion-header" id={`flush-heading${index}`}>
                    <button class={ index == 0 ? "pb-2 acc-btn ct-heading accordion-button"  : "pb-2 acc-btn ct-heading accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false" aria-controls={`flush-collapseOne${index}`} style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                      {item_category} ({this.props.menu[item_category].length})
                    </button>
                  </h2>
                  <div id={`flush-collapseOne${index}`} class={index == 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse" } aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <div className="mt-n-2 u-d-line"></div>
                      <ul className="body-ul">
                        {
                            this.props.menu[item_category].map((item, index) => {
                                return (
                                    <li className="mt-4 "> <a href="#manage-address" className="text-decoration-none ct-heading"><MenuItemCard item_name={item.name} item_img_url={item.img_url} item_price={item.price} /></a> </li>
                                )
                            })
                        }
                      </ul>
                    </div>
                  </div>
                </div> 
              )
            })
          }   
        </div>
      </div><div className="row mb-2">
          <div className="col">
            <div className="u-line"></div>
          </div>
        </div></>
    )
  }
}
