
const add = document.getElementById('increment-btn');
const save = document.getElementById('save-btn');
const saveEl = document.getElementById('save-el');
const remove = document.getElementById('decrement-btn');
const total = document.getElementById('count-tot')
const initialIn = document.getElementById('count-in').innerHTML;
const countIn = document.getElementById('count-in');
const initialDe = document.getElementById('count-de').innerHTML;
const countDe = document.getElementById('count-de')


add.addEventListener('click', increment);
add.addEventListener('click', sumI);

remove.addEventListener('click', decrement);
remove.addEventListener('click', sumD);

save.addEventListener('click', saved);

let countAdd = initialIn + 0;

let countSub = initialDe + 0;

let countTot = initialIn + 0;



function increment() {
    countAdd =+ countAdd + 1
    countIn.innerText = countAdd;
}

function decrement() {
    countSub =+ countSub + 1
    countDe.innerText = countSub;
}

function sumI () {
    countTot =+ countTot + 1

    total.innerText = countTot 
}

function sumD () {
    countTot =+ countTot - 1
    
    total.innerText = countTot 

}


function saved() {
    let countStr =+ countTot ;

    saveEl.textContent = "COUNT : " + '"' + countStr + '"'
    total.textContent = 0;
    countDe.textContent = 0;
    countIn.textContent = 0;
    countTot = 0;
    countAdd = 0;
    countSub = 0;
}

