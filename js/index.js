const InputBtn = document.querySelector(".input-btn");
const genarateBtn = document.querySelector(".Add-btn");
const OutputArea = document.querySelector(".Output-area");

genarateBtn.addEventListener('click',() =>{

let inputValue = Number.parseInt(InputBtn.value);

if(isNaN(inputValue) || inputValue == ''){
   alert("Please enter number");
}



let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?,./:;'\"\\|~`-=©®™✓♥♦♣♠♪★☆✔☑☠☢☣∞§¶•ªº¿¡½¼¾‰€£¥₩₽₹÷×";

 let result = '';

for(let i=0; i<inputValue; i++){

let charIndex = Math.round(Math.random()*charset.length);

    result += charset[charIndex];

  
    
}

OutputArea.innerHTML = `
    <p>${result}</p>

`;
InputBtn.value = '';

})

InputBtn.addEventListener('input',() =>{
  OutputArea.innerHTML = '';

})





