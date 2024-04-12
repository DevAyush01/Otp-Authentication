import React, { Component } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";
 import Firebase from './Firebase'
import { useNavigate } from 'react-router-dom';
import Otp from './Otp';

 const notify = () => toast('Otp Sent Successfully...');
 export class App extends Component {
   
  // navigator = ()=>{
  //   const navigate = useNavigate();
  //   navigate(<Otp/>)
  // }

   handleChange = (e)=>{
    const {name,value} = e.target
    this.setState({
      [name]: value
    })
   }
   configureCaptcha = ()=>{
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log('re-captcha varified')
      },defaultCountry: "IN"
    });
   }
   onSignInSubmit = (e)=>{
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log('Otp sent Check it..')
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
        });
   }

   onsubmitOtp = (e)=>{
    e.preventDefault()
    const code = this.state.otp;
    console.log(code)
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user))
  alert('User Verified')
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
   }
  render() {
    return (
      <div>
           <div>

         <h2>Login Form</h2>
         <form action="" onSubmit={this.onSignInSubmit }>
         <div id='sign-in-button'></div>
          <input type="number" name="mobile" id="" placeholder='Enter Mobile' onChange={this.handleChange}/>
          <button type='submit' onClick={notify} >Submit</button>
          <Toaster 
           toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: 'green',
              color: '#fff',
            },
        
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'green',
              },
            },
          }}/>
         </form>

         {/* <h2>OTP Here...</h2>
         <form action="" onSubmit={this.onsubmitOtp}>
          <input type="number" name="otp" id="" placeholder='Enter OTP' onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
         </form> */}
         <Otp/>
    </div>
      </div>
    )
  }
}

export default App