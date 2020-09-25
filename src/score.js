//This module renders the player's final score

import React from 'react';




let Score = (props) => {

   //Add insults/compliments conditionally


   //Handle button click

   let clickHandler = () => {
      props.reset();
   }

   let scoreBurn = (score) => {

      let burn = '';
      if(score === 0){
         burn = 'Captain, we are detecting no signs of intelligent life.'
      }
      else if (score <=5){
         burn = 'Ah, jeez...no. Just no.';
      } else if (score > 5 && score <= 10){
         burn = 'I mean, it\'s pretty bad. Could be worse, but not by much.';
      } else if (score > 10 && score <= 15){
         burn = 'I wouldn\'t say you are a complete moron.';
      } else if (score > 15 && score <= 19){
         burn = 'Maybe there is hope for humanity. Not bad.';
      } else if (score === 20){
         burn = 'Okay. I\'m impressed. You are a legend. Well done.';
      }
      return burn;
   }

   return (
      <div className = 'score'>
         <h1 className = 'score-text'>You got {props.score/20 * 100}% correct. </h1>
   <h2 className = 'burn'>{scoreBurn(props.score)}</h2>
         <button className = 'choice' onClick = {clickHandler}>Try Again</button>
      </div>

   )
}

export default Score;