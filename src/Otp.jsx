import React, { Component } from 'react'

export class Otp extends Component{
    
   handleChange = (e)=>{
    const {name,value} = e.target
    this.setState({
      [name]: value
    })
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
       render(){
  return (
    <div>
        <h2>OTP Here...</h2>
         <form action="" onSubmit={this.onsubmitOtp}>
          <input type="number" name="otp" id="" placeholder='Enter OTP' onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
         </form>
    </div>
  )
}
}

export default Otp