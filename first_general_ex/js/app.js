// functions area
function say(input){
	console.log(input);
}
say("app.js was just hit");



$( document ).ready(function() {

// window.onload = function() {  //document ready in JQ

// var firstltem=document.getElementById('someclass'); //II Get the first item
// firstltem.className = 'complete '; //II Change its class attribute


function durr(){
	console.log("im so easy cuz there are nothing in the parens")
}



function itemOnSale( id, newvalue ){
	var selctedProduct = document.getElementById(id);
	selctedProduct.innerHTML = newvalue;
	console.log("greetz function ran");
}
itemOnSale("iphone6","items are on sale now 50% off");







// a little referesh course on Arrays and their BFF's loops
/////////     0        1       2        3        4


var cars = ["Saab", "Volvo", "BMW", "Bentley", "Lexus"];

// second part aka looping an array

//in english prounounce as "for ( before; during(condition bool); after)"
for (i = 0; i < cars.length; i++) { 

    console.log (cars[i]);

}











var lolz = $('#lolz');
var kk = $('#kk');
var lolzval = lolz.val

kk.click(function() {
  alert(lolz.val());

$( lolzval ).appendTo( ".userinput" );
});


// } //end DR

}); //end jq