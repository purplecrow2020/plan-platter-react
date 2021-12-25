import React, { Component } from 'react'
import LoginImg from '../../images/login-img.png';
import  { Link } from 'react-router-dom';

export default class index extends Component {
    render() {
        return (
            <div className='container my-5' style={{ maxWidth: '500px' }}>
                <div className='row mb-5'>
                    <div className='col-9'>
                        <h3>Sign up</h3>
                        <p>or <Link className='pl-0 sec-btn' to='/login'>login to your account</Link></p>
                    </div>

                    <div className='col-3'>
                        <img src={LoginImg} style={{maxWidth: '100px'}} alt='signUpImg'></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control rounded-0" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput" className='ct-text'>Phone Number</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="password" class="form-control rounded-0" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword"  className='ct-text'>Name</label>
                        </div>
                        <div class="form-floating">
                            <input type="email" class="form-control rounded-0" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput"  className='ct-text'>Email address</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control rounded-0" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword"  className='ct-text'>Password</label>
                        </div>
                        <a className='pl-0 sec-btn' href='#code'> Have a referral code?</a>
                        <div className='d-grid mt-3 mb-2'>
                        <button className=' btn btn-lg btn-success rounded-0 border-0'  style={{ background: '#fc8019' }}>CONTINUE</button>
                        </div>
                        <p className="ct-text">By creating an account, I accept the <b style={{color:'#151616'}}>Terms & Conditions & Privacy Policy</b></p>
                    </div>
                </div>  
            </div>

        )
    }
}
