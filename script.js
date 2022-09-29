const cardImgNum = document.querySelector(".card-number-img");
const cardHolderName = document.querySelector("#cardholder-name");
const cardImgName = document.querySelector(".card-name-img");
const submitBtn = document.getElementById("submit-btn");
const cardImgMM = document.getElementById("card-mm");
const cardImgYY = document.getElementById("card-yy");
const cardImgCvc = document.querySelector(".cvc-img");
const formId = document.querySelector("#form-id");

// Credit Card Number Formatting using Cleave.js
let creditCardNumInput = new Cleave("#card-num", {
    creditCard: true,
    delimiter: " "
});

let expireMM = new Cleave(".exp-mm" , {
    date: true,
    datePattern: ['m']
});

let expireYY = new Cleave(".exp-yy" , {
    date: true,
    datePattern: ['y']
})

let cvcInput = new Cleave("#cvc" , {
    blocks: [3],
    numeral: true
})


// Adding Cvc value to card Image
cvcInput.element.addEventListener("input", () => {
    cardImgCvc.textContent = cvcInput.element.value;
})

// Adding Expiry month and year to Card Image

expireMM.element.addEventListener("input", () => {
    cardImgMM.textContent = expireMM.element.value;
})

expireYY.element.addEventListener("input", () => {
    cardImgYY.textContent = expireYY.element.value;
})


// Adding the card number to Card Image
creditCardNumInput.element.addEventListener("input" , () => {
    cardImgNum.textContent = creditCardNumInput.element.value;
});

// Adding the card name to card Name
cardHolderName.addEventListener("input", () => {
    cardImgName.textContent = cardHolderName.value;
});



submitBtn.addEventListener("click" , (e) => {
    // preventing the form default behaviour
    e.preventDefault();

    document.getElementById("form-id").innerHTML = `
    <div class="complete-form">
        <img src="./images/icon-complete.svg" alt="Icon Complete"/>
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button onclick="continueBtnHandler()" class="btn-primary">Continue</button>
  </div>`
})

function continueBtnHandler() {
    location.reload();
}
