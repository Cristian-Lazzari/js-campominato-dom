let bombArr = [];
const level = document.querySelector("#level");
const button = document.querySelector(".btn");
const grid100 = document.querySelector(".grid");
button.addEventListener('click',
function(){
    if(level.value == 'easy'){
        arrBClear();
        randomArr(1, 100, 17);
        let score = 0;

        
        grid100.innerHTML= ''
        grid100.classList.add('grid-100')
        for (let i = 1; i < 101; i++){
            const eleBox=document.createElement('div');
            eleBox.classList.add('box');
            eleBox.classList.add('hidden');
            eleBox.innerHTML=`${i}`;
            grid100.append(eleBox);
            if(bombArr.includes(i)){
                eleBox.classList.add('bomb');
                eleBox.addEventListener('click',
                function(){
                    
                    eleBox.classList.remove('hidden');
                })
                
            }else{
                eleBox.classList.add('nonbomb')
                eleBox.addEventListener('click',
                function(){
                    score++;
                    eleBox.classList.remove('hidden');
                })
            }

        }
        
    
    }
    else if (level.value == 'normal') {
        
        // const grid100 = document.querySelector(".grid");
        grid100.innerHTML= ''
        grid100.classList.add('grid-81')
        for (let i = 1; i < 82; i++){
            grid100.innerHTML+= `<div class="box">${i}</div>`
            console.log(i)
        }
    } else {
        
        const grid100 = document.querySelector(".grid");
        grid100.innerHTML= ''
        grid100.classList.add('grid-49')
        for (let i = 1; i < 50; i++){
            grid100.innerHTML+= `<div class="box">${i}</div>`
            console.log(i)
        }
    }
    console.log(bombArr)
})
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function randomArr(min, max, nElement){
    let rNumb;
    for (let i=0;i < nElement;i++){
        do{
            rNumb=getRnd(min,max);
        }while(bombArr.includes(rNumb))
        bombArr.push(rNumb)        
    }

}
function arrBClear(){
    bombArr=[]
}
