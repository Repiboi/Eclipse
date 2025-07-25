import React from 'react'
import {Link} from 'react-router-dom' 
import './home.css'
function home() {
  return (
    <div>
            <div className="sidebar">
        
                <div className="sidebar_image">
                    <h1 className='Sign_h1'> Eclipse v1.0</h1>
                           <img className='Sign_Image'  src="https://www.shutterstock.com/image-vector/business-discussion-vector-cartoon-illustration-600nw-2470502339.jpg" alt="" />
                </div>
                 <div className="form-box">
      <form className="form">
        <span className="title">Welcome to Eclipse</span>
        <span className="subtitle">Sign Up</span>
        <div className="form-container">
          <input type="text" className="input" placeholder="Company Name" />
          <input type="text" className="input" placeholder="Full Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div className="form-section">
        <p className='sign_p'>
          I already have an account?<Link className='Login' to='/Login'> Sign In</Link>
        </p>
      </div>
    </div>
                 
            </div>
    </div>
  )
}

export default home