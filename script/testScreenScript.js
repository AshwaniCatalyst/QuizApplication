
// To count number of times user switches window while giving test

var tabSwitched = 0;
let docTitle = document.title;
window.addEventListener("blur", ()=>{
  document.title = docTitle;
  ++tabSwitched;
});

window.addEventListener("focus", () =>{
  document.title= docTitle;
})



// -------------Test Screen--------------------------

// navbar Section
document.getElementById("welcome-user-name").innerHTML =
  sessionStorage.getItem("userName");
var startingMinutes = 5;
var time = 0;
if (!sessionStorage.getItem("time") == 0) {
  time = sessionStorage.getItem("time");
} else {
  time = startingMinutes * 60;
}

var countdownEl = document.getElementById("countdown");

initInterval = setInterval(updateCountDown, 1000);

function updateCountDown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.textContent = minutes + ":" + seconds;
  if (minutes == "00" && seconds == "00") {
    alert("timeout!!!");
    // window.location = "index.html";
    br=false;
    displayResult();
    clearInterval(initInterval);
  }
  if (!time == 0) {
    sessionStorage.setItem("time", time);
  }
  time--;
}

// ------------------------Question-Answer Section--------------------

const questionsSet = [
  {
    Id : "1",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "2",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "3",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "4",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "5",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "6",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "7",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "8",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "9",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "10",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "11",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "12",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "13",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "14",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "15",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "16",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "17",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "18",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
  {
    Id : "19",
    question: "1+1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
    userSelection : ""
  },
  {
    Id : "20",
    question: "2+2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "d",
    userSelection : ""
  },
];

var displayQuestions = document.getElementById("card-0");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const currentPageDisplay = document.getElementById("pageNumber");
const totalPages = questionsSet.length / 4;
var pageStart = 1;

var firstQuestion =0;
var lastQuestion = 4;
var numCorrect=0;
let br = false;


function storeUserInput(selectedOption, id){
  questionsSet[id-1].userSelection = selectedOption;
}

function restoreRadiobuttons()
{
  questionsSet.slice(firstQuestion, lastQuestion).forEach((currentQuestion,index)=>{

    if(currentQuestion.userSelection!="")
    {
         for(options in currentQuestion.answers)
         {
          if(options === currentQuestion.userSelection)
          {
            document.getElementById(`${currentQuestion.Id}${options}`).checked = true;
          }
         }
    }
  })
}

function scoreCheck(){
  questionsSet.some((currentQuestion, index) =>{
    if(currentQuestion.userSelection=="" || br){
         br= true;
          return ;
    }
       else{
           
        if(currentQuestion.correctAnswer === currentQuestion.userSelection){
          ++numCorrect;
        }
       }
  })
}


function displayResult()
{
  if(time!=0){
  scoreCheck();
  if(br==false)
  {
  alert(`you got ${numCorrect} score`);
  alert(`You switched ${tabSwitched} times`);
  numCorrect=0;
  window.location="index.html";
  }
  
  else{
    numCorrect=0;
    alert("Please Attempt All questions first");
    br=false;
  }
}
else
{
  alert(`you got ${numCorrect} score`);
  numCorrect=0;
  window.location="index.html";
}
}


function buildQuiz() {

  const questionsContent = [];
  
  questionsSet.slice(firstQuestion, lastQuestion).forEach((currentQuestion, index) => {
    const answer = [];
    for (options in currentQuestion.answers) {
      answer.push(
        `<label>
          <input type="radio" name="question${index}" id="${currentQuestion.Id}${options}" onclick="storeUserInput(value, ${currentQuestion.Id})" value="${options}">
          ${options} :
          ${currentQuestion.answers[options]}
        </label>`
      );
    }
    questionsContent.push(
      `<div class="">
        <div class="question"> Q ${index + firstQuestion + 1} : ${
        currentQuestion.question
      } </div>
        <div class="answers"> ${answer.join("")} </div><br><br>
      </div>`
    );
  });
  displayQuestions.innerHTML = questionsContent.join("");
}


function pageNumberDisplay(pageStart) {
  currentPageDisplay.innerHTML = pageStart + " / " + totalPages;
}

function buttonDisplay(){
  if(pageStart===1)
  {
    prevButton.style.visibility="hidden";
  }
  else{
    prevButton.style.visibility="visible";
  }
  if(pageStart===totalPages)
  {
    submitButton.style.visibility="visible";
    nextButton.style.visibility="hidden";
  }
  else{
    submitButton.style.visibility="hidden";
    nextButton.style.visibility="visible";
  }
}

pageNumberDisplay(pageStart);
buttonDisplay();
buildQuiz();

function showNextSlide() {
  firstQuestion+=4;
  lastQuestion+=4;
  pageNumberDisplay(++pageStart);
  buttonDisplay();
  buildQuiz();
  restoreRadiobuttons();
}

function showPreviousSlide() {
  firstQuestion-=4;
  lastQuestion-=4;
  pageNumberDisplay(--pageStart);
  buttonDisplay();
  buildQuiz();
  restoreRadiobuttons();
}

submitButton.addEventListener("click", displayResult);
nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPreviousSlide);

// function showSlide(n) {
//   var del = 0;
//   var add = 0;

//   //To remove questions from screen
//   while (del < 4) {
//     slides[currentSlide + del].classList.remove("active-slide");
//     del++;
//   }

//   // To add new questions on the screen
//   while (add < 4) {
//     slides[n + add].classList.add("active-slide");
//     add++;
//   }
//   currentSlide = n;
//   if (currentSlide === 0) {
//     prevButton.style.visibility = "hidden";
//   } else {
//     prevButton.style.visibility = "visible";
//   }
//   if (currentSlide === slides.length - 4) {
//     nextButton.style.visibility = "hidden";
//     submitButton.style.visibility = "visible";
//   } else {
//     nextButton.style.visibility = "visible";
//     submitButton.style.visibility = "hidden";
//   }
// }


// function showResults() {
//   const answerContainers = displayQuestions.querySelectorAll(".answers");

//   let numCorrect = 0;
//   var missedQuestion=0;
//   questionsSet.forEach((currentQuestion, questionNumber) => {
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//     if(userAnswer=== undefined)
//     {
//        ++missedQuestion;
//     }
//     if (userAnswer === currentQuestion.correctAnswer) {
//       numCorrect++;
//     }
//   });
//   if(missedQuestion>0 && time>0)
//   {
//     alert("Please Attempt All Questions!!!");
//     missedQuestion=0;
//     return;
//   }
//   if(time === 0 || missedQuestion===0 )
//   {
//      alert(`Window Switched : ${tabSwitched} times`);
//     alert(`You Scored : ${numCorrect} out of ${questionsSet.length}`);
//     window.location = "index.html";
//   }
  
// }