import React from 'react'

// Components
import WorkExp from './workExp'
import Education from './education'
import PersonalProject from './personalProject'

// CSS files
import '../../App.css'
import '../static/rightSide.css'
import '../static/rightWin.css'

//static files

function RightSide() {
  return (
    <>
      <div className="right-side-container">
        <h1 className="content-1"> WORK EXPERIENCE </h1>
        <WorkExp />
      </div>
      <div className="right-side-container">
        <h1 className="content-1"> Education </h1>
        <Education />
        <Education />
        <Education />
      </div>
      <div className="right-side-container">
        <h1 className="content-1"> Personal Projects </h1>
        <PersonalProject />
        <PersonalProject />
        <PersonalProject />
      </div>
    </>
  );
}

export default RightSide