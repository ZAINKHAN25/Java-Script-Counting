var number = document.querySelector('.number')
var dECREASE = document.querySelector('#dECREASE')
var rESET = document.querySelector('#rESET')
var iNCREASE = document.querySelector('#iNCREASE')
var neutralColor = document.querySelector('.neutralcolor');
var greencolor = document.querySelector('.greencolor');
var redcolor = document.querySelector('.redcolor');

iNCREASE.addEventListener("click", ()=>{
    number.textContent = ++number.textContent;
    countingnumber();
})
dECREASE.addEventListener("click", ()=>{
    number.textContent = --number.textContent;
    countingnumber();
})
rESET.addEventListener("click",()=>{
    number.textContent = 00;
    countingnumber();
})



function countingnumber(){

if(number.innerHTML == 0){
    number.style.color = "black"
}
else if(number.textContent >= 1){
    number.style.color = "green"
}
else if(number.textContent >= -1){
    number.style.color = "red"
}
}