// This module renders the area containing the answer choices and the final score

import React from 'react';

//Content for this component contextually rendered dependent on stage of game.
import StartButton from './startButton'
import Choices from './choices';
import Score from './score';
import shuffle from './shuffle'


let AnswerArea = (props) => {

   //Render answer choices
   let renderChoice = (choice) => {
      return <Choices 
               choice = {choice.choice}
               key = {choice.id}
               id = {choice.id} 
               isCorrect = {choice.isCorrect}
               nextQuestion = {props.nextQuestion}/>
   }

   //Determines content to be displayed depening on stage of the quiz.
   let content;
   if (props.quizStage === 'intro'){
      //The game has yet to begin. Display start button.
      content = <StartButton clickStart = {props.clickStart}/>;
   } else if (props.quizStage === 'playing'){
      // The game has begun. Display answer choices.
      //Shuffle the answer choices
      let shuffledChoices = shuffle(props.choices);
      //Render the choices
      content = shuffledChoices.map(renderChoice);
   } else {
      // Game is over. Show the final score.
      content = <Score score = {props.score} reset = {props.reset}/>
   }

   return(

      <div className = 'answer-area'>
         {content}
      </div>
   )

}


export default AnswerArea;