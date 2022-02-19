import React, { Component } from 'react'
import Signup from '../Signup/index';
import Login from '../Login';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Logo from '../../images/logo.jpeg';
import { v4 as uuidv4 } from 'uuid';
import * as actionCreators from '../../store/actions/actions';
import Swal from 'sweetalert2';



class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onSubmitHandler = () => {
        let udid = uuidv4();
        this.props.loginAsGuest({
           udid
        }).then(r=>{
            Swal.fire(
                'LOGGED IN!',
                'WELCOME!',
                'success'
            );
        }).catch(err=>{
            Swal.fire(
                'ERROR',
                'something went wrong!',
                'error'
            );
        });
    }

    render() {
        return (
            this.props.isAuthenticated > 0
                ? <Navigate to="/home" />
                :
                <div className='container welcome-screen' style={{ maxWidth: '500px', marginBottom: '150px', height: '100vh' }}>
                     <NavBar />
                    <div className="row mt-5 " >
                   
                        <div className="col text-center" >
                            {/* <h3 style={{fontSize: '25px', fontWeight: '700'}}>Welcome <br /> To </h3> */}
                            <h1 className='mt-4' style={{fontSize: '40px', fontWeight: '900'}}>Plan-N-Plater</h1>
                            <img className='mt-3' style={{maxWidth: '150px', height: 'auto'}} src={Logo} />
                            <section className='' style={{ marginTop: '25%' }}>
                                <div className="pb-4">
                                    <div className="row my-2">
                                        <div className="col">
                                            <Link to="/login">
                                                <button className=" sec-btn" style={{ color: '#3D2C8D', borderColor: '#1C0C5B' }}>REGISTER</button>
                                            </Link>
                                        </div>
                                        <div className="col">
                                            {/* <Link to="/signup"> */}
                                                <button className=" sec-btn" style={{ color: '#282c3f', borderColor: '#282c3f' }} onClick={this.onSubmitHandler}>GUEST</button>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <h5 className='mt-3' style={{fontSize: '25px', fontWeight: '600', color: '#fff'}}>Powered by <br/> Plane-N-Plater</h5> 
                        </div>
                    </div>
                </div>
                

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        vendor_details: state.vendor_details,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        loginAsGuest: (req_data) => dispatch(actionCreators.loginAsGuest(req_data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Register);

