//This module contains the questions, answer choices and correct answers to the quiz.


const questions = [

   {
      id: 0,
      question: 'In what year did William the Conquerer begin the Norman Conquest of Great Britain?',
      answerChoices: [
         {
            id: '0a',
            choice: '1863 AD',
            isCorrect: false
         },
         {
            id: '0b',
            choice: '1066 AD',
            isCorrect: true
         },
         {
            id: '0c',
            choice: '1776 AD',
            isCorrect: false
         },
         {
            id: '0d',
            choice: '44 BC',
            isCorrect: false
         }
      ]
   },
   {
      id: 1,
      question: 'What landmark science fiction novel by Frank Herbert was credited as a major influence on the Star Wars films?',
      answerChoices: [
         {
            id: '1a',
            choice: 'Foundation',
            isCorrect: false
         },
         {
            id: '1b',
            choice: 'Dune',
            isCorrect: true
         },
         {
            id: '1c',
            choice: 'Stranger in a Strange Land',
            isCorrect: false
         },
         {
            id: '1d',
            choice: 'Childhood\'s End',
            isCorrect: false
         }
      ]
   },
   {
      id: 2,
      question: 'After Julius Caesar\'s murder by members of the Senate, who succeeded him as the ruler of Rome?',
      answerChoices: [
         {
            id: '2a',
            choice: 'Julia',
            isCorrect: false
         },
         {
            id: '2b',
            choice: 'Caesarion',
            isCorrect: false
         },
         {
            id: '2c',
            choice: 'Octavian',
            isCorrect: true
         },
         {
            id: '2d',
            choice: 'Gaius',
            isCorrect: false
         }
      ]
   },
   {
      id: 3,
      question: 'What 1988 debut album by the Pixies featured the songs "Gigantic" and "Where Is My Mind?"',
      answerChoices: [
         {
            id: '3a',
            choice: 'Doolittle',
            isCorrect: false
         },
         {
            id: '3b',
            choice: 'Trompe le Monde',
            isCorrect: false
         },
         {
            id: '3c',
            choice: 'Bossanova',
            isCorrect: false
         },
         {
            id: '3d',
            choice: 'Surfer Rosa',
            isCorrect: true
         }
      ]
   },
   {
      id: 4,
      question: 'Which of these colleges is not a member of the Ivy League?',
      answerChoices: [
         {
            id: '4a',
            choice: 'Providence College',
            isCorrect: true
         },
         {
            id: '4b',
            choice: 'University of Pennsylvania',
            isCorrect: false
         },
         {
            id: '4c',
            choice: 'Princeton',
            isCorrect: false
         },
         {
            id: '4d',
            choice: 'Yale',
            isCorrect: false
         }
      ]
   },
   {
      id: 5,
      question: 'At which of these fictional schools did Peter Parker attend high school?',
      answerChoices: [
         {
            id: '5a',
            choice: 'Coal Hill School',
            isCorrect: false
         },
         {
            id: '5b',
            choice: 'Rydell High School',
            isCorrect: false
         },
         {
            id: '5c',
            choice: 'Midtown High School',
            isCorrect: true
         },
         {
            id: '5d',
            choice: 'Ditko High School',
            isCorrect: false
         }
      ]
   },
   {
      id: 6,
      question: 'Which of these women has not served as Secretary of State?',
      answerChoices: [
         {
            id: '6a',
            choice: 'Hillary Clinton',
            isCorrect: false
         },
         {
            id: '6b',
            choice: 'Janet Reno',
            isCorrect: true
         },
         {
            id: '6c',
            choice: 'Condoleeza Rice',
            isCorrect: false
         },
         {
            id: '6d',
            choice: 'Madeleine Albright',
            isCorrect: false
         }
      ]
   },
   {
      id: 7,
      question: 'During most of his NBA career, Michael Jordan wore the number 23. What other number did he briefly wear?',
      answerChoices: [
         {
            id: '7a',
            choice: '45',
            isCorrect: true
         },
         {
            id: '7b',
            choice: '11',
            isCorrect: false
         },
         {
            id: '7c',
            choice: '32',
            isCorrect: false
         },
         {
            id: '7d',
            choice: '42',
            isCorrect: false
         }
      ]
   },
   {
      id: 8,
      question: 'Who assasinated Archduke Franz Ferdinand of Austria, setting in motion the events leading to World War I?',
      answerChoices: [
         {
            id: '8a',
            choice: 'Sirhan Sirhan',
            isCorrect: false
         },
         {
            id: '8b',
            choice: 'Nathuram Godse',
            isCorrect: false
         },
         {
            id: '8c',
            choice: 'Leon Czolgosz',
            isCorrect: false
         },
         {
            id: '8d',
            choice: 'Gavrilo Princip',
            isCorrect: true
         }
      ]
   },
   {
      id: 9,
      question: 'The Marvel character Matt Murdock (Daredevil) was abandoned by his mother as an infant. He encountered her years later in her capacity as a what?',
      answerChoices: [
         {
            id: '9a',
            choice: 'Social worker',
            isCorrect: false
         },
         {
            id: '9b',
            choice: 'Nun',
            isCorrect: true
         },
         {
            id: '9c',
            choice: 'Police officer',
            isCorrect: false
         },
         {
            id: '9d',
            choice: 'Lawyer',
            isCorrect: false
         }
      ]
   },
   {
      id: 10,
      question: 'The books "The Talisman" and "Black House" follow the adventures of Jack Sawyer. What author did Stephen King collaborate with on both novels?',
      answerChoices: [
         {
            id: '10a',
            choice: 'Peter Straub',
            isCorrect: true
         },
         {
            id: '10b',
            choice: 'Joe Lansdale',
            isCorrect: false
         },
         {
            id: '10c',
            choice: 'Richard Chizmar',
            isCorrect: false
         },
         {
            id: '10d',
            choice: 'Joe Hill',
            isCorrect: false
         }
      ]
   },
   {
      id: 11,
      question: 'What author wrote the travel memoir Travels with Charley: In Search of America? ',
      answerChoices: [
         {
            id: '11a',
            choice: 'Jack Kerouac',
            isCorrect: false
         },
         {
            id: '11b',
            choice: 'John Steinbeck',
            isCorrect: true
         },
         {
            id: '11c',
            choice: 'Ernest Hemingway',
            isCorrect: false
         },
         {
            id: '11d',
            choice: 'Mark Twain',
            isCorrect: false
         }
      ]
   },
   {
      id: 12,
      question: 'The Victorian British novelist Mary Ann Evans wrote under what male pen name?',
      answerChoices: [
         {
            id: '12a',
            choice: 'George Eliot',
            isCorrect: true
         },
         {
            id: '12b',
            choice: 'George Sand',
            isCorrect: false
         },
         {
            id: '12c',
            choice: 'Michael Field',
            isCorrect: false
         },
         {
            id: '12d',
            choice: 'Magnus Flyte',
            isCorrect: false
         }
      ]
   },
   {
      id: 13,
      question: 'BBC journalist and The Guardian columnist Ben Hammersley is credited with coining what modern tech term?',
      answerChoices: [
         {
            id: '13a',
            choice: 'Selfie',
            isCorrect: false
         },
         {
            id: '13b',
            choice: 'Podcast',
            isCorrect: true
         },
         {
            id: '13c',
            choice: 'Streaming',
            isCorrect: false
         },
         {
            id: '13d',
            choice: 'Emoji',
            isCorrect: false
         }
      ]
   },
   {
      id: 14,
      question: 'There are currently how many elements listed on the Periodic Table of Elements?',
      answerChoices: [
         {
            id: '14a',
            choice: '108',
            isCorrect: false
         },
         {
            id: '14b',
            choice: '115',
            isCorrect: false
         },
         {
            id: '14c',
            choice: '118',
            isCorrect: true
         },
         {
            id: '14d',
            choice: '92',
            isCorrect: false
         }
      ]
   },
   {
      id: 15,
      question: 'What modernist poet was known for poems such as "The Waste Lands" and "The Hollow Men"?',
      answerChoices: [
         {
            id: '15a',
            choice: 'Ezra Pound',
            isCorrect: false
         },
         {
            id: '15b',
            choice: 'T.S. Eliot',
            isCorrect: true
         },
         {
            id: '15c',
            choice: 'William Carlos Williams',
            isCorrect: false
         },
         {
            id: '15d',
            choice: 'Carl Sandburg',
            isCorrect: false
         }
      ]
   },
   {
      id: 16,
      question: 'Lew Alcindor is a legendary athlete better known by what name?',
      answerChoices: [
         {
            id: '16a',
            choice: 'Kareem Abdul-Jabbar',
            isCorrect: true
         },
         {
            id: '16b',
            choice: 'Muhammad Ali',
            isCorrect: false
         },
         {
            id: '16c',
            choice: 'Metta World Peace',
            isCorrect: false
         },
         {
            id: '16d',
            choice: 'Sugar Ray Robinson',
            isCorrect: false
         }
      ]
   },
   {
      id: 17,
      question: 'Who is credited with the invention of the World Wide Web?',
      answerChoices: [
         {
            id: '17a',
            choice: 'Al Gore',
            isCorrect: false
         },
         {
            id: '17b',
            choice: 'Alan Turing',
            isCorrect: false
         },
         {
            id: '17c',
            choice: 'Steve Wozniak',
            isCorrect: false
         },
         {
            id: '17d',
            choice: 'Tim Berners-Lee',
            isCorrect: true
         }
      ]
   },
   {
      id: 18,
      question: 'Who was credited with killing Billy the Kid?',
      answerChoices: [
         {
            id: '18a',
            choice: 'William H. Bonney',
            isCorrect: false
         },
         {
            id: '18b',
            choice: 'Pat Garrett',
            isCorrect: true
         },
         {
            id: '18c',
            choice: 'Henry McCarty',
            isCorrect: false
         },
         {
            id: '18d',
            choice: 'Ollie P. Roberts',
            isCorrect: false
         }
      ]
   },
   {
      id: 19,
      question: 'Jonas Salk is known for developing the first vaccine for what virus?',
      answerChoices: [
         {
            id: '19a',
            choice: 'Smallpox',
            isCorrect: false
         },
         {
            id: '19b',
            choice: 'Flu',
            isCorrect: false
         },
         {
            id: '19c',
            choice: 'Measles',
            isCorrect: false
         },
         {
            id: '19d',
            choice: 'Polio',
            isCorrect: true
         }
      ]
   },
  
   
]

export default questions;