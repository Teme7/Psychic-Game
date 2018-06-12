var first = "second";

var num = "4";

var animals =["lion", "dog", "cat"];

var car = { // this is an object
    model: "acura", // properties of the obj (key-value pairs)
    year: 2016,
    drive: function(numberMiles) { // function declared here
        console.log("drive " + numberMiles + " miles!");
    },
    wrong: ["dog", "cat"],
}

//drive();

function drive () {
    alert("stop!");
};

console.log(car.model);
car.drive(25);
alert(car.wrong[1]);