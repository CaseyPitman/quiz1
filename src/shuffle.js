//This module uses the Fisher-Yates algorithm to randomly shuffle an array.


let shuffle = (array) =>{

   for (let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }

   return array;
}

export default shuffle;