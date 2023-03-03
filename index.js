var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What is your name? ");



console.log("Welcome " + userName + " , Please answer the following marvel questions ");

//function 
function play(question,answer) {
  var userQuestion = readLineSync.question(question);
  if (userQuestion.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  }else{
    console.log("Wrong, The right answer is " + answer);
  }
  console.log("Current Score is ", score);
  console.log("---------------------------------");
}


var highScore = [{
  name : "Vinaykumar",
  scored: 20
},{
  name : "Soorya",
  scored: 12             
}]

var marvelQuestions = [{
  question : 
    "1. Which is the first movie in MCU? a: Spider-Man b: Iron Man c: Captain America ",
  answer : "b"
},{
  question:
    "2. Who was the villain in Avengers movie released in 2012? a: Loki b: Ultron c: Winter Soldier ",
  answer : "a"
},{
  question :
    "3. Who is the villain in Guardians of the Galaxy: Vol 1? a: Thanos b: Ronan The Accuser c : Obidiah Stane d: Yondu Udonta ",
  answer : "b"    
},{
  question :
    "4. During which war did Captain America get his superhuman abilities? a: Civil War b: World War I c: World War II d: The Cold War ",
  answer : "c"
},{
  question : 
    "5. Which of the following characters did not disappear during the ”blip”? a. Spiderman b. Black Panther c. Doctor Strange d. Rocket ",
  answer : "d"
},{
  question :
    "6. In which Marvel Phase was Ant Man introduced? a. Phase 1 b. Phase 2 c. Phase 3 d. Phase 4 ",
  answer : "b"
},{
  question :
    "7. What is Mjölnir? a. Loki’s Scepter b. Captain America’s Shield c. Winter Soldier’s Arm d. Thor’s Hammer ",
  answer : "d"
},{
  question :
    "8. What was Steven Strange’s career before he learned to use magic? a. An Accountant b. A Lawyer c. A Surgeon d. An Astronaut ",
  answer : "c"
},{
  question : 
    "9. Which actor stars as Captain America? a. Chris Pine b. Chris Pratt c. Chris Hemsworth d. Chris Evans ",
  answer : "d"
},{
  question :
    "10. Erik Kilmonger is the villain in which movie? a. Captain America: The First Avenger b. Thor c. Black Panther d. Iron Man 3 ",
  answer : "c"
},{
  question :
    "11. What is Loki’s Surname? a. Odinson b. Laufeyson c. Asgardson d. He doesn’t have a surname. ",
  answer : "b"
},{
  question : 
    "12. What type of radiation gave Bruce Banner the ability to turn into the Hulk? a. Gamma b. Infrared c. Ultraviolet d. Microwave ",
  answer : "a"
},{
  question :
    "13. What is the name of the rainbow bridge between Asgard and Earth? a. Bipass b. Bithrös c. Bifröst d. Biöss ",
  answer : "c"
},{
  question :
    "14. Who is the first avenger to meet Nick Fury? a. Captain Marvel b. Captain America c. Iron Man d. Black Widow ",
  answer : "a"
},{
  question :
    "15. Which actor plays Groot? a. John Cena b. Dwayne “The Rock” Johnson c. Vin Diesel d. James Earl Jones ",
  answer : "c"
},{
  question :
    "16. What is the name of the planet that the Soul Stone can be found on? a. Titan b. Vormir c. Morag d. Xandar ",
  answer : "b" 
},{
  question :
    "17. What are the leaders of the TVA in the Loki Series called? a. Peacekeepers b. Gatekeepers c. Stonekeepers d. Timekeepers ",
  answer : "d"
},{
  question :
    "18. Daughter name of Antman? a. Morgan b. Jane c. Cassie d. Emma ",
  answer : "c"
},{
  question :
    "19. What is Captain America’s shield made of? a. Adamantium b. Vibranium c. Promethium d. Carbonadium ",
  answer : "b"
},{
  question :
    "20. What is the real name of the Black Panther? a. T’Challa b. M’Baku c. N’Jadaka d. N’Jobu ",
  answer : "a"
}                      
]
for (var i = 0; i < marvelQuestions.length; i++) {
  play(marvelQuestions[i].question,marvelQuestions[i].answer)
}

console.log("Your final Score is ", score);
console.log("****************************");
console.log("Highest Score ")
for(var i = 0; i < highScore.length; i++){
  console.log("Name " + highScore[i].name + " Scored Value is " + highScore[i].scored);
}
console.log("Please do send ur scorescreenshot")
console.log("-------- Thank you for playing ------- ")
