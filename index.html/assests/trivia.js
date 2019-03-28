var options = [{
    question: "In the Lion King, where does Mufasa and his family live?"
}, {
    question:"What town is the setting for the Disney Movie “The Love Bug?”"
}
//create questions, answers and correct answers
//nested loop to generate questions + radio
//check for radio buttons input "checked" set variable to equal
//seperate loop to check
// options.questions[ctr].correctAnswers[i] === input
]

var correctAnswers =0;

var timerRunning = false;

$(document).ready(function(){

    $("#start").click(function(){

        var number = 60;

        $("#start").on("click", start);  
        $("#done").on("click", done);  
        $("#reset").on("click", reset);  

        //fucntion to check if the answers are correct

        function start(){

            counter = setInterval(timer, 1000);

            timerRunning = true;

            showMe(".question");
            showMe(".answers");
            showMe("#done");
            hideMe("#start");
            hideMe(".rules");
            hideMe("#reset");
            hideMe("#results");
        }

        function timer(){

            // decreases the timer by 1
          number-- 

          $("#time-remaining").html("<h3>" + number + "</h3>" );

          if (number === 0){

            alert("Lets See How You Did!!")

             // calls the stop function
            stop();
          }
        }

        function stop(){

            timerRunning = false;

            // stops the timer
            clearInterval(counter); 

            $("#correct").show();
            $("#reset").show();
            $(".question").hide();
            $(".answers").hide();
            $("#done").hide();
        }

        function done(){  

            // set number equal to 0 number will show -1 so 1 has to be declared or it will keep going negative
            number = 1; 
            
            clearInterval(counter);
            timer();
        }
    
        function reset(){
            number = 60;
            correctAnswers = 0;
            start();
        }
    
        function hideMe(i) {
            $(i).hide();
        }
        function showMe(i) {
            $(i).show();
        }                                                               
    
    // calls the start function
          start(); 
      });
    });
     