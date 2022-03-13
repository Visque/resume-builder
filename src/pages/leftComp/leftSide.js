import React from 'react'

// Components
import Skills from './skills'

// CSS files
import '../static/leftSide.css'
import "../static/rightWin.css";
import '../../App.css'

//static files
import pfpImg from '../static/images/pfp.jpeg'
import emailImg from '../static/images/email.jpg'
import githubImg from '../static/images/github.jpg'
import linkedinImg from '../static/images/linkedin.jpg'
import locationImg from "../static/images/location.jpg"
import phoneImg from "../static/images/phone.jpg";

function leftSide() {
  return (
    <>
      <div className="dp-border flex">
        <img src={pfpImg} className="dp" alt="pfp" />
      </div>

      <div className="left-side-container">
        <h2>Vishnu Panicker</h2>
        <h3>Student</h3>
      </div>

      <div className="left-side-container">
        <h1 className="content-1"> OBJECTIVE </h1>
        <p>I dream to become an authority in Front-End development.</p>
        <p>
          To be in an organization which gives me an environment to develop my
          skills towards achieving my dream, is my career goal
        </p>
        <p>
          I have developed myself to be adaptable to changes and challenging
          environments.
        </p>
      </div>

      <div className="left-side-container">
        <h1 className="content-1"> SKILLS </h1>
        <div className="dp-border skills">
          <Skills />
        </div>
      </div>

      <div className="left-side-container">
        <h1 className="content-1"> Contact </h1>
        <section>
          <div className="flex contact-item">
            <img className="img" src={emailImg} alt="emailImg" />
            <a href="mailto:vishnupanickers1@gmail.com" target="_blank">
              {" "}
              vishnupanickers1@gmail.com{" "}
            </a>
          </div>
          <div className="flex contact-item">
            <img className="img" src={phoneImg} alt="phoneImg" />
            <a href="tel:9582408454" target="_blank">
              {" "}
              9582408454{" "}
            </a>
          </div>
          <div className="flex contact-item">
            <img className="img" src={linkedinImg} alt="linkedinImg" />
            <a
              href="https://www.linkedin.com/in/panickervishnu/"
              target="_blank"
            >
              {" "}
              Linkedin{" "}
            </a>
          </div>
          <div className="flex contact-item">
            <img className="img" src={githubImg} alt="githubImg" />
            <a href="https://github.com/visque" target="_blank">
              {" "}
              Github{" "}
            </a>
          </div>
          <div className="flex contact-item">
            <img className="img" src={locationImg} alt="locationImg" />
            <a
              href="https://www.google.com/maps/dir//G+Block,+I.P.Extension,+West+Vinod+Nagar,+Delhi,+110092/@28.6288458,77.3020846,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390ce4ca6b977443:0xdfee1d4bdf26274a!2m2!1d77.3106082!2d28.6281702!3e3"
              target="_blank"
            >
              {" "}
              Delhi, India{" "}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default leftSide