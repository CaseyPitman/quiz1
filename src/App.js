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

    this.setState({
      questionSet: shuffledQuestions,
      inProgress: true,
      quizStage: 'playing'
    })
  }

  //Function to add to score if correct and advance the quiz.
  nextQuestion = (answer) => {

    let score = this.state.score;
    let count = this.state.questionCount + 1;
    let stage = 'playing'
    //Answer is correct, add to score.
    if (answer){
      score ++;
    }

    //User has finished the quiz
    if (count === 20){
      //Shows score
      stage = 'end';
      count --;
    }
    

    //Update score, question count
    this.setState({
      score: score,
      questionCount: count,
      quizStage: stage
    })
  
  }

  reset = () => {
    console.log('click')
    this.setState({
      ...this.state = initialState
    })
  }


  render(){

    return (
      <div className="App">
    
        <div className = 'container'>

          <QuestionArea 
            quizStage = {this.state.quizStage}
            currentQuestion = {this.state.questionSet[this.state.questionCount]}
            questionCount = {this.state.questionCount}
          />

          <AnswerArea
            quizStage = {this.state.quizStage}
            questionCount = {this.state.questionCount}
            clickStart = {this.clickStart}
            choices = {this.state.questionSet[this.state.questionCount].answerChoices}
            nextQuestion = {this.nextQuestion}
            score = {this.state.score}
            reset = {this.reset}
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
