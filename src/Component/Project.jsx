import React from 'react'
import "./project.css"
import calcu from "../assets/img/calcu.jpg"
import blogg from "../assets/img/blogg.jpg"
import figmaimg from "../assets/img/figmaimg.jpg"
import birthdayimg from "../assets/img/brthdayimg.jpg"
import todoimg from "../assets/img/todoimg.jpg"
import shopping from "../assets/img/shopping.jpg"
function Project() {
  return (

    <div className='mond' id='section4'>

      <div className='container'>

        <div>
          <h2 className='down'>PROJECTS</h2>
        </div>
        <br /><br /><br /><br /><br />
        <div className='row'>
          <div className='col-4'>
            <div className="card">
              <img src={calcu} className="card-img-top" alt="..." height={180} />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">A basic calculator created with HTML, CSS, and js.It handles the calculations and user interactions, resulting in a functional and interactive calculator interface.</p>

              </div>
            </div>

          </div>
          <div className='col-4'>
            <div className="card">
              <img src={blogg} className="card-img-top" alt="..." height={180} />
              <div className="card-body">
                <h5 className="card-title">Blogger</h5>
                <p className="card-text"> A blogger website crafted with HTML and CSS features a clean layout with sections like header, main content area for<br></br>
                  posts, sidebars,and a footer.</p>

              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className="card">
              <img src={figmaimg} className="card-img-top" alt="..." height={180} />
              <div className="card-body">
                <h5 className="card-title">Figma</h5>
                <p className="card-text">Figma is a popular design tool for creating user interfaces. By using HTML, CSS, and Bootstrap, you can translate Figma designs into web pages efficiently.





                </p>

              </div>
            </div>
          </div>


        </div>
        <br />

        <div className='row'>

          <div className='col-4'>
            <div className="card">
              <img src={birthdayimg} className="card-img-top" alt="..." height={180} />
              <div className="card-body">
                <h5 className="card-title">Birthday List</h5>
                <p className="card-text">A birthday card built with HTML, CSS, and React.js offers a dynamic and interactive way to send personalized greetings.</p>

              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className="card">
              <img src={todoimg} className="card-img-top" alt="..." height={180} />
              <div className="card-body">
                <h5 className="card-title">Todo-List</h5>
                <p className="card-text">A todo-list made with HTML, CSS, and React.js provides a <br></br>user-friendly way to organize tasks.





                  .</p>

              </div>
            </div>
          </div>


          <div className='col-4'>
            <div className="card">
              <img src={shopping} className="card-img-top" alt="..." height={180} />
              <div className="card-body">
                <h5 className="card-title">Shopping Card</h5>
                <p className="card-text">A shopping cart developed with HTML, CSS, and React.js<br></br> streamlines online shopping experiences.





                  .</p>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
export default Project