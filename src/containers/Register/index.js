import React, { Component } from 'react'
import Signup from '../Signup/index';
import Login from '../Login';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Logo from '../../images/logo.jpeg';

class Register extends Component {
    render() {
        return (
            this.props.isAuthenticated > 0
                ? <Navigate to="/home" />
                :
                <div className='container welcome-screen' style={{ maxWidth: '500px', marginBottom: '150px', height: '100vh' }}>
                    <div className='re-rotate'> <NavBar/>
                    <div className="row mt-5 " style={{}}>
                   
                        <div className="col text-center" >
                            <h3>Welcome <br /> To </h3>
                            <h1 className='mt-4'>Plane-N-Plater</h1>
                            <img className='mt-3' style={{maxWidth: '150px', height: 'auto'}} src={Logo} />
                            <section className='' style={{ marginTop: '25%' }}>
                                <div className="pb-4">
                                    <div className="row my-2">
                                        <div className="col">
                                            <Link to="/login">
                                                <button className=" sec-btn" style={{ color: '#fc8019', borderColor: '#fc8019' }}>REGISTER</button>
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <Link to="/signup">
                                                <button className=" sec-btn" style={{ color: '#282c3f', borderColor: '#282c3f' }}>GUEST</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}


export default connect(mapStateToProps)(Register);

