import React from 'react'
import './static/rightWin.css'

import LeftSide from './leftComp/leftSide'
import RightSide from './leftComp/rightSide'

function rightWin() {
  return (
    <div className="rightWin">
      <div className="resume flex">
        <div className="leftSide">
          <LeftSide />
          <RightSide />
        </div>
        <div className="rightSide">

        </div>
      </div>
    </div>
  );
}

export default rightWin