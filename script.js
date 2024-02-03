const dateofBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="your birthday is lucky...!";
    }else{
        outputBox.innerText="your birthday is not lucky";
    }
}

function checkBirthDateIsLucky(){
    const dob = dateofBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value)
    if(sum&&dob){
        compareValues(sum, luckyNumber.value)
    }else
        outputBox.innerText="please enter both the fields";
    
}

function calculateSum(dob){

dob = dob.replaceAll("-" ,"");
let sum = 0;
for( let index = 0; index<dob.length; index++){
    sum = sum + Number(dob.charAt(index));
}
return sum;


}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)
