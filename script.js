let bombArr = [];
let score = 0;

const elegrid = document.querySelector(".grid");
const eleScore = document.querySelector(".score");
const eleLevel = document.querySelector("#level")
const button = document.querySelector(".btn");
button.addEventListener('click', selectLevel)
//function
function selectLevel(){
    elegrid.innerHTML= ' '
    let levelvalue = parseInt(eleLevel.value);
    switch(levelvalue){ 
        case 81:
            elegrid.classList.add('grid-81');
            arrBClear()
            randomArr(1, 81, 20)
            break;
        case 49:
            elegrid.classList.add('grid-49');
            arrBClear()
            randomArr(1, 10, 8)
            break;
        default:
            elegrid.classList.add('grid-100');
            arrBClear()
            randomArr(1, 100, 10)
            break;
    }
    for (let i = 1; i < levelvalue + 1; i++ ){
        let eleBox = document.createElement('div');
        eleBox.classList.add('box', 'hidden');
        eleBox.innerHTML=`${i}`;
        elegrid.append(eleBox);
        if(bombArr.includes(i)){
            eleBox.classList.add('bomb')
            eleBox.addEventListener('click', xclick)
        }else{
            eleBox.classList.add('nonbomb')
            eleBox.addEventListener('click', vclick)
        }
    }
    console.log(levelvalue);
    console.log(bombArr)
}

function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function randomArr(min, max, nElement){

    for (let i=0;i < nElement;i++){
        do{
            rNumb=getRnd(min,max);
        }while(bombArr.includes(rNumb))
        bombArr.push(rNumb);       
    }

}
function arrBClear(){
    bombArr=[]
}
function vclick(){
    this.removeEventListener('click',vclick)
    score++;
    this.classList.remove('hidden');
    eleScore.innerHTML = '';
    eleScore.innerHTML = `<div>${score}</div>`;
}
function xclick(){
    this.classList.remove('hidden');
    eleScore.innerHTML = '';
    eleScore.innerHTML = `<div class="box">YOU ARE A LOSER</div>`;
    endgame();
}
function endgame(){
    let count = parseInt(eleLevel.value);
    for (let i=0;i< count + 1;i++){
        if(bombArr.includes(i)){
            this.removeEventListener('click', xclick)
            this.classList.remove('hidden');
        }
    }
}