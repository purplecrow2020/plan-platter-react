import React, { Component } from 'react'
import LoginImg from '../../images/login-img.png';
import { Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <div className='container' style={{ maxWidth: '500px', marginTop: '15%' }}>
                <div className='row mb-5'>
                    <div className='col-9'>
                        <h3>Login</h3>
                        <p>or <Link className='pl-0 sec-btn' to='/signup'>create an account</Link></p>
                    </div>

                    <div className='col-3'>
                        <img src={LoginImg} style={{maxWidth: '100px'}} alt='loginImg'></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control rounded-0" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput" className='ct-text'>Phone Number</label>
                        </div>
                        <div className='d-grid mt-3 mb-2'>
                        <button className=' btn btn-lg btn-success rounded-0 border-0'  style={{ background: '#fc8019' }}>LOGIN</button>
                        </div>
                        <p className="ct-text">By click on login, I accept the <b style={{color:'#151616'}}>Terms & Conditions & Privacy Policy</b></p>
                    </div>
                </div>   
            </div>
        )
    }
}


export default Login;