import React from 'react'
import './static/rightWin.css'

import LeftSide from './leftComp/leftSide'
import RightSide from './rightComp/rightSide'

function rightWin() {
  return (
    <div className="rightWin">
      <div className="resume flex">
        <div className="leftSide">
          <LeftSide />
        </div>
        <div className="rightSide">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default rightWin