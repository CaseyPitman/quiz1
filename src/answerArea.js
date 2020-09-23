// This module renders the area containing the answer choices and the final score

import React from 'react';

//Content for this component contextually rendered dependent on stage of game.
import StartButton from './startButton'
import Choices from './choices';
import Score from './score'


let AnswerArea = (props) => {


   //Method to call for content for this area
   let content;
   if (props.quizStage === 'intro'){
      //The game has yet to begin. Display start button.
      content = <StartButton/>;
   } else if (props.quizStage === 'playing'){
      // The game has begun. Display answer choices.
      content = <Choices />
   } else {
      // Game is over. Show the final score.
      content = <Score />

   }

   return(

      <div className = 'answer-area'>
         {content}
         {/* <button className = 'choice'>Choice One</button> */}
      </div>
   )

}


export default AnswerArea;