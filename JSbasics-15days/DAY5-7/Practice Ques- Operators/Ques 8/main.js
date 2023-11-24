let temp = parseFloat(prompt("Enter temperature in celsius: "));

if(temp<100) {
    console.log("Low");
}
else if(temp>=100 && temp<250) {
    console.log("Medium");
}
else {
    console.log("High");
}