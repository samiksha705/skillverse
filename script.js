let points = localStorage.getItem("skillpoints");

if(points == null){
points = 0;
}

document.getElementById("points").innerText = points;

function addPoints(){

points = parseInt(points) + 10;

localStorage.setItem("skillpoints",points);

document.getElementById("points").innerText = points;

}
