import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  signinstart,
  signinsuccess,
  signinfailed,
} from "../redux/user/userSlice";
export const Signin = () => {
  const { loading, error } = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(null);
  const [empty, setEmpty] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(currentUser);
    try {
      dispatch(signinstart());
      if (email.length < 0 || password.length < 0) {
        setEmpty((prev) => !prev);
        console.log("Empty informations");
        return;
      } else {
        const res = await axios.post(
          "http://localhost:5001/api/v1/user-auth/sign-in",
          { email, password }
        );
        console.log(res);
        if (!res) {
          dispatch(signinfailed(res.error));
          setFailed(res.error);
          console.log(res);
          console.log(error);
          return;
        } else {
          dispatch(signinsuccess(res.user));
          navigate("/");
          console.log("logged in !");
        }
      }
    } catch (err) {
      dispatch(signinfailed(err.message));
      console.log(err.message);
      setFailed(err.message);
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <div className="input-sign-up">
        <form onSubmit={handlesubmit}>
          <h1 style={{ textAlign: "center" }}>Welcome back again., Login</h1>
          <label for={email} style={{ marginLeft: "-22rem", color: "purple" }}>
            Email
          </label>
          <input
            type="text"
            value={email}
            placeholder=" Name or email "
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <label
            for={email}
            style={{ marginLeft: "-20.5rem", color: "purple" }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            placeholder=" Password.."
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          {empty ? (
            <>
              <p style={{ color: "red" }}> Fields must not be empty</p>
            </>
          ) : (
            ""
          )}
          <button type="submit" className="signup-btn">
            {loading ? "Processing..." : "Login"}
          </button>
          {failed ? (
            <>
              <p
                style={{
                  color: "red",
                  marginLeft: "-13rem",
                  marginTop: "-1rem",
                }}
              >
                Something went wrong..
              </p>
              <br></br>
            </>
          ) : (
            ""
          )}
          <div
            className="likefooter"
            style={{ position: "absolute", marginTop: "21rem" }}
          >
            <p>Not have Account ? </p>
            <a href="/sign-up" style={{ color: "blue" }}>
              createnew!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
