import React, { Component } from 'react';
import MenuItemCard from '../Cards/Menu/ItemCard';

import './accordion.css';





export default class ProfileMainBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      catsRefs: [],
      menuItemRefs: {},
      updatedOnce: false
    }
  }

  getRef = (index) => {
    return this.state.catsRefs[index];
  }

  getMenuItemRef = (item_id) => {
    return this.state.menuItemRefs[item_id];
  }

  componentDidMount() {
    if (this.props.menu) {
      const categories = Object.keys(this.props.menu);
      const refs = [];
      const menu_item_refs = {};
      for (let i=0; i < categories.length; i++) {
        let x = React.createRef();
        console.log("CAT REF", x)

        refs.push(x);
        let menu_items = this.props.menu[categories[i]];
        for (let i=0; i < menu_items.length; i++) {
          console.log("MENU ITEM REF", menu_items[i]['id']);
          let y = React.createRef();
          menu_item_refs[menu_items[i]['id']] = y;
        }
      } 
      this.setState({
        catsRefs: refs,
        menuItemRefs: menu_item_refs,
      });
      this.props.setMenuAccordionRefs(refs);
      this.props.setMenuItemRefs(menu_item_refs);
    }  else {
      console.log("yes else mount confition");
      console.log(this.props.menu);
    }
  }

componentDidUpdate(prevProps) {
    if (prevProps.menu != this.props.menu) {
      console.log('updating', this.state.catsRefs);
      if (this.props.menu && ( (this.state.catsRefs && this.state.catsRefs.length == 0 ) || !(this.state.catsRefs))) {
        this.setState({
          updatedOnce: true,
        })
        const categories = Object.keys(this.props.menu);
        const refs = [];
        const menu_item_refs = {};
        for (let j=0; j < categories.length; j++) {
          let x = React.createRef();
          refs.push(x);
          console.log("CAT REF", x)
          let menu_items = this.props.menu[categories[j]];
          for (let i=0; i < menu_items.length; i++) {
            console.log("MENU ITEM REF", menu_items[i]['id']);
            let y = React.createRef();
            menu_item_refs[menu_items[i]['id']] = y;
          }
        } 
        this.setState({
          catsRefs: refs,
          menuItemRefs: menu_item_refs,
        });
        this.props.setMenuAccordionRefs(refs);
        this.props.setMenuItemRefs(menu_item_refs);
      }  else {
        console.log("yes else update confition");
        // console.log(this.state.catsRefs[17].current);
        console.log(this.props.menu, Boolean(this.props.menu), Boolean((this.state.catsRefs && this.state.catsRefs.length == 0 )), Boolean((this.state.catsRefs)));
      }
    }
  }

  render() {
    return (
      <><div className=" mt-2" style={{ maxWidth: '500px', background: '' }}>
        <div class="accordion accordion-flush" id="accordionFlushExample" style={{ color: '#fff !important' }}>
          {
            this.props.menu && Object.keys(this.props.menu).map((item_category, index) => {
              return (

                <div class="accordion-item  mb-3" id={`ACCORDION_${index}`} ref={this.getRef(index)}>
                  <h2 class="accordion-header" id={`flush-heading${index}`} >
                    <button class={index == 0 ? "pb-2 acc-btn ct-heading accordion-button" : "pb-2 acc-btn ct-heading accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false" aria-controls={`flush-collapseOne${index}`} style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                      {item_category} ({this.props.menu[item_category].length})
                    </button>
                  </h2>
                  <div id={`flush-collapseOne${index}`} class={index == (this.props.custom_selected_index || 0) ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <div className="mt-n-2 u-d-line"></div>
                      <ul className="body-ul">
                        {
                          this.props.menu[item_category].map((item, index) => {
                            return (
                              <li className="mt-4 " >
                                <a className="text-decoration-none ct-heading" ref={this.getMenuItemRef(item.id)}>
                                  <MenuItemCard item_id={item.id} item_name={item.name} item_img_url={item.img_url} item_price={item.price} dietary_flag={item.dietary_flag} item_qty={item.qty}  item_discount={item.discount}/>
                                </a>
                              </li>
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
