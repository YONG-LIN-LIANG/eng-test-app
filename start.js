let startBtn = document.querySelector('.preview button');
let preview = document.querySelector('.preview');
let singleSheet = document.querySelector('.single-sheet');
startBtn.addEventListener('click', () => {
    // console.log('clicked')
    preview.style.display='none';
    singleSheet.style.display='block';
    
})