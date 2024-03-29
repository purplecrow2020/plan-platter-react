import React, { Component } from 'react'
import LoginImg from '../../images/login-img.png';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Navigate } from 'react-router-dom'
import * as actionCreators from '../../store/actions/actions';
import Swal from 'sweetalert2';
import firebase from './firebaseConfig.js';


class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            name: '',
            email_id: '',
            password: '',
            mobile_number_verified: false,
            isSubmitButtonEnabled: false
        }
    }


    handleSubmitButtonEnabler = () =>  {
        if (this.state.mobile.length > 0 && this.state.name.length > 0 && this.state.email_id.length > 0 && this.state.password.length > 0 && this.state.mobile_number_verified) {
            this.setState({
                isSubmitButtonEnabled: true
            })
        }  else {
            this.setState({
                isSubmitButtonEnabled: false
            })
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },() => {
            
            this.handleSubmitButtonEnabler();
        });
    }

    onSubmitHandler = () => {
        this.props.signUp({
            mobile: this.state.mobile,
            name: this.state.name,
            email_id: this.state.email_id,
            password: this.state.password,
        }).then((r)=>{
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


  verifyMobileNumber = (e) => {
    e.preventDefault();
    let that = this;

    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let phoneNumber =this.state.mobile.toString();
    phoneNumber = '+91' + phoneNumber;
    console.log("phonenumber",phoneNumber);

    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha).then(async function(e){

        const { value: otp } = await Swal.fire({
            title: 'Enter your password',
            input: 'password',
            inputPlaceholder: 'Enter your OTP',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        });

        if (otp) {
            Swal.fire(`Entered otp: ${otp}`)
        }
        let code = otp;
        e.confirm(code).then(function(result){
            that.setState({
                mobile_number_verified:  true
            })
          }).catch(function(error){
            console.log(error);
            Swal.fire(`wrong otp, try again`)
        });
        }).catch(function(error){
        console.log(error);
        });
  }

    
    
    render() {
        return (
            this.props.isAuthenticated> 0 
            ? <Navigate to="/home" />
            :
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
                            <button id="clear" style={{position:'absolute', top: '0px', right: '1px', height: '95%', background: this.state.mobile_number_verified ? 'green' : 'rgb(200,200,200)' , border: 'none', margin:'1px', borderLeft: '0px solid red', width: '40px'}} onClick={this.verifyMobileNumber}><i className="fa fa-check" aria-hidden="true"></i></button>
                            <label for="floatingInput" className='ct-text'>Phone Number</label>
                            {/* <button  class="btn btn-primary mobile_confirmation_button" onClick={this.verifyMobileNumber} disabled={this.state.verification_button_disable} >{'Verify my mobile number'}</button> */}
                        </div>
                        <div id="recaptcha" style={{display: this.state.mobile_number_verified ? 'none' : 'black'}}></div>
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
                        {/* <a className='pl-0 sec-btn' href='#code'> Have a referral code?</a> */}
                        <div className='d-grid mt-3 mb-2'>
                            {
                                this.state.isSubmitButtonEnabled 
                                ? <button className=' btn btn-lg btn-success rounded-1 border-0'  style={{ background: '#916BBF' }} onClick={this.onSubmitHandler}>CONTINUE</button>
                                : <button className=' btn btn-lg btn-success rounded-1 border-0'  style={{ background: 'rgb(221,221,221)' }} onClick={this.onSubmitHandler} disabled={true}>CONTINUE</button>
                            }
                       
                        
                        </div>
                        <p className="ct-text">By creating an account, I accept the <b style={{color:'#151616'}}>Terms & Conditions & Privacy Policy</b></p>
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

const mapDispatchToProps = (dispatch) => {
    return { 
        signUp: (req_data) => dispatch(actionCreators.signUp(req_data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);