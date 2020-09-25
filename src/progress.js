//This module renders the progress monitor at the bottom of the quiz component.

import React from 'react';

// Progress bar
import ProgressBar from './progressBar';

let Progress = (props) => {

   //Progress monitor not showing until quiz starts.
   let style = '';
   if (!props.inProgress){
      style = 'hidden';
   } else {
      style = 'visible';
   }

   const textStyle = {
      visibility: style
   }

   //Renders the dynamic progress bar. 
   let renderProgressBar = (id) => {
      //Default class name, sets size and width of bar pieces. 
      let className = 'progress-bar';
      //Sets pieces of the bar to new color as quiz advances. 
      if (id < props.questionCount || props.quizStage === 'end' ){
         className += ' answered';
      } 
      else {
         className += ' not-answered';
      }

      return   <ProgressBar 
               key = {id}
               id = {id}
               className = {className}
               style = {style}/>
   }

   //Updates the progress bar
   let progressBar = [];
   for (let i = 0; i < 20; i++){
      progressBar.push(renderProgressBar(i));
   }

   return (          
      <div className = 'progress' style = {textStyle}>
         <h4 className = 'progress-text' style = {textStyle} >Question {props.questionCount + 1} of 20</h4>
         {progressBar}
      </div>
   )
}

export default Progress; 