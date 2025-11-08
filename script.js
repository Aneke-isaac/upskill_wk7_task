
const body = document.querySelector('body');
const Dark = document.getElementById('Dark');
body.style.background = "white";

Dark.addEventListener("click", function(){
    if (document.body.style.background === "black") {
        document.body.style.color = "white";
        document.body.style.color="black"
    } else{
        document.body.style.background = "black"
    }
})

//Input
let input = document.getElementById('input');
let Greeting = document.getElementById('Greeting');

input.addEventListener("input",function() {
    let name = input.value;
    if(name === ""){
        Greeting.innerText = "Hello!! Friend";
    }else{
        Greeting.innerText = "Hello," + name;
    }
});

let box = document.getElementById("box")
box.addEventListener("click", () =>{
    alert("Box was clicked")
});

let grow = document.getElementById("Grow")
grow.addEventListener("click", function() {
    box.style.flexGrow = "1"
    // box.style.padding = "300px"
});

let shrink = document.getElementById("shrink")
shrink.addEventListener("click", function() {
    box.style.flexShrink="0"
});


//Secret
let secert = document.getElementById("secert");
secert.addEventListener("click", function(){
    window.alert('Thanks!!! You are welcome to my Dashboard')
});