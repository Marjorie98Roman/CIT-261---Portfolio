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


function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}


function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

ask(name){
    console.log('ask() invoked');
    if(this.questions.length > 0) {
        shuffle(this.questions);
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
}

resetForm(){
    this.response.answer.value = '';
    this.response.answer.focus();
}
    
ask(name){
    console.log('ask() invoked');
    if(this.questions.length > 2) {
        shuffle(this.questions);
        this.question = this.questions.pop();
        const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
        shuffle(options);
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        view.render(view.response,view.buttons(options));
    }
    else {
        this.gameOver();
    }
}

check(event){
    console.log('check(event) invoked');
    const response = event.target.textContent;
    const answer = this.question.realName;
    if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
    } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    this.ask();
}




























