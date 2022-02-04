const $billInput = document.getElementById('bill');

const $tip5Btn = document.getElementById('tip5');
const $tip10Btn = document.getElementById('tip10');
const $tip15Btn = document.getElementById('tip15');
const $tip25Btn = document.getElementById('tip25');
const $tip50Btn = document.getElementById('tip50');

const $inputCustomTip = document.getElementById('tipCustom');
const $numOfPeopleTipping = document.getElementById('numPeople');
const $tipAmountPerPerson = document.getElementById('tipAmount');
const $AmountTotal = document.getElementById('totalAmount');
const $resetBtn = document.getElementById('resetBtn');

let tipPercent = 0;
let currentValue = $billInput.value;
let numberOfPeople = $numOfPeopleTipping.value;
let tipValue = currentValue * tipPercent;
let tipAmountPerPerson = tipValue / numberOfPeople;
let totalBillPerPerson = (currentValue / numberOfPeople) + tipAmountPerPerson;

$billInput.addEventListener('input', () => {
            currentValue = $billInput.value;
            tipValue = currentValue * tipPercent;
            tipAmountPerPerson = tipValue / numberOfPeople;
            totalBillPerPerson = (currentValue / numberOfPeople) + tipAmountPerPerson;
            $tipAmountPerPerson.innerText = tipAmountPerPerson;
            $AmountTotal.innerText = totalBillPerPerson;
})

$numOfPeopleTipping.addEventListener('input', () => {
    currentValue = $billInput.value;
    numberOfPeople = $numOfPeopleTipping.value;
    tipValue = currentValue * tipPercent;
    tipAmountPerPerson = tipValue / numberOfPeople;
    totalBillPerPerson = (currentValue / numberOfPeople) + tipAmountPerPerson;
    $tipAmountPerPerson.innerText = tipAmountPerPerson;
    $AmountTotal.innerText = totalBillPerPerson;
})

// $inputCustomTip.addEventListener('input', () => {
//     tipPercent = $inputCustomTip.value * .010;
//     currentValue = $billInput.value;
//     numberOfPeople = $numOfPeopleTipping.value;
//     tipValue = currentValue * tipPercent;
//     tipAmountPerPerson = tipValue / numberOfPeople;
//     totalBillPerPerson = (currentValue / numberOfPeople) + tipAmountPerPerson;
//     $tipAmountPerPerson.innerText = tipAmountPerPerson;
//     $AmountTotal.innerText = totalBillPerPerson;
// })


const tip = (porcentaje) =>{
    tipPercent = parseInt(porcentaje)/100;
    console.log(tipPercent);
    console.log(typeof tipPercent);
    tipValue = parseFloat(currentValue) * parseFloat(tipPercent);
    tipAmountPerPerson = tipValue /  parseInt(numberOfPeople);
    totalBillPerPerson = (currentValue / parseInt(numberOfPeople)) + tipAmountPerPerson;
    $tipAmountPerPerson.innerText = tipAmountPerPerson;
    $AmountTotal.innerText = totalBillPerPerson;
    // $inputCustomTip.value = 0;
}


$tip5Btn.addEventListener('click', ()=>{ tip(5) });
$tip10Btn.addEventListener('click', ()=>{ tip(10) });
$tip15Btn.addEventListener('click', ()=>{ tip(15) });
$tip25Btn.addEventListener('click', ()=>{ tip(25) });
$tip50Btn.addEventListener('click', ()=>{ tip(50) });
$inputCustomTip.addEventListener('input', ()=>{tip($inputCustomTip.value)})





$resetBtn.addEventListener('dblclick', () => {
    tipPercent = 0
    $tipAmountPerPerson.innerText = 0;
    $AmountTotal.innerText = 0;
    $inputCustomTip.value = 0;
    $numOfPeopleTipping.value = 0;
    $billInput.value = 0
})
