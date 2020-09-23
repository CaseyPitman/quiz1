//This module renders the progress monitor at the bottom of the quiz component

import React from 'react';

let Progress = (props) => {

   let style = '';
   if (!props.inProgress){
      // console.log('not in progress');
      style = 'none';
   } else {
      style = 'block';
   }

   const textStyle = {
      display: style
   }

   return (          
      <div className = 'progress'>
         <h4 
         className = 'progress-text'
         style = {textStyle} >Question {props.questionCount} of 20</h4>
      </div>
   )
}

export default Progress; 