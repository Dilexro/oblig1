//Controller
        
function button(ele){
    let isAnswerCorrect = check(ele);
    if (ele.id==model.questions[model.questionIndex].answer1) {
        model.answerValue=ele.id
    }
        
    if (isAnswerCorrect) {
        ele.className="correct";
    } else {
        ele.className="wrong";    
    }
    model.answerValue= ele;
    model.hasAnswered= true;
    view();
}

function next(){
    model.questionIndex += 1;
    model.hasAnswered= false;
    view();
};
function check(ele){
    var id=ele.id.split('');
    if (id[id.length-1] == model.questions[model.questionIndex].answer1 || id[id.length-1] == model.questions[model.questionIndex].answer2) {
        // this.score++;
        // this.scoreCard();
        return true;
    } else {
        return false;
    }
}