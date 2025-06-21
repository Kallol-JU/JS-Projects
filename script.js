const btns = document.querySelectorAll(".colors");
const body = document.querySelector("body");



btns.forEach(btn => {
    btn.addEventListener("click" ,() => {
    const currMode = btn.dataset.color;
    console.log(currMode);
    if(currMode === "red") {
        body.classList.add("red");
        body.classList.remove("blue");
        body.classList.remove("yellow");   
        body.classList.remove("green");
    } else if(currMode === "yellow") {
        body.classList.add("yellow");
        body.classList.remove("red");
        body.classList.remove("blue");
        body.classList.remove("green");

    } else if(currMode === "blue") {
        body.classList.add("blue");
        body.classList.remove("red");
        body.classList.remove("yellow"); 
        body.classList.remove("green");
    } else if(currMode === "green") {
        body.classList.add("green");
        body.classList.remove("red");
        body.classList.remove("blue");
        body.classList.remove("yellow"); 

    }
  });
})

