import React from 'react'
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Header = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate()
  const logout = async()=>{
    console.log()
    try{
      console.log("Logout button clicked")
      
      const logout = await axios.get("http://localhost:5000/api/v1/user-auth/logout")
      if(logout){
        navigate("/sing-in")
        console.log("logged out successfully!")
      }
      else{
      console.log("something went wrong in logging out");
    }
  }
    catch(err){
      console.log("Error:",err)
    }
  }
  return (
    <div className="header">
        <div>
            <span style={{fontSize:"2rem",color:"grey"}}>Code8</span>
            <span style={{fontSize:"2rem",color:"navy"}}>Estate</span>
        </div>
    <form>
        <input type="text" placeholder='Search....' className='input-al'>
        </input>
        <FaSearch style={{marginLeft:"-2rem", alignItems:"center"}}/>
    </form>
    <ul>
        <Link style={{textDecoration:"none"}} to="/"><li>Home</li></Link>
        <Link style={{textDecoration:"none"}} to="/about"><li>About</li></Link>
        {!currentUser ?
        (<Link style={{textDecoration:"none"}} to="/login"><li><>Login</></li></Link>):(<><li>
        <button style ={{height:"2rem",width:"4rem",textAlign:"center",borderRadius:"5px",border:"none",color:"white",backgroundColor:"black",cursor:"pointer"
        }}onClick={()=> logout()}>Logout</button></li></>)
      }
    </ul>
    <div className="userprofile">
      <img src ="" alt ="img" ></img>
    </div>
    </div>
    
  )
}

export default Header