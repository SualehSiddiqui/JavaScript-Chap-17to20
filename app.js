// Chap #17to20

// Question #01
var arr = [[], [], []]

// Question #02
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Question #03
// for(var i = 1; i<=10; i++){
//     document.write(i);
// }

// Question #04
// var num = prompt("Enter number for table");
// var lenght = prompt("Enter lenght of table");
// document.write("<h1>Multiplication table of " + num + "</h1>");
// document.write("<h1>Lenght " + lenght + "</h1>")
// for(var i = 1 ; i<=lenght; i++){
//     document.write(num + " x " + i + " = " +num*i + "<br />")
// }

// Question #05
// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for(var i = 0; i<5; i++){
//     document.write(fruits[i]+"<br />");
// }
// for(var i = 0; i<5; i++){
//     document.write("Element at index " + i +" is " + fruits[i] + "<br/>");
// }

// Question #06
// document.write("<h1>Counting:</h1>");
// for (var i = 1; i <= 20; i++) {
//     document.write(i + ", ");
// }
// document.write("<h1>Reverse Counting:</h1>");
// for (var a = 20; a >= 1; a--) {
//     document.write(a + ", ");
// }
// document.write("<h1>Even:</h1>");
// for(var b=0; b<=20 ; b++){
//     var even = b%2
//     if(even === 0){
//         document.write(b + ", ");
//     }
// }
// document.write("<h1>Odd:</h1>");
// for(var c=0; c<=20 ; c++){
//     var odd = c%2
//     if(odd ==! 0){
//         document.write(c + ", ");
//     }
// }
// document.write("<h1>Series:</h1>");
// for(var d = 1; d <=20; d++ ){
//     var ser = d%2
//     if(ser === 0){
//         document.write(d + "k, ");
//     }
// }

// Question #07
// var array = ["apple pie", "cake", "cookie", "chips", "patties"];
// var input = prompt("Enter an item");
// var mila = false;
// for(var i=0; i<5; i++ ){
//     if(array[i]===input){
//         mila = true
//     }
    
// }
// if(mila == true){
//     document.write(input + "is available at index " + i + " in our bakery")
// }
// else{
//     document.write("We are Sorry. " + input + " is not available in our bakery." )
// }

// Question #08
// var array = [24, 53, 78, 91, 12];
// document.write("Aray is: " + array);
// var large = array[0];
// for(var i=0; i<array.length; i++){
//     if(large < array[i]){
//         large=array[i];
//     }
// }
// document.write("<br />The largest number is: " + large);

// Question #09
// var A = [24, 53, 78, 91, 12];
// var small = A[0];
// for ( var i=0; i<A.length; i++){
//     if (small > A[i]){
//         small = A[i];
//     }
// }
// document.write("<br />The smallest number is :"+small);

// Question #10
var num =5
for(var i = 1; i<=20; i++){
    document.write(num*i+ ", ")
}








