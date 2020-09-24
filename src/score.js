//This module renders the player's final score

import React from 'react';




let Score = (props) => {

   //Add insults/compliments conditionally


   //Handle button click

   let clickHandler = () => {
      
      props.reset();

   }



   return (
      <div className = 'score'>
         <h1 className = 'score-text'>You got {props.score/20 * 100}% correct. </h1>
         <button className = 'choice' onClick = {clickHandler}>Try Again</button>
      </div>

   )
}

export default Score;