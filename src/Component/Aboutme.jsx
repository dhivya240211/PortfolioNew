import React from "react";
import "../Component/aboutme.css";
import image from "../assets/img/image.png/"
export default function Aboutme() {
  return (
    <div className="second" id="section2">
      <div className="contain">
        <div className="desig">
        <p className="me">About me</p></div>

        <div className="mecont">
          <div className="aboutme">
            <img
              src={image}
              alt=""
              height="300px"
              width="300px"
            />
          </div>
          <div className="dott">
          <div className="total">
          <div className="paramain">
       
            <div className="para">
              <p>
                I am Dhivya , web developer from Chennai , Tamilnadu <br />
                I have rich experience in website design and <br />
                building and customization, also <br /> I am good at WordPress.
              </p>

              <div className="btnn">
                <button>Download CV</button>
              </div>
            </div>
          </div>
         
          <div className="mainbar">
            <div className="bar">
              <p>frontend</p>
              <div className="barmain">
                <div className="barsub"></div>
              </div>
            </div>
            <div className="barone">
              <p>backend</p>
              <div className="barmain">
                <div className="barsec"></div>
              </div>
            </div>
            <div className="bartwo">
              <p>database</p>
              <div className="barmain">
                <div className="barthr"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div class="wrapper">
          <timeline class="timeline">
            <entry class="entry">
              <h2>Higher Secondary</h2>
              <info class="meta">
                
                <h4> School : St.marys matric higher secondary </h4>
                <h4>Class : 12th</h4>
                <h4>Percentage: 74%</h4>
                <h4>Passedout : 2012</h4>
              </info>
            </entry>
            <entry class="entry">
              <h2>Degree</h2>
              <info class="meta">
                
                <h4>College : Hindustan University</h4>
                <h4>Dept : B.tech(ECE)</h4>
                <h4>CGPA : 8</h4>
                <h4>Passedout : 2016</h4>
              </info>
            </entry>
          </timeline>
</div>




       
      </div>
</div>
);
}
