let time = parseInt(prompt("Enter time in military/24hr format: "));
if(time<12) {
    console.log("Good Morning");
}
else if(time >= 12 && time<16) {
    console.log("Good Afternoon");
}
else if(time >= 16 && time<20) {
    console.log("Good Evening");
}
else if (time >= 20 && time <= 24) {
    console.log("Good Night");
}
else {
    console.log("Invalid Time");
}