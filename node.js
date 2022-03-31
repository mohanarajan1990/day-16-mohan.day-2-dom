

//SETINTERVAL

// setInterval(() => {
//     console.log("executing");
// }, 5000);


//SETTIMEOUT

// setTimeout(() => {
//     console.log("mohan");
// }, 2000);



//ALERT

// let btn = document.getElementById("btnclick");
// btn.addEventListener("click", function () {
//     let value = document.getElementById("txt").value;
//     if (!value) {
//         alert ("textbox value is mandatory");
//     }else {
//         alert("success")
//     }
// });



//PROMPT
// const name = prompt("Enter ur name");
// alert(name)



// EVENT

// function clickHandler(event) {
//     event.preventDefault();

//     console.log(event);
//     console.log("function executed");
// }



const frm = document.getElementById("form");
frm.addEventListener("submit", () => {
    alert("form submitted");
});









