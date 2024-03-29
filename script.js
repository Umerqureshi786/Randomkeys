// alert("Umer Qureshi")
// var name1=prompt("Enter your name");
// if(name1==="umer"){
//     console.log("Pass");
// } else {
//     console.log("Fail")
// }





let counter = 0;
function showAlert() {
    alert("Counter: " + counter);
}
function KeyPress() {
    counter++;
    showAlert();
}
document.addEventListener("keydown", KeyPress);
window.onload = function () {
    counter = 0;
};

