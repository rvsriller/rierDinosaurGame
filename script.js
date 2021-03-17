const dino = document.querySelector('.dino');
const background = document.querySelector('.background'); //Background div to add cactus 
let isJumping = false; //Prevemt dino's shaking

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        } 
        
    }
}

function jump(){
    let position = 0;
    isJumping = true;
    //Going up and down
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            
            //going down
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //Going up
            position += 20;
            dino.style.bottom = position + 'px';
        }  
    }, 20);
}

//Cactus generator
function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000 //Position from right to left side
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
}

document.addEventListener( 'keyup', handleKeyUp);
