ask(){
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
    const response = prompt(question);
    this.check(response);
},
check(response){
    const answer = this.question.realName;
    if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        alert('Correct!');
        this.score++;
        view.render(view.score,this.score);
    } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
    }
},
gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
},
show(element){
    element.style.display = 'block';
},
hide(element){
    element.style.display = 'none';
}

start(quiz){
    this.score = 0;
    this.questions = [...quiz];
    this.ask();
}

ask(name){
    if(this.questions.length > 0) {
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
    }
    else {
        this.gameOver();
    }
}

view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);

check(event){
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
    } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
}
this.ask();
},

setup(){
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
    this.resetForm();
}

resetForm(){
    this.response.answer.value = '';
    this.response.answer.focus();
}


check(event){
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if(response === answer){
        Forms 319
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
    } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    view.resetForm();
    this.ask();
}

start(quiz){
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.ask();
}

teardown(){
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
}


gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
}