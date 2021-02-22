console.log("Hello, console!");

var a = 0;
var a_per_sec = 0;
var prod;

document.getElementById("click_me").onclick = function() {incrementClicks()};

document.getElementById("building_1").onclick = function() {buyBuilding(50, 1)};

document.getElementById("building_2").onclick = function() {buyBuilding(800, 12)};

document.getElementById("building_3").onclick = function() {buyBuilding(6400, 75)};

document.getElementById("building_4").onclick = function() {buyBuilding(70000, 800)};

document.getElementById("building_5").onclick = function() {buyBuilding(500000, 9600)};

function incrementA(times=1) {
    a += times;
    recalculate();
}

function buyBuilding(cost, persec_build) {
    if (a >= cost) {
        a -= cost;
        execute(persec + persec_build);
        persec += persec_build;
        recalculate();
    }
}

function execute(n) {
    prod = 0
    if (a_per_sec < 1000) {
      prod = setInterval(incrementA, 1000 / n);
    } else {
      prod = setInterval{incrementA(n / 1000), 1}
}

function recalculate() {
    document.getElementById("clicks").innerHTML = "a = " + a;
    document.getElementById("persec").innerHTML = "a_per_sec = " + persec;
