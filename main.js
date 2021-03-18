const button = document.querySelector('button');
const body = document.querySelector('body');
const colorHex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  'a', 'b', 'c', 'd', 'e', 'f'];
const text = document.querySelector('span');

button.addEventListener('click', changeColor);

function changeColor(){
    let hex ='#'

    for (   let i =0; i < 6; i++) {
        const index =Math.floor(Math.random() * colorHex.length);
        hex += colorHex[index]
    }
    text.innerHTML = hex;
    body.style.backgroundColor =hex;                                                                                                
}

