import React from 'react'
import "../Component/skills.css"
import logoreact from "../assets/img/logoreact.webp"
import python from "../assets/img/python.png"
import logopyth from "../assets/img/logopyth.jpg"
import sql from "../assets/img/sql.png"
import htmlnew from "../assets/img/htmlnew.jpg"
import cssnew from "../assets/img/cssnew.jpg"
import Bootstrap from "../assets/img/Bootstrap.png"

import visualstudio from "../assets/img/visualstudio.png"
import jsnew from "../assets/img/jsnew.jpg"
import newgit from "../assets/img/newgit.png"
import newreact from "../assets/img/newreact.png"
export default function Skills() {
  return (
    <div className="bag" id='section3'>
      <div className='lag'>
        <h1 >Skills</h1></div>



      <div class="acontainer">
        <div class="acard">
          <div class="face face1">
            <div class="content">
              <img src={logoreact} alt="" width={200} height={200} />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h5>FrontEnd</h5>
              <p>A frontend developer using ReactJS builds dynamic and interactive user interfaces for web applications.ReactJS,a JavaScript library,allows creation of reusable UI components,This developer focuses on building responsive,fast,and scalable user experiences.</p>
            </div>
          </div>
        </div>
        <div class="acard">
          <div class="face face1">
            <div class="content">
              <img src={python} width={200} height={200} />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h5>Backend</h5>
              <p>A backend developer using Django a high-level Python framework This developer handles database, server logic,and API integrations, ensuring the application's core functionality and performance</p>
            </div>
          </div>
        </div>
        <div class="acard">
          <div class="face face1">
            <div class="content">
              <img src={sql} alt="" width={200} height={200} />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h5>DataBase</h5>
              <p>Using SQL in MySQL involves managing and manipulating relational databases. SQL is used for querying, updating, and organizing data.Together, they ensure efficient data storage, retrieval, and management for applications.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='stil'>
        <div className="logmain">
          <div className="memy">
            <h1>My Tech Knowledge</h1>
          </div>
          <div className="logsub">
            <div className="logoimg">
              <a
                href="#"
                target="_blank"
              >
                <img
                  src={htmlnew}
                  alt=""
                  width={90}
                  height={90}
                />
              </a>
            </div>
            <div className="logoimg">
              <a
                href="#"
                target="_blank"
              >

                <img
                  src={cssnew}
                  alt=""
                  width={90}
                  height={90}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="#" target="_blank">

                <img
                  src={jsnew}
                  alt=""
                  width={90}
                  height={90}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="#" target="_blank">

                <img
                  src={Bootstrap}
                  alt=""
                  width={90}
                  height={90}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="#" target="_blank">

                <img
                  src={newreact}
                  alt=""
                  width={90}
                  height={80}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="#" target="_blank">

                <img
                  src={logopyth}
                  alt=""
                  width={90}
                  height={90}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="#" target="_blank">

                <img
                  src={visualstudio}
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="#" target="_blank">

                <img
                  src={newgit}
                  alt=""
                  width={100}
                  height={100}

                />
              </a>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}