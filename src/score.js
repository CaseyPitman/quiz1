//This module renders the player's final score

import React from 'react';




let Score = (props) => {


   return (
      <div className = 'score'>
         <h1 className = 'score-text'>Score Goes Here</h1>
         <button className = 'choice'>Try Again</button>
      </div>

   )
}

export default Score;