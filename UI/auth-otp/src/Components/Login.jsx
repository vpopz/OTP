import React, { useState } from 'react';
import axios from 'axios';



const Login = () => {
    const [email, setEmail] = useState('');
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:5000/send-otp', { email });
        console.log(email)
        window.location.replace('/verify');
      }catch (error){
        console.error(error)
      }
    };


  return (
    <div className="container-fluid" style={{ maxWidth: "1000px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <form onSubmit={handleSubmit} style={{ width: "350px", backgroundColor: "darkgray", padding: "15px", borderRadius: "10px",marginLeft:"400px" }}>
  <div className="h1"><h1>Login</h1></div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" style={{ color: "black", fontSize: "18px", marginBottom: "10px" }}>Email address  </label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ borderRadius: "5px", padding: "5px" }}
      />
      <div className="form-text" style={{ color: "white", fontSize: "14px", marginTop: "5px" }}>
        <p>We'll never share your email with anyone else.</p>
      </div>
    </div>
    <button
      type="submit"
      className="btn"
      style={{ backgroundColor: "darkgreen", borderRadius: "10px", padding: "7px 15px", color: "white", fontSize: "16px", marginTop: "10px" }}
    >
      Submit
    </button>
  </form>
</div>
  );
  };

export default Login