import React from "react";
import "./About.css";
import img1 from "../Images/bilal-removebg-preview.png"


class About extends React.Component {
  render() {
    return (
      <>
        <section class="about-us">
          <div class="about">
            <img src={img1} class="pic" />
            <div class="text">
              <h2>About Us</h2>
<p>
Our KBH Shoe Web

Welcome to our KBH shoe web, where we're dedicated to providing you with the finest footwear options to suit your style, comfort, and performance needs. We understand that shoes are more than just accessories; they are an essential part of your daily life, helping you move confidently and express your unique personality. That's why we're passionate about curating a diverse range of high-quality shoes that cater to all tastes and preferences.</p>



             
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default About