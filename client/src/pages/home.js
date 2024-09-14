import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const [data, setData] = useState([]);
  const sendingreq = () => {
    console.log("Request sent");
  };
  const getallproperty = async () => {
    try {
      const property = await axios.get(
        "http://localhost:5001/api/v1/property/get-listings/"
      );
      if (property) {
        setData(property.data.data);
        console.log(property);
      } else {
        console.log("There something went wrong in taking the data");
      }
    } catch (err) {
      console.log("Soemthing went wrong:", err);
    }
  };
  const showproperty = async (id) => {
    console.log(id);
    try {
    } catch (err) {}
  };
  useEffect(() => {
    getallproperty();
  }, []);
  return (
    <>
      <div className="home-page">
        <h2 style={{ marginLeft: "1rem" }}>Top rated</h2>
        <div className="top-property">
          {data &&
            data.map((data) => (
              <div className="property-card" key={data._id}>
                <div className="card-header">
                  <img
                    src={data.imageurls}
                    style={{
                      height: "8rem",
                      width: "15rem",
                      borderRadius: "8px",
                    }}
                    slt="img"
                  ></img>
                </div>
                <div className="card-body">
                  <h3 style={{ marginLeft: "3px", marginTop: "-0.5rem" }}>
                    {data.name}
                  </h3>
                  <p style={{ marginTop: "-1rem", marginLeft: "3px" }}>
                    {data.type}
                  </p>
                  <p style={{ marginLeft: "5px", marginTop: "-1rem" }}>
                    {data.address}
                  </p>
                  <div className="price-area" style={{ marginTop: "-2rem" }}>
                    <p style={{ color: "grey" }}>Reg price:</p>
                    <p style={{ color: "purple", marginLeft: "-3rem" }}>
                      {data.regularPrice}$
                    </p>
                  </div>
                  <Link to={`/propertydetails/${data._id}`}>
                    {" "}
                    <button
                      style={{
                        height: "2rem",
                        width: "10rem",
                        backgroundColor: "blue",
                        marginTop: "-2rem",
                        marginLeft: "2rem",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                      onClick={() => showproperty(data._id)}
                    >
                      view
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="content-div">
          <div className="content">
            <h1>Get started with us!</h1>
            <h3>Buy your dream house.. </h3>
          </div>
          <div className="req-div">
            <h2>Want to sell your own property?</h2>
            <p style={{ textAlign: "center" }}>
              send your request by clicking the button
            </p>
            <button type="submit" onClick={() => sendingreq()}>
              Send{" "}
            </button>
          </div>
          <div className="grid-bento">
            <div className="bent1">i</div>
            <div className="bent2">i</div>
            <div className="bent3">j</div>
            <div className="bent4">i</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
