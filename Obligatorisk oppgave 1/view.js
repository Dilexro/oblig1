view()

function view(){
    // var setColor = model.answerValue == 
    document.getElementById("app").innerHTML=`
    <div class="quiz-wrapper">   
    
    <div id="questionBox" class="question">
        Sample Question
    </div>
    <div class="options">
        ${optionView()}
    </div>
    <div class="score">
        <div class="next">
            <button id="btnNext" type="button" onclick="next()">Next</button>
        </div>
        <div class="score-card">
            SCORE: <span id="scoreCard">0</span>
        </div>
    </div>
</div>`

}
function optionView(){
    var hasClicked = model.hasAnswered == true? "":"button(this)"
    var color2= false
    var color1= false
    console.log(model.answerValue, " hei")
    let html = '<ul id="ul">'
    for(let i = 0; i < 4; i++ ){
        if(model.hasAnswered){

        
        // if((i+1 == model.questions[model.questionIndex].answer1 || i+1 == model.questions[model.questionIndex].answer2)&& color2 == false){
        //     html += `<li id="${i+1}" style="background-color: green">${model.questions[model.questionIndex].options[i]}</li>`
        //     color1= true
        // }
        // if((i+1 != model.questions[model.questionIndex].answer1 || i+1 != model.questions[model.questionIndex].answer2)&& color1 == false){
        //     html += `<li id="${i+1}" style="background-color: red">${model.questions[model.questionIndex].options[i]}</li>`
        //     color2= true
        // }
        //     // html += `<li id="${i+1}" class="${color}" onclick="${hasClicked}">${model.questions[model.questionIndex].options[i]}</li>`  
        //     // i++
        }
        else{
        html += `<li id="${i+1}" class="" onclick="${hasClicked}">${model.questions[model.questionIndex].options[i]}</li>`
            }
        }
    }
    html += "</ul>"
    return html
}