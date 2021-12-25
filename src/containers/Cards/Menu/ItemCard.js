import React, { Component } from 'react'
import AddItem from '../../Buttons/AddItem';
import UpdateItem from '../../Buttons/UpdateItem';


class MenuItemCard extends Component {
    render() {
        console.log("ITEMQTYYYYY",this.props.item_qty);
        const dietary_flag_color = this.props.dietary_flag ==='VEG' ? 'green' : 'red';
        return (
            <div className=" mt-2" style={{ maxWidth: '500px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-8 ">
                        <span style={{ color: ' #ee9c00', fontSize: '12px' }}><i className="far fa-stop-circle dot " style={{color: dietary_flag_color, fontSize: '15px' }}></i> &nbsp; <i className="fas fa-star rating-stat" ></i> Bestseller</span>
                        <h6 className="pt-2" style={{ color: ' #282c3f', fontWeight: '500' }}>{this.props.item_name}</h6>
                        <span className="mt-n-2" style={{ fontSize: '12px' }}>{this.props.item_price}</span>
                    </div>

                    <div className="col-4 " >
                        <div className="row" >
                            <img src={this.props.item_img_url} className="img-fluid rounded mt-3" alt="dal-fry-img" />

                            <div className="d-flex justify-content-center" style={{ position: 'relative', top: '-5px' }}>
                                {
                                    this.props.item_qty 
                                    ? <UpdateItem menu_item_id={this.props.item_id}  count={this.props.item_qty} />
                                    : <AddItem className="ml-3"  menu_item_id={this.props.item_id} />
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
                <hr className="mt-4" />
            
        </div>
        )
    }
}

export default MenuItemCard;