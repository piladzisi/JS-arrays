var quiz = [
 ['Given and array, how do you find number of items in it?', '.length'],
 ['How do you add an item at the beginning of an array?', '.unshift'],
 ['How do you remove and item at the end of an array?', '.pop']
];
var score=0;

for(var i=0; i<quiz.length; i+=1){
 answer=prompt(quiz[i][0]);
 answer=answer.toLowerCase();
 if(answer === quiz[i][1]){
 	score +=1;
 }
}
document.write(score);