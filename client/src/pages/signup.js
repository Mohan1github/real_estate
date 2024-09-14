import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const send = await axios.post("http://localhost:5001/api/v1/user-auth/sign-up", { name, email, password })
      if (send) {
        setLoading(false)
        console.log(send);
        console.log(name, email, password);
        setStatus(true);
        console.log("User created successfully")
      }
      else {
        setLoading(false)
        console.log("Something went wrong")
      }
    }
    catch (err) {
      setLoading(false)
      console.log(err)
    }
  }
  return (
    <div className="signup">
      <div className="input-sign-up">
        <form onSubmit={handlesubmit}>
          <h1 style={{ textAlign: "center" }}>Join with us !..Sign up</h1>
          <label for={email} style={{ marginLeft: "-22rem", color: "purple" }}>Name</label>
          <input type="text" value={name} placeholder=' Name.. ' onChange={(e) => setName(e.target.value)}></input>
          <label for={email} style={{ marginLeft: "-22rem", color: "purple" }}>Email</label>
          <input type="email" value={email} placeholder=' Email..' onChange={(e) => setEmail(e.target.value)}></input>
          <label for={email} style={{ marginLeft: "-20rem", color: "purple" }}>Password</label>
          <input type="password" value={password} placeholder=' Password..' onChange={(e) => setPassword(e.target.value)}></input>
          <button type="submit" className='signup-btn' >{loading ? "Loading..." : "sign up"}</button>
        </form>
        {
          status ? (<><p style={{ color: "green" }}>Account created successfully!</p></>) : ("")
        }
        <p style={{ marginLeft: "-12rem" }}>Already have an account?</p>
        <button type="submit" className='signup-btn-new' onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  )
}
export default Signup