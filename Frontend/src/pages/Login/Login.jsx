import React from 'react'
import './Login.css'
import logo from '../../assets/distance-learning.png'

function Login() {
  return (
    <>
      <div className="containerr h-screen">
        <h1 id='heading'>Login Here</h1>
        <div className="box">
            <div className="icon">
                <img id='iconl' src={logo} alt="logo" />
            </div>
            <div className="userna align">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='UserName'/>
            </div>
            <div className="passwor align">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Password'/>
            </div>
            <div className="remember">
                <div className="remMe">
                    <input type="checkbox" name="check" id="checked"/>
                    <label className='fontsz' htmlFor="checked">Remember Me</label>
                </div>
                <div className="forgot">
                    <a href="/forgotpassword"><span>Forgot Password?</span></a>
                </div>
            </div>
            <div className="logBut">
                <button type='submit' id='button'>Login</button>
            </div>
            <div className="reg">
                <span className='fontsz'>Don't you have an account?<a href="/signup" className='regis'>Register Now!</a></span>
            </div>
            <div className="otherReG">
                <h2>_________ or _________</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
