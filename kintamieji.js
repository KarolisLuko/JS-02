"use strict"
var skaicius1, skaicius2, skaicius3, skaiciu4;

var skaicius1 = 2;
var skaicius2 = 3;
var skaicius3 = 4;
var skaicius4 = 5;

console.log (skaicius1 + skaicius2 + skaicius3 + skaicius4);
console.log (skaicius1 * skaicius2 * skaicius3 * skaicius4);
console.log(skaicius1, skaicius2, skaicius3, skaicius4);

var temp;
temp = skaicius1;//=2
skaicius1 = skaicius2;//=3
skaicius2 = temp;//=2
console.log(`skaicius1 = ${skaicius1} skaicius2 = ${skaicius2}`);


skaicius3 = skaicius3 + skaicius4;//skaicius3 = 9 
skaicius4 = skaicius3 - skaicius4;//skaicius4 = 4
skaicius3 = skaicius3 - skaicius4;//skaicius3 = 5
console.log(`skaicius3 = ${skaicius3}  skaicius4 = ${skaicius4} `);

var maxSkaicius;
maxSkaicius = Number.MAX_SAFE_INTEGER + 1;
console.log(maxSkaicius);


var skaicius5, skaicius6;

var skaicius5 = 6;
var skaicius6 = 8;

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;
console.log(`skaicius5 =${skaicius5} skaicius6 = ${skaicius6}`)

var element = document.getElementById('Rezultatas');
element.innerHTML = `skaicius5 =${skaicius5} skaicius6 = ${skaicius6}`