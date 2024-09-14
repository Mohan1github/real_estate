import React from 'react'
import Footer from "../components/footer";
const About = () => {
  return (
    <div className = "about-container">
      <div className = "first-div">
          <div className="mission">
            <img src={""} alt="k"></img>
            <h2>Real estates</h2>
          <p>Beautiful houses and estate property for selling and rentals at overseas and local level with the experts</p>
          </div>
          <div  className="mission">
          <img src={""} alt="k"></img>
          <h2 >Premium houses</h2>
          <p>Premium level of houes for the sale and rental.Considerable prices for the buying and selling your property</p>
          </div>
          <div  className="mission">
          <img src={""} alt="k"></img>
          <h2>Consultancy</h2>
          </div>
      </div>
      <div className = "second-div">

      </div>
      <Footer/>
    </div>
  )
}

export default About