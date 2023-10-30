var questions = [
  {
      question:"HTML stands for",
      option1:"Hyper Text markup language",
      option2:"Hyper Link markup language",
      option3:"Hyper Text makeup language",
      correctAns:"Hyper Text markup language"
  },
  {
      question:"CSS stands for",
      option1:"Cascading Style sheet",
      option2:"Cascading Styling sheet",
      option3:"Cascading super sheet",
      correctAns:"Cascading Style sheet"
  },{
      question:"In how many ways can CSS be written in?",
      option1:"1",
      option2:"2",
      option3:"3",
      correctAns:"3"
  },{
      question:"Which tag gives your the largest heading in html",
      option1:"<h6>",
      option2:"<h2>",
      option3:"<h1>",
      correctAns:"<h1>"
  },{
      question:"how many data types in js?",
      option1:"6",
      option2:"7",
      option3:"8",
      correctAns:"8"
  }
  ,{
      question:"how many days in febuary",
      option1:"30",
      option2:"28",
      option3:"29",
      correctAns:"28"
}];
          

      var Question = document.getElementById("Questions");
      var opt1 = document.getElementById("opt1");
      var opt2 = document.getElementById("opt2");
      var opt3 = document.getElementById("opt3");
      var index = 0;
      var score = 0;
      var getOption = document.getElementsByName("options");
      var button = document.getElementById("btn");

      function nextQuestion() {
  if (index > questions.length - 1) {
      console.log("All Questions Completed!🙂");
      displayResult();
  } else {
      Question.innerText = questions[index].question;
      opt1.innerText = questions[index].option1;
      opt2.innerText = questions[index].option2;
      opt3.innerText = questions[index].option3;
      index++;
  }

  for (var i = 0; i < getOption.length; i++) {
      if (getOption[i].checked) {
          var selectedValue = getOption[i].value;
          var selectedAns = questions[index - 1][`option${selectedValue}`];
          var correctAns = questions[index - 1]["correctAns"];
          if (selectedAns == correctAns) {
              score++;
          }
          getOption[i].checked = false;
      }
      button.disabled = true;
  }
}

function clicked() {
    button.disabled = false;
}
function displayResult() {
    var percentage = (score / questions.length) * 100;

    if (percentage >= 90) {
        Swal.fire(
            'Excellent!',
            `Your percentage is ${percentage.toFixed(2)}%. You are an expert!`,
            'success'
        );
    } else if (percentage >= 70) {
        Swal.fire(
            'Great Job!',
            `Your percentage is ${percentage.toFixed(2)}%. You have a strong knowledge.`,
            'success'
        );
    } else if (percentage >= 50) {
        Swal.fire(
            'Good Effort!',
            `Your percentage is ${percentage.toFixed(2)}%. You're on the right track.`,
            'success'
        );
    } else {
        Swal.fire(
            'Keep Learning',
            `Your percentage is ${percentage.toFixed(2)}%. You can improve your knowledge. Keep learning!`,
            'info'
        );
    }
}

      function calculatePercentage(score, totalQuestions) {
          return (score / totalQuestions) * 100;
      }

      var timer = document.getElementById("timer");
      var sec = 59;
      var min = 2; // Set minutes to 2 for a 2-minute timer
      var interval;
      
      function startTimer() {
          interval = setInterval(function () {
              timer.innerHTML = `${min}:${sec < 10 ? '0' : ''}${sec}`;
              sec--;
      
              if (sec < 0) {
                  min--;
                  sec = 59;
              }
      
              if (min < 0) {
                  clearInterval(interval); // Stop the timer when all questions are answered
                  nextQuestion(); // Move to the next question when the timer runs out
              }
          }, 1000);
      }
      
      startTimer(); // Call the startTimer function to initiate the timer
      
      // Rest of your code...
      
      var intervalCheck = setInterval(function() {
          // Timer logic here
          if (index > questions.length - 1) {
              clearInterval(intervalCheck); // Stop the timer when all questions are answered
              displayResult(); // Show the result
          }
      }, 1000);
      
