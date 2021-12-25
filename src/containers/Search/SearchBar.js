import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

// import CurationCard from '../cards/PopularCurations/CurationCard';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state ={
            search_string: ''
        }
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

    render() {
        return (
            <div className="container" style={{ maxWidth: '500px' }}>
                <div className="row">
                    <div className="col">
                        <div className="py-3 ">
                            <input className="py-2 pl-5 text-start border border-2 rounded" placeholder="Search for Restaurant and food" style={{ width: '100%', fontSize: '18px', fontWeight: '500' }}  onChange={this.onChangeHandler} value={this.state.search_string}/>
                            <div style={{ position: 'absolute', top: '28px', left: '35px' }}><i class="fas fa-search" style={{ color: '#696b79' }}></i></div>
                            {/* <i class="fas fa-times" style={{position: 'absolute', top: '25px', left: '390px'}}></i> */}
                            {/* <i class="fas fa-chevron-left" style={{position: 'absolute', top: '25px', left: '20px'}}></i> */}
                        </div>
                    </div>
                </div>


                <ul style={{ width: '100%', paddingLeft: '0px', }}>
                {
                    this.props.menu_item_search_results && this.props.menu_item_search_results.map((item)=>{
                        return (
                            <li class="list-group-item"><a  className='text-decoration-none' style={{ color: '#686b78' }}>{item.name}</a></li>
                        )
                    })
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
        menu_item_search_results: state.menu_item_search_results
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getMenuSearchesApi: (item_search_string) => dispatch(actionCreators.getMenuSearchesApi(item_search_string)),
        emptySearchResults: (data) => dispatch({type : 'SET_MENU_SEARCH_RESULTS', payload : {response  : {data: { data: data}}}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);