import React, { Component } from 'react'
import Signup from '../Signup/index';
import Login from '../Login';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className='container' style={{maxWidth: '500px', marginBottom:'150px', height: '100vh'}}>
                <NavBar />
                <div className="row" style={{marginTop: '50vh'}}>
                    <div className="col" >
                        <section>
                            <div className="pb-4" style={{ background: '#fff'}}>
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
        )
    }
}


export default Register;