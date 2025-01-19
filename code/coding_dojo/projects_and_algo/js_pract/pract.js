// var me = "Joshua Rosado is "
// var num = 28
// var info = " Is ready for a new adventure";
// console.log(me + num + " old, and" + info);


// var answers = 10 + 5 * 1;

// console.log(answers)

// var message = "hello";
// message += " world";

// console.log(message)



// function counter() {    
//     for (var num = 0; num <= 5; num++) {        
//         console.log(num);    
//     }
// }
// counter();    // run the function
// counter();


// function count() {
//     for (var digit = "-100"; digit <= "0"; digit++)
//     { console.log(digit);}
// }

// count();

// function conteo(){
//     for (var numero = "0"; numero <= "10"; numero ++)
//     {console.log(numero);}
// }

// conteo();

// var info = "Aloha, my name is "
// var me = "Joshua"
// var question = " Whats your name?"


// console.log(info + me + "." + question)

// console.log(me)


// console.log("Hey Whats Up?")

// var numDays = 100
// console.log("It rains approximately "+ numDays + " in this area.")

// function sayName()
// {
//     console.log("My name is Joshua")
// }
// var myName = "Martin";

// if(myName == "Martin")
// {
//     console.log("Hey there Martin, how's it going?");
// }
// else
// {
//     console.log("Greetings Earthling. Have a great day!");
// }




// // var ask = "What is your name?"
// // console.log(ask)
// // sayName()



// var y = 50;
// if( y > 55){
//     console.log("Y is greater than 45");
// }
// else if (y > 51){
//     console.log("Y is greater than 25")
// }
// else if(y < 20) {
//     console.log("Y is smaller than 66")
// }

// else {
//     console.log("Is not true")
// }


// var user = ["Josh", "Lexis", "Leya"];
// user.push("J.J.")
// console.log(user)
// user.push("Unknown")
// console.log(user)
// user.pop()
// console.log(user)
// console.log(user.length)


// for(var num = 5; num < 10; num += 2){
//     console.log(num);

// }

// console.log(num);


// for( var days = 0; days < 10; days++){
//     console.log(days)
// }

// console.log(days)


// var array = [1,2,3,4,5,6,7,8,9,10];
// for( var array= 0; array <6; array++){
//     console.log(array)
// }

var array = [2,4,6,8,10];
for(var i = 0; i < array.length; i = i + 1){
    console.log(i);
    console.log(array[i]);
}






var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
whatToBring += "sunglasses, ";
}
if(temperature < 50) {
whatToBring += "a coat, ";
}
if(isRaining) {
whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);