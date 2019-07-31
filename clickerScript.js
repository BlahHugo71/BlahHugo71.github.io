console.log("Hello, console!");

var clicks = 0;
var persec = 0;
var prod;

document.getElementById("click_me").onclick = function() {incrementClicks()};

document.getElementById("building_autoclick").onclick = function() {buyBuilding(50, 1)};

document.getElementById("building_robot").onclick = function() {buyBuilding(800, 12)};

document.getElementById("building_family").onclick = function() {buyBuilding(6400, 75)};

document.getElementById("building_server").onclick = function() {buyBuilding(70000, 800)};

document.getElementById("building_farm").onclick = function() {buyBuilding(500000, 9600)};

function incrementClicks() {
    clicks++;
    recalculate();
}

function buyBuilding(cost, persec_build) {
    if (clicks > cost || clicks == cost) {
        clicks -= cost;
        persec += persec_build;
        execute(persec_build);
        recalculate()
    }
}

function execute(n) {
    prod = setInterval(incrementClicks, 1000 / n)
}

function recalculate() {
    document.getElementById("clicks").innerHTML = "You have " + clicks + " click(s).";
    document.getElementById("persec").innerHTML = "You are getting " + persec + " click(s) per second.";
}



