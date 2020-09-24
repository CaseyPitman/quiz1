//This module uses the Fisher-Yates algorithm to randomly shuffle an array.



let shuffle = (array) =>{

   for (let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }

   //Dummy question at the end will ensure proper end of game
   let dummy = {
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
   }

   // array = array.push(dummy);
   return array;
}

export default shuffle;