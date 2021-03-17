const dino = document.querySelector('.dino');
const background = document.querySelector('.background'); //Background div to add cactus 

let isJumping = false; //Prevemt dino's shaking
let isGameOver = false;
let position = 0;


function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        } 
    }
}

function jump(){
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
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        //if cactus disappear, do something (-60px is the position where it disappears)
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //Game over 
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener( 'keyup', handleKeyUp);
