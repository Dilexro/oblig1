var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox');
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        //Model
        questions:[
            {
                q:'Hva er hovedstaden i Island?',
                options: ['Københagen', 'Reykjavik', 'Burkina Faso', 'Sofia'],
                answer1: 2
            },
            {
                q:'Hva er hovedstaden i Russland?',
                options: ['Vilnius', 'Tallinn', 'Minsk', 'Moskva'],
                answer1: 4
            },
            {   
                q:'Hvilken farge er en banan?',
                options: ['Blå', 'Rosa', 'Gul', 'Lilla'],
                answer1: 3
            },
            {
                q:'Hvilket regnestykke tilsvarer 50',
                options: ['20+30', '49+1', '30+30', '40+20'],
                answer1: 1,
                answer2: 2
            }
        ],

        //Controller
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];

            } else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if (id[id.length-1] == this.questions[this.index].answer1 || id[id.length-1] == this.questions[this.index].answer2) {
                this.score++;
                this.scoreCard();
                return true;
            } else {
                return false;
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for (let i = 0; i < ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className='';
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + "/" + this.questions.length;
        }
};

window.load=app.load();

function button(ele){
    let isAnswerCorrect = app.check(ele);

    if (isAnswerCorrect) {
        ele.className="correct";
    } else {
        ele.className="wrong";    
    }

    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
};
        //Controller
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];

            } else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if (id[id.length-1] == this.questions[this.index].answer1 || id[id.length-1] == this.questions[this.index].answer2) {
                this.score++;
                this.scoreCard();
                return true;
            } else {
                return false;
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for (let i = 0; i < ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className='';
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + "/" + this.questions.length;
        }
};

window.load=app.load();

function button(ele){
    let isAnswerCorrect = app.check(ele);

    if (isAnswerCorrect) {
        ele.className="correct";
    } else {
        ele.className="wrong";    
    }

    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
};
