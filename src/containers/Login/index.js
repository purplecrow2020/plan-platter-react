import React, { Component } from 'react'
import LoginImg from '../../images/login-img.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import  { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'mobile': '',
            'password': '',
            isSubmitButtonEnabled: false
        }
    }



    handleSubmitButtonEnabler = () =>  {
        if (this.state.mobile.length > 0 && this.state.password.length > 0) {
            this.setState({
                isSubmitButtonEnabled: true
            })
        }  else {
            this.setState({
                isSubmitButtonEnabled: false
            })
        }
    }

    // onChangeHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },() => {
            
            this.handleSubmitButtonEnabler();
        });
    }

    onSubmitHandler = () => {
        this.props.login({
            mobile: this.state.mobile,
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
    
    render() {
        return (
            this.props.isAuthenticated
            ? <Navigate to="/home" />
            :
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
                            <input type="email" class="form-control rounded" id="floatingInput" placeholder="91*******-" name="mobile" onChange={this.onChangeHandler} />
                            <label for="floatingInput" className='ct-text'>Phone Number</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="password" class="form-control rounded-1"   id="floatingPassword" placeholder="****" name="password" onChange={this.onChangeHandler} />
                            <label for="floatingPassword" className='ct-text'>Password</label>
                        </div>
                        <div className='d-grid mt-3 mb-2'>
                        {/* <button className=' btn btn-lg btn-success rounded-0 border-0'  style={{ background: '#916BBF' }} onClick={this.onSubmitHandler}>LOGIN</button> */}
                        {
                                this.state.isSubmitButtonEnabled 
                                ? <button className=' btn btn-lg btn-success rounded-1 border-0'  style={{ background: '#916BBF' }} onClick={this.onSubmitHandler}>CONTINUE</button>
                                : <button className=' btn btn-lg btn-success rounded-1 border-0'  style={{ background: 'rgb(221,221,221)' }} onClick={this.onSubmitHandler} disabled={true}>CONTINUE</button>
                        }
                        </div>
                        <p className="ct-text">By click on login, I accept the <b style={{color:'#151616'}}>Terms & Conditions & Privacy Policy</b></p>
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
        login: (req_data) => dispatch(actionCreators.login(req_data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);