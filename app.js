// const buttonas = document.querySelectorAll('button');
// for(let i = 0; i<buttonas.length; i++) {
// buttonas[i].addEventListener(`click`, (event) => {
//     buttonas[i].style.color = 'red';
//     console.log(event.target.textContent);
// });
// }


// const buttonas = document.querySelectorAll('button');
// buttonas.forEach((element) => {
//     element.addEventListener(`click`, (event) => {
//         event.target.style.color = 'red';
//         console.log(event.target.textContent);
//     });
// });


let pirmSk = document.getElementById("input-one");
let antrSk = document.getElementById("input-two");
const add = document.querySelector('.addition');
const mod = document.querySelector('.mod');
const subtract = document.querySelector('.subtraction');
const divide = document.querySelector('.division');
const multiply = document.querySelector('.multiplication');
const clear = document.querySelector('.clear');
const outputRes = document.querySelector(`#result`);


const calculator = [add,subtract,divide,multiply,mod,clear];



function addNum(a,b) {
    const result = a + b;
    return result;
}

function subNum(a,b) {
    const result = a - b;
    return result;
}


function multiNum(a,b) {
    const result = a * b;
    return result;
}

            
function divNum(a,b) {
    const result = a / b;
    return result;
}

function modNum(a,b) {
    const result = a % b;
    return result;
}

function clearField() {
    pirmSk.value = '';
    antrSk.value = '';
    outputRes.textContent = '';
}



calculator.forEach((element) => {
    element.addEventListener(`click`, (event) => {
let result = null;

switch (element) {
        case add:
            result = addNum(Number(pirmSk.value),Number(antrSk.value));
            break;
        case subtract:
            result = subNum(Number(pirmSk.value),Number(antrSk.value));
            break;
        case multiply:
            result = multiNum(Number(pirmSk.value),Number(antrSk.value));
            break;
            case mod:
            result = modNum(Number(pirmSk.value),Number(antrSk.value));
            break;
        case divide:
            result = divNum(Number(pirmSk.value),Number(antrSk.value));
            break;
        case clear:
            clearField();
            break;
            
    default:
            break;
            
}
outputRes.textContent = result;




    // if (element === add) {
    //      result = addNum(Number(pirmSk.value),Number(antrSk.value));
    //         outputRes.innerHTML = result;
    // }
    // else if (element === subtract) {

                    
    //                  result = subNum(Number(pirmSk.value),Number(antrSk.value));
                    
        
    //                 outputRes.innerHTML = result;
    //         }
    //     else if (element === multiply) {

            
    //         result = multiNum(Number(pirmSk.value),Number(antrSk.value));
            

    //         outputRes.innerHTML = result;

    // }
    //     else {

            
    //         result = divNum(Number(pirmSk.value),Number(antrSk.value));

    //         outputRes.innerHTML = result;
    // }
});











});
