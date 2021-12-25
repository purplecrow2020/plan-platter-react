import React, { Component } from 'react'
import LoginImg from '../../images/login-img.png';
import  { Link } from 'react-router-dom';

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            name: '',
            email_id: '',
            password: '',
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


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
                            <input type="email" class="form-control rounded-1" id="floatingInput" placeholder="name@example.com"  name="mobile" onChange={this.onChangeHandler} />
                            <label for="floatingInput" className='ct-text'>Phone Number</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control rounded-1" id="floatingPassword" placeholder="Password"  name="name" onChange={this.onChangeHandler} />
                            <label for="floatingPassword"  className='ct-text'>Name</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control rounded-1" id="floatingInput" placeholder="name@example.com" name="email_id" onChange={this.onChangeHandler} />
                            <label for="floatingInput"  className='ct-text'>Email address</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control rounded-1" id="floatingPassword" placeholder="Password" name="password" onChange={this.onChangeHandler}  />
                            <label for="floatingPassword"  className='ct-text'>Password</label>
                        </div>
                        <a className='pl-0 sec-btn' href='#code'> Have a referral code?</a>
                        <div className='d-grid mt-3 mb-2'>
                        <button className=' btn btn-lg btn-success rounded-1 border-0'  style={{ background: '#fc8019' }}>CONTINUE</button>
                        </div>
                        <p className="ct-text">By creating an account, I accept the <b style={{color:'#151616'}}>Terms & Conditions & Privacy Policy</b></p>
                    </div>
                </div>  
            </div>

        )
    }
}


export default Signup;