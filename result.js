
let resultSection = document.querySelector('.test-result');
let tryAgainBtn = document.querySelector('.againBtn');
let numResult = document.querySelector('.totalQuestion-num');
let correctNum = document.querySelector('.correct-num');
let wrongNum = document.querySelector('.wrong-num');
let percentageNum = document.querySelector('.percentage-num');
let scoreNum = document.querySelector('.score-num');
let IntNumResult, totalScore, percentCalculate;
tryAgainBtn.addEventListener('click', () => {
    resultSection.style.display='none';
    preview.style.display='block';
    IntNumResult=0, correctCounter=0, wrongCounter=0,
    getNewData();

})


const calculateTubeSize = () => {
    //進度條最大值170px，用當前的分數去比例出適當的長度
    let selectAllProgressBar = document.querySelectorAll('.result-section>div>div');
    selectAllProgressBar.forEach(x =>{
        
        //計算長度最大值170px
        if(x.classList.contains('color-block1')){
            let progressBarForBlock1 = ((IntNumResult)/(data.length))*170 + 'px';  
            console.log(progressBarForBlock1);
            x.style.width = progressBarForBlock1;
        }
        else if(x.classList.contains('color-block2')){
            let progressBarForBlock2 = ((correctCounter)/(data.length))*170 + 'px';
            console.log(progressBarForBlock2);
            x.style.width = progressBarForBlock2;
        }
        else if(x.classList.contains('color-block3')){
            let progressBarForBlock3 = ((wrongCounter)/(data.length))*170 + 'px';
            console.log(progressBarForBlock3);
            x.style.width = progressBarForBlock3;
        }   
        else if(x.classList.contains('color-block4')){
            let percentCalculate = (correctCounter / IntNumResult)*100;
            let progressBarForBlock4 = ((percentCalculate)/100)*170 + 'px';
            console.log(progressBarForBlock4);
            x.style.width = progressBarForBlock4;
        }
        else{
            let progressBarForBlock5 = ((correctCounter)/(data.length))*170 + 'px';
            console.log(progressBarForBlock5);
            x.style.width = progressBarForBlock5;
        }
        
    })
    
    //Total Question Area 

}



const testResult = () => {
    IntNumResult = parseInt(numResult.innerHTML); //result 的 toatal question的值(數值)
    let totalScore = correctCounter + '/' + data.length; // total score 比例
    scoreNum.innerHTML = totalScore;
    correctNum.innerHTML = correctCounter; 
    wrongNum.innerHTML = wrongCounter;
    // percentage取到小數點後兩位
    percentCalculate = ((correctCounter / IntNumResult)*100).toFixed(2);
    percentCalculate = percentCalculate + '%'; //計算百分比
    percentageNum.innerHTML = percentCalculate;

    calculateTubeSize();
}