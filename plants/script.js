const hamburger = document.querySelector(".menu-burger");
const navMenu = document.querySelector(".burger");
const navMenuClose = document.querySelector(".menu-burger-icon");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".current-link").forEach(n =>n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))

navMenuClose.addEventListener("click", () => {
    navMenu.classList.toggle("active");

})



/*tabs */

const price = document.getElementsByClassName("prices-main_list-up");
let i;

for (i = 0; i < price.length; i++) {
    price[i].addEventListener("click", function() {
            this.classList.toggle("prices-main_list-down-active");

        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
        }
    });
}



/*service*/

let gardenBtn = document.querySelector('#garden');
let lawnBtn = document.querySelector('#lawn');
let plantBtn = document.querySelector('#plant');


gardenBtn.addEventListener('click', function(){
    gardenBtn.classList.toggle('active');
    document.getElementById('garden1').classList.remove('active');
    document.getElementById('garden2').classList.remove('active');
    document.getElementById('plant1').classList.toggle('active');
    document.getElementById('plant2').classList.toggle('active');
    document.getElementById('plant3').classList.toggle('active');
    document.getElementById('lawn1').classList.toggle('active');
});
lawnBtn.addEventListener('click', function(){
    lawnBtn.classList.toggle('active');
    document.getElementById('lawn1').classList.remove('active');
    document.getElementById('plant1').classList.toggle('active');
    document.getElementById('plant2').classList.toggle('active');
    document.getElementById('plant3').classList.toggle('active');
    document.getElementById('garden1').classList.toggle('active');
    document.getElementById('garden2').classList.toggle('active');
});
plantBtn.addEventListener('click', function(){
    plantBtn.classList.toggle('active');
    document.getElementById('plant1').classList.remove('active');
    document.getElementById('plant2').classList.remove('active');
    document.getElementById('plant3').classList.remove('active');
    document.getElementById('garden1').classList.toggle('active');
    document.getElementById('garden2').classList.toggle('active');
    document.getElementById('lawn1').classList.toggle('active');
});

/*select */

const contactsButton = document.querySelector('.contacts-button');
const itcSelectDropdown = document.querySelector('.itc-select__dropdown');
const itcSelectOption = document.querySelectorAll('.itc-select__option');
const textBtn = document.querySelector('.contacts-button span');
const contactsAdressList = document.querySelector('.contacts__adress-list');
const contactsAdress = document.querySelector('.contacts__adress');
// const contactsAdress = document.querySelectorAll('.contacts__adress')




contactsButton.addEventListener("click", () => {
    contactsButton.classList.toggle("contacts-button-active");
    itcSelectDropdown.classList.toggle("itc-select__dropdown-active");
})

itcSelectOption.forEach(n =>n.addEventListener("click", () => {
    itcSelectDropdown.classList.remove('itc-select__dropdown-active')

}))

itcSelectOption.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        textBtn.innerText = this.innerText
        textBtn.style.marginTop ='-78px'
        contactsAdressList.classList.add('contacts__adress-list-active')
        contactsAdress.classList.toggle('contacts__adress-active')

        
        contactsAdress.forEach(item => item.addEventListener('click', function() {
            item.style.display = "none"
        }))

        // for (let i = 0; i < contactsAdress.length; i++){
        //     //  contactsAdress[i].classList.add('contacts__adress-active')
        //     contactsAdress[i].addEventListener("click", function() {
        //         this.classList.toggle("contacts__adress-active");
    
        //     // const adress = this.nextElementSibling;
        //     // if (adress.style.display === "block") {
        //     //     adress.style.display = "none";
                
        //     // } else {
        //     //     adress.style.display = "block";
        //     // }
        //     })
        // }

    })
    
        
})
