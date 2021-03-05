// console.log('sheet detected');
let questionNum = document.querySelector('.title');
let question = document.querySelector('.question');
let optionContainer = document.querySelector('.option-container');
let nextBtn = document.querySelector('.single-sheet button');
let totalQuestion;
let counter =0;
let correctCounter=0, wrongCounter = 0;
let availableData = [];
let availableOptions = [];
let currentQuestion;
const setAvailableData = () => {
    const totalQuestion = data.length;
    for(let i=0; i<totalQuestion; i++){
        // console.log(data[i])
        availableData.push(data[i])
    }
    // console.log(availableData)
}

const getNewData = () => {
    //result sheet
    numResult.innerHTML = data.length;
    //
    const availableDataNum = availableData.length;
    totalQuestion = 'Question '+ (counter + 1) + ' of ' + data.length;
    questionNum.innerHTML = totalQuestion;
    //set random question
    let randomQuestion = availableData[Math.floor(Math.random()*availableDataNum)];
    currentQuestion = randomQuestion;

    let currentQuestionTitle = currentQuestion.question;
    question.innerHTML= currentQuestionTitle;
    //Dont repeat question
    let currentQuestionNum = availableData.indexOf(currentQuestion);

    availableData.splice(currentQuestionNum,1)
    counter++

    //set options

    
    let currentQuestionOptions = currentQuestion.options;
    for(let i=0; i<currentQuestionOptions.length; i++){
        availableOptions.push(i)
    }

    optionContainer.innerHTML='';

    let animation = 0.2;
    //randomOption隨機產生陣列中其中一個數字，並刪掉，所以隨機呈現也不會重複
    for(let i=0; i<currentQuestionOptions.length; i++){
        let randomOption = availableOptions[Math.floor(Math.random()*availableOptions.length)];
        let optionIndex = availableOptions.indexOf(randomOption);
        availableOptions.splice(optionIndex,1);
        // console.log(randomOption)
        // console.log(availableOptions)
        
        let optionLi = document.createElement('li');
        optionLi.innerHTML=currentQuestionOptions[randomOption];
        optionLi.className='option';
        
        let animationTime = animation + 's';
        optionLi.style.animationDelay=animationTime;
        animation = animation +0.1;
        optionContainer.appendChild(optionLi);
        optionLi.setAttribute('onclick', 'getResult(this)')
    }

}

const getResult = (e) => {
    
    let value = e.innerHTML;
    // console.log(value)
    if(value===currentQuestion.answer){
        // console.log('answer is right');
        e.classList.add('right');
        correctCounter++;
    }
    else{
        
        e.classList.add('wrong');
        wrongCounter++;
        for(let i=0; i<optionContainer.children.length; i++){
            if(optionContainer.children[i].innerHTML==currentQuestion.answer){    
                optionContainer.children[i].classList.add('right')
                // console.log(i)
            }
        }
    }

    unpointed();
    
}

const unpointed = () =>{
    const options = optionContainer.children.length;
    for(let i=0; i<options; i++){
        optionContainer.children[i].classList.add('cant-click')
       
    }
    
}

const next = () => {
    if(counter===data.length){
        // alert('test finished')
        counter=0;
        setAvailableData();
        singleSheet.style.display='none';
        resultSection.style.display='block';
        testResult();
    }
    else{
        getNewData();
    }
}


nextBtn.addEventListener('click', () => {
    
        next();
    
    
})


window.onload = () => {
    setAvailableData();
    getNewData();
}





