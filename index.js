let redbtnobject = 0;
const btnRed = document.getElementById("redbutton");

btnRed.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "red";
    redbtnobject = 2;
});
