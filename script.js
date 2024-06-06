const input = prompt(
  'Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math'
);

let question;
let answer;

switch (+input) {
  case 1:
    question = 'რა არის  typeof(5)?';
    answer = 'number';
    break;
  case 2:
    question = 'შეიძლება თუ არა let-ის რედეკლალირება';
    answer = 'yes';
    break;
  case 3:
    question = 'question =  "რას აბრუნებს console.log(Math.floor(2.1))';
    answer = 'ori';
    break;
  default:
    alert('Invalid input');
}

let userAnsw = prompt(question);

let result = userAnsw.toLowerCase() === answer ? 'correct' : 'wrong';

alert(result);
