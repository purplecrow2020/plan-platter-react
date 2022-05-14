import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import MenuItemCard from '../Cards/Menu/ItemCard';
// import CurationCard from '../cards/PopularCurations/CurationCard';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state ={
            search_string: ''
        }
    }

    onCancelHandler = () => {
        this.props.emptySearchResults([]);
        this.setState({
            search_string: ''
        })
    }

    onChangeHandler = (e) => {
        this.setState({
            search_string: e.target.value
        });
        if(e.target.value.length > 0) {
            this.props.getMenuSearchesApi(e.target.value);
        }
        if (e.target.value.length === 0) {
            this.props.emptySearchResults([])
        }
    }

    moveIntoItem = (item_id) => {
        let category_index = 0;
        const categories = Object.keys(this.props.menu);
        for (let i=0; i < categories.length; i++) {
            let menu_items = this.props.menu[categories[i]];
            for (let j=0; j <menu_items.length; j++) {
                if (menu_items[j]['id'] == item_id) {
                    category_index = i;
                    break;
                }
            }
        }
        this.props.setCustomMenuCategoryIndex(category_index, item_id);
        // this.props.menuCategoryRefs[item_id].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // })
       

    }

    render() {
        return (
            <div className="container" style={{ maxWidth: '500px', border: '0px solid black', maxHeight: '500px', overflow: 'scroll' }}>
                <div className="row">
                    <div className="col">
                        <div className="py-3 ">
                            <input className="py-2 pl-5 text-start border border-2 rounded" 
                            placeholder="Search food"
                             style={{ width: '100%', fontSize: '18px', fontWeight: '500', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} 
                             onChange={this.onChangeHandler} value={this.state.search_string}/>

                            <div style={{ position: 'absolute', top: '28px', left: '35px' }}><i class="fas fa-search" style={{ color: '#696b79' }}></i></div>
                            <div style={{position: 'absolute', top: '28px', right: '34px'}}> <i class="fas fa-times" style={{ color: '#696b79' }} onClick={this.onCancelHandler}></i> </div>
                           
                            {/* <i class="fas fa-chevron-left" style={{position: 'absolute', top: '25px', left: '20px'}}></i> */}
                        </div>
                    </div>
                </div>


                <ul style={{ width: '100%', paddingLeft: '0px', listStyleType: "none", border: '0px solid red', boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
                {
                    this.props.menu_item_search_results && this.props.menu_item_search_results.map((item)=>{
                        return (
                            <li class="list-group-item" style={{verticalAlign: 'center'}}><p  style={{padding:'5px'}} className='text-decoration-none' style={{ color: '#686b78' }} onClick={() => { this.moveIntoItem(item.id)}}>{item.name}</p></li>
                        )
                    })
                        // this.props.menu_item_search_results && this.props.menu_item_search_results.map((item, index) => {
                        //     return (
                        //         <li className="mt-4 ">
                        //             <a className="text-decoration-none ct-heading">
                        //                 <MenuItemCard item_id={item.id} item_name={item.name} item_img_url={item.img_url} item_price={item.price} dietary_flag={item.dietary_flag} item_qty={item.qty}  item_discount={item.discount}/>
                        //             </a>
                        //         </li>
                        //     )
                        // })
                }
                </ul> 
    
                {/* DISPLAY LIST OF ITEMS */}
                {/* <ul style={{ width: '100%', paddingLeft: '0px', }}>
                    <li class="list-group-item">
                        <a href='#' className='text-decoration-none' style={{ color: '#686b78' }}>Anand Shekhwati</a></li>
                    <li class="list-group-item"><a href='#' className='text-decoration-none' style={{ color: '#686b78' }}>Amar Punjabi</a></li>
                    <li class="list-group-item"><a href='#' className='text-decoration-none' style={{ color: '#686b78' }}>Ananpuran Food</a></li>
                    <li class="list-group-item"><a href='#' className='text-decoration-none' style={{ color: '#686b78' }}>Anasagar Restaurant</a></li>
                </ul> */}
    
                
                {/* <div className="row my-3">
                    <div className="col ">
                        <span className=" py-2 px-3 border-2 btn btn-outline-danger rounded-pill">Restaurants</span>
                        <span className=" py-2 px-4 ml-2 border-2 btn btn-outline-danger rounded-pill ">Dishes</span>
                    </div>
                </div> */}
                {/* <div className="row my-3 ">
    
                    <div style={{ borderBottom: '2px solid #7e808c' }}></div>
    
                </div>
    
                <h3 className="" style={{ fontSize: '18px', color: '#3d4152', letterSpacing: '-0.3px' }}>Recent Search</h3>
                <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                    <li >
                        <a href='#' className='text-decoration-none'>
                            <div className="row ">
                                <div className="col-1" style={{ position: 'relative', top: '-1px', left: '0px', color: '#686b78' }}>  <i class="fas fa-search"> </i> </div>
                                <h5 className="col-11 pl-0" style={{ fontSize: '17px', color: '#686b78', fontWeight: '400', letterSpacing: '-0.15' }}> MRF Punjabi Food</h5>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href='#' className='text-decoration-none'>
                            <div className="row">
                                <div className="col-1" style={{ position: 'relative', top: '-1px', left: '0px', color: '#686b78' }}>  <i class="fas fa-search"> </i> </div>
                                <h5 className="col-11 pl-0" style={{ fontSize: '17px', color: '#686b78', fontWeight: '400', letterSpacing: '-0.15' }}> Anand Shekhawati Dhaba</h5>
                            </div>
                        </a>
                    </li>
    
                </ul>
    
    
    
                <h2 style={{ fontSize: '23px', fontWeight: '800', letterSpacing: '-0.3px', color: '#3d4152' }}>Popular Cuisines</h2> */}
    
                {/* <div className="row mt-4 mb-5 ">
                    <div className="col-3">
                        <CurationCard />
                    </div>
                    <div className="col-3">
                        <CurationCard />
                    </div>
                    <div className="col-3">
                        <CurationCard />
                    </div>
                    <div className="col-3">
                        <CurationCard />
                    </div>
                </div> */}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        menu_item_search_results: state.menu_item_search_results,
        menu : state.menu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getMenuSearchesApi: (item_search_string) => dispatch(actionCreators.getMenuSearchesApi(item_search_string)),
        emptySearchResults: (data) => dispatch({type : 'SET_MENU_SEARCH_RESULTS', payload : {response  : {data: { data: data}}}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);