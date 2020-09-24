import React, {Component} from 'react';
// Styles
import styles from './styles.css';
// Questions data
import questions from './data';
// Components
import QuestionArea from './questionArea';
import Progress from './progress';
import AnswerArea from './answerArea';

import shuffle from './shuffle';

const initialState = {
  questionSet: [

    {
       id: 0,
       question: '',
       answerChoices: [
          {
             id: '',
             choice: '',
             isCorrect: false
          },
          {
             id: '',
             choice: '',
             isCorrect: true
          },
          {
             id: '',
             choice: '',
             isCorrect: false
          },
          {
             id: '',
             choice: '',
             isCorrect: false
          }
       ]
    }],
  questionCount: 0,
  inProgress: false,
  quizStage: 'intro',  //'intro', 'playing' or 'end'
  score: 0
}


class App extends Component {
  constructor(props){
    super()

    this.state = initialState;
  }

  //User clicks start button
  clickStart = () => {
    console.log('start button clicked');

    let shuffledQuestions = shuffle(questions);
    //Shuffle questions

    // console.log(shuffledQuestions);

    this.setState({
      questionSet: shuffledQuestions,
      inProgress: true,
      quizStage: 'playing'
    })
  }





  render(){

    return (
      <div className="App">
    
        <div className = 'container'>

           <QuestionArea 
            quizStage = {this.state.quizStage}
            currentQuestion = {this.state.questionSet[this.state.questionCount]}
            questionCount = {this.state.questionCount}/>

          <AnswerArea
            quizStage = {this.state.quizStage}
            questionCount = {this.state.questionCount}
            clickStart = {this.clickStart}
            choices = {this.state.questionSet[this.state.questionCount].answerChoices}

          />

          <Progress 
            inProgress = {this.state.inProgress}
            questionCount = {this.state.questionCount}
          />

        </div>
      </div>
    );
  }
}

export default App;
