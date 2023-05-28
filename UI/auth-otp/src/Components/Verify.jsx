import React, { useState } from 'react';
import axios from 'axios';


const Verify = () => {

    const [otp, setOTP] = useState('');
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the OTP to the backend for verification
      await axios.post('http://localhost:5000/verify-otp', { otp }); // Replace '/verify-otp' with the appropriate backend endpoint

      window.location.replace('/welcome')
    } catch (error) {
     alert('invalid OTP')
    }
  };

  return (
<div className="container-fluid" width="300px" style={{maxWidth:"1000px"}}>
<form onSubmit={handleSubmit} style={{marginLeft:"500px", marginTop:"200px", backgroundColor:'darkgray', padding:"15px", borderRadius:"10px"}}>
<div style={{display:'flex', justifyContent:'center', marginBottom:"5px"}}><h2>OTP VERIFICATION</h2></div>
  <div className=" hi">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter OTP </label>
    <input type="text" className="form-control" value={otp} onChange={(e) => setOTP(e.target.value)} required/>
    <div className="form-text"><p>We'll never share your email with anyone else.</p></div>
  </div>
  <button type="submit" className="btn" style={{backgroundColor:"darkgreen", borderRadius:"10px",padding:"7px 15px", color:"white"}}>Verify</button>
</form>
  </div>
  )
}

export default Verify