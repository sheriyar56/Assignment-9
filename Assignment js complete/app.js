
function Assignment1(){


  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12)
      greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
      greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
      greet = 'Good Evening';

      
      alert("Ass1task1 "+greet +" and welcome to my Assignment");
  }


  function task2(){

alert("Error! Please enter a valid password");

  }

function task3(){

alert("Welcome to JS Land \n Happy Coding!");

  }



function task4load()
{
 myAlert();
 sayHello("Sir");
}

function myAlert()
{
alert("Welcome to JS Land");
}

function sayHello(name)
{
 alert("Happy Coding! " + name);
}


function ass1task5(){

 
var a = alert("I can run js through console");
  console.log(a);
}


function ass2task1(){

  var username;

  alert("var username;");
}

function ass2task2(){

  var myName="Junaid";

  alert("var myName='Junaid';");
}

function ass2task3(){

  var message="Hello World";

  alert(message);
}


function ass2task4(){


  var name="Junaid";
  var age="22 years old";
  var qualification="Certified Mobile Application Development";
  alert(name);
  alert(age);
  alert(qualification);

}


function ass2task5(){


  var pizza="PIZZA";

  alert(pizza+"\n"+pizza.substring(0,pizza.length-1)+"\n"+pizza.substring(0,pizza.length-2)+"\n"+pizza.substring(0,pizza.length-3)+"\n"+pizza.substring(0,pizza.length-4));

}


function ass2task6(){

var email = "example@example.com";

alert("My email address is "+email);
}
  
function ass2task7(){

var book = "A smarter way to learn JavaScript";

alert("I am trying to learn from the book "+book);
}

function ass2task8(){
document.write("YAH! I can write HTML content through JavaScript");
}

function ass2task9(){
  var b ="\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u0B9C\u06E9\u06DE\u06E9\u0B9C\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC";
 alert(b);
}


function ass3task1(){
var age=21;
alert("I am "+age+" years old");

}



//localStorage.setItem("counter", 0 );
var count=localStorage.getItem("counter");

if(!count){
count=1;
}else{
count=parseInt(count)+ 1;
localStorage.setItem("counter",count);
}


function VisitCounter(){
alert("You have visited this site "+count+" times");
}

function ass3task3(){

var birthYear= 1998;
document.write("My birth year is "+birthYear+"<br> Data type of my declared variable is number");
}

function ass3task4(){

var vistorName="John Doe";
var productTitle= "T-shirt(s)";
var quantity=5;
document.write(vistorName+" ordered "+quantity+" "+productTitle+" on XYZ Clothing store");
}

function ass4task1(){

  var a,b,c;

  alert("var a , b, c;");

}

function ass4task2(){

  var a;
  var $b;
  var _a;
  var age_of_hh_head;
  var x25;
  
  alert("Legal variables: \n var a;\n var $b ; \n var _a; \n var age_of_hh_head; \n var x25; \n \nillegal variables: \n var break; \n var ?boolean; \n var 1b; \n var +a; \n var max age;" )

  //var break;
  //var ?boolean;
   // var 1b;
  // var +a;
  // var max age;
  
 
}


function ass4task3(){


  document.write("<h1>Rules for naming JS variables</h1><br><br>Variable names can only contain numbers,$,and _ for example :$ my_1stvariable <br/> Variables must begin with a letter $ or_For example $my_1stVariable <br/> Variable names are case sensitive <br/> Variable names should not be JS keyword");
 
  
}

function ass5task1(){

  var a = 3;
  var b = 5;
  var c= a+b;
  document.write("Sum of "+a+" and "+b+" is "+c);
}


function ass5task2(){

  var a = 3;
  var b = 5;
  var c= a-b;
  document.write("Subtraction of "+a+" and "+b+" is "+c+"<br><br>");

  var a = 3;
  var b = 5;
  var c= a*b;
  document.write("Multiplication of "+a+" and "+b+" is "+c+"<br><br>");

  var a = 3;
  var b = 5;
  var c= a/b;
  document.write("Division of "+a+" and "+b+" is "+c+"<br><br>");

  var a = 3;
  var b = 5;
  var c= a%b;
  document.write("Modulus of "+a+" and "+b+" is "+c);
}


function ass5task3(){

  var a;
  document.write("Value after variable declaration is "+a);
  a=5;
  document.write("<br>Initial value: "+a);
  a=a+1;
  document.write("<br>Value after increment is: "+a);
  a=a+7;
  document.write("<br>Value after Addittion: "+a);
  a=a-1;
  document.write("<br>Value after decrement is: "+a);
  a=a%3;
  document.write("<br>The remainder is : "+a);
}

function ass5task4(){

  var price=600;
  var a=5;
  var c = price * a;
  document.write("Total cost to buy 5 tickets to a movie is "+c+" PKR");
}


function ass5task5(){
var a=4;
for(var i=1; i<=10; i++){

  document.write(a+"x "+i+" = "+a*i+" <br>");
}

}


function ass5task6(){


  var celsius=25;

  var Result=(celsius * 9/5) +32;
  var result=Math.round((celsius * (9/5)) + 32);
  var Fahrenheit=70;
  var result1=(Fahrenheit -32)* 5/9;
  //var result2=Math.round((Fahrenheit -32)* 5/9);

  document.write(celsius+"\u00B0C is "+result+"\u00B0F <br>");
  document.write(Fahrenheit+"\u00B0F is "+result1+"\u00B0C");
}


function ass5task7(){

var item1_Price= 650;
var item2_Price= 100;
var item1_Quantity=3;
var item2_Quantity=7;
var shipCharge=100;
var item1_total=item1_Price*item1_Quantity;
var item2_total=item2_Price * item2_Quantity;
var Total=item1_total+item2_total+shipCharge;

document.write( "<h1>SHOPPING CART</h1> <br/> <br/> price of item 1 is "+item1_Price+"<br/> quantity of item 1 is "+item1_Quantity+"<br/> price of item 2 is "+item2_Price+"<br/>  quantity of item 2 is "+item2_Quantity+"<br/> shipping charges "+shipCharge+"<br/><br/> Total cost of your order is "+Total+"<br/>"  );

}

function ass5task8(){

 var total= 980;
 var marks= 804;
 var percent= marks/total*100;
 
 document.write("<h1>Marks sheet</h1> <br/> <br/> total marks:"+total+"<br/> marks obtained:"+marks+"<br/> percentage:"+percent+"%<br/>")



  
}

function ass5task9(){

var us$=10;
var riyal=25;
var conv_rate_$=104.80;
var conv_rate_riyal=28;

var total_$_in_pkr=us$*conv_rate_$;
var total_riyal_in_pkr=riyal*conv_rate_riyal;
var result=total_riyal_in_pkr+ total_$_in_pkr;

document.write("<h1>Currency in PKR</h1><br><br>Total Currency in PKR: "+result);


}


function ass5task10(){

var a=2;
var result=(((a+5)*10)/2);
alert(result);

}

function ass5task11(){

   var cur_year=2020;
   var birthYear=1998;
   var age=cur_year-birthYear;
   var last=age-1;

   document.write("<h1>Age Calculator</h1><br><br> Current Year: "+cur_year+"<br>Birth Year: "+birthYear+"<br>Your Age is: "+age);
   document.write("<br>They are either "+last+" or "+age+" years old");
}

function ass5task12(){

  var radius=20;
  var pie=3.142;
  var circum=2*pie*radius;
  var area=pie * radius*radius;
  
  document.write("<h1>The Geometrizer</h1> <br><br> Radius of a circle is: "+radius+"<br> The circumference is :"+circum+"<br> The area is: "+area+"")

}


function ass5task13(){

 var snack="Chocolate chip";
 var age=15;
 var maximun_age=65;
 var snacks_per_day=3;
 var dif_age=maximun_age-age;
 var last_ripe=dif_age*snacks_per_day;

 document.write("<h1>The Lifetime Supply Calculator</h1><br><br>Favourite Snack: "+snack+"<br>Current age: "+age+"<br>Estimated Maximum Age: "+maximun_age+"<br>Amount of snacks per day: "+snacks_per_day+"<br>You will need "+last_ripe+" "+snack+"  to last you until the ripe old age of "+maximun_age);
}


function ass6task1(){

var a=10;
document.write("Result: <br>The value of a is: "+a+"<br>....................");
a=++a;
document.write("<br><br>The value of ++a is: "+a+"<br>Now the value of a is: "+a);
a=a++;
document.write("<br><br>The value of a++ is: "+a);
a=++a;
document.write("<br>Now the value of a is: "+a);
a=--a;
document.write("<br><br>The value of --a is: "+a+"<br>Now the value of a is: "+a);
a=a--;
document.write("<br><br>The value of a-- is: "+a);
a=--a;
document.write("<br>Now the value of a is: "+a);
}

function ass6task2(){
  var a=2;
  var b=1;
  var x=--a;
  var y=--b;
  var z=++b;
  var w=b--;
  var result=x - y + z + w;
  document.write("The value of a is : "+a+"<br>The value of b is : "+b+"<br> Result is :"+result);


  a=2;
  a=--a;
  document.write("<h2>--a</h2>"+a);
  a=2;
  a=--a;
  b=1;
  b=--b;
  c=a-b;
  document.write("<br><br><h2>--a - --b</h2>"+a+" - "+b+" = "+c);
  b=1;
  b=--b;
  a=2;
  a=--a;
  var t=1;
  t=++t;
  d=a-b+t;
  document.write("<br><br><h2>--a - --b + ++b</h2>"+a+" - "+b+ " + "+t+ "= "+d);
  a=2;
  a=--a;
  b=1;
  b=--b;
  var g=1;
  g=++g;
  var p=1;
  p=p--;
  var r=a-b+g+p;
  
  document.write("<br><br><h2>--a - --b + ++b + b--</h2>"+a+" - "+b+ " + "+g+" + "+p+" = "+r);
  

 }

 function ass6task3(){

  var username=prompt("Enter your name :");
  alert("Welcome to the world of code "+username);
 }


 function ass6task4(){
var default1=5;
var number = parseInt(prompt("Enter a number for Multiplication :" , default1));
for(var i=1; i<=10; i++){

  document.write(number+"x "+i+" = "+number*i+" <br>");
}

}


function ass6task5(){

  var first=prompt("Enter first subject name: ");
  var second=prompt("Enter second subject name: ");
  var third=prompt("Enter third subject name: ");
  var first_marks=100;
  var second_marks=100;
  var third_marks=100;
  var tot_marks=first_marks+second_marks+third_marks;
  var obt_first_marks=parseInt(prompt("Enter first subject obtained marks :"));
  var obt_second_marks=parseInt(prompt("Enter second subject obtained marks :"));
  var obt_third_marks=parseInt(prompt("Enter third subject obtained marks :"));
  var tot_obt_marks=obt_first_marks+obt_second_marks+obt_third_marks;
  var first_per=obt_first_marks/first_marks*100;
  var second_per=obt_second_marks/second_marks*100;
  var third_per=obt_third_marks/third_marks*100;
  var tot_per=tot_obt_marks/tot_marks*100;
  document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>percentage</th></tr><tr><td>"+first+"</td><td>"+first_marks+"</td><td>"+obt_first_marks+"</td><td>"+first_per+"%</td></tr><tr><td>"+second+"</td><td>"+second_marks+"</td><td>"+obt_second_marks+"</td><td>"+second_per+"%</td></tr><tr><td>"+third+"</td><td>"+third_marks+"</td><td>"+obt_third_marks+"</td><td>"+third_per+"%</td></tr></table>");
  document.write("\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 <b>"+tot_marks+"</b> \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0  <b>"+tot_obt_marks+"</b> \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0  <b>"+tot_per+"%</b>");
}

function ass7task1(){


  var city= prompt("Enter a city name :");
  if (city== "Karachi" || city=="karachi") {
      alert("Welcome to city of lights");
  }else{
      alert("Welcome to your city "+city);
  }
}

function ass7task2(){

  var gender=prompt("Enter your gender");
  if (gender== "male" || gender== "Male") {
          alert("Good Morning Sir");
  }else if(gender=="female" || gender=="Female"){
      alert("Good Morning Madam.");
  }else{
      alert("Your gender is not found");
  }
}


function ass7task3(){

  var signal=prompt("Enter color of road signal :");
  if (signal=="Red" || signal=="red") {
      alert("Must Stop");
  }else if(signal=="Yellow" || signal=="yellow"){
      alert("Ready to move");
  }else if(signal=="Green" || signal=="green"){
      alert("Move now");
  }
}

function ass7task4(){

  var fuel=parseInt(prompt("Enter your remaining fuel in car:"));
  if (fuel< 0.25) {
      alert("Please refill the fuel in your car");
  }else{
      alert("Drive safe take care");
  }

}

function ass7task5(){

  var a = 4;
  if (++a === 5){
  alert("given condition for variable a is true "+a); 
}

  var b = 82;
  if (b++ === 82){
  alert("given condition for variable b is true "+b); }


  var c = 12;
  if (c++ === 12){ 
          alert("condition 1 is true"); }
  if (c === 13){ 
      alert("condition 2 is true"); }
  if (++c < 15){ 
      alert("condition 3 is true"); }
  if(c === 14){ 
      alert("condition 4 is true"); }

  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){ 
      alert("The cost equals");
}


  if (true){ 
      alert("True"); 
  }
  if (true){ 
      alert("False"); 
  }


  if("car" < "cat"){
  alert("car is smaller than cat"); 
}

}


function ass7task6(){
  var first_marks=parseInt(prompt("Enter first subject total marks :"));
  var second_marks=parseInt(prompt("Enter second subject total marks :"));
  var third_marks=parseInt(prompt("Enter third subject total marks :"));
  var tot_marks=first_marks+second_marks+third_marks;
  var obt_first_marks=parseInt(prompt("Enter first subject obtained marks :"));
  var obt_second_marks=parseInt(prompt("Enter second subject obtained marks :"));
  var obt_third_marks=parseInt(prompt("Enter third subject obtained marks :"));
  var marks_obtained=obt_first_marks+obt_second_marks+obt_third_marks;
  var percentage=marks_obtained/tot_marks*100;

  if(percentage>=80){
          document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : A-one</h3><h3>Remarks : Excellent</h3><br>");
  }else if(percentage>=70){
          document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : A</h3><h3>Remarks : Good</h3><br>");
  }else if(percentage>=60){
          document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : B</h3><h3>Remarks : You need to improve</h3><br>");
  }else{
          document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : Fail</h3><h3>Remarks : Sorry</h3><br>");
  }
}


function ass7task7(){

  var secret_no=4;
  var user_guess=parseInt(prompt("Guess the secret number ranging from 1 to 10"));
  
  if(user_guess==4){
      alert("Bingo! Correct answer");

  }else if(user_guess==++secret_no){
      alert("Close enough to the correct answer");
      ass7task7();
  }else{
      alert("Try again you are not so close yet");
      ass7task7();
  }


}

function ass7task8(){
  var n=3;
  var user=parseInt(prompt("Enter a number which is divisible by 3"));
  if( !(n % user) ){
      alert("Good Job");
  }else{
      alert("Try again");
      ass7task8();
  }
}

function ass7task9(){
var num=parseInt(prompt("Enter a number :"));
  if ( num % 2 == 0) {
  alert('You typed an Even Number');
}else{
  alert('You typed an Odd Number');
}
}

function ass7task10(){

  var temp=parseInt(prompt("Enter temperature of your area :"));
  if (temp>40) {
      alert("It is too hot outside.");
  }else if(temp>30){
      alert("The Weather today is Normal.");
  }else if(temp>20){
      alert("Todays Weather is cool.");
  }else if(temp>10){
      alert("OMG! Todays weather is so Cool.");
  }else{
      alert("Its too cold here im freezing");
  }
}


function ass7task11(){
  var fisrt_num=parseInt(prompt("Enter first number :"));
  var second_num=parseInt(prompt("Enter second number :"));
  var opera=prompt("Enter the operator");
  if(opera=="+"){
      alert(fisrt_num+second_num);
  }else if(opera=="-"){
      alert(fisrt_num-second_num);
  }else if(opera=="*"){
      alert(fisrt_num*second_num);
  }else if(opera=="/"){
      alert(fisrt_num/second_num);
  }else if(opera=="%"){
      alert(fisrt_num%second_num);
  }else{
      alert("This is not an operator");
  }
}


function ass8task1(){
  var character=prompt("enter a number or character :");

if (!isNaN(character * 1)){
      alert('character is numeric');
  }else{
      if (character == character.toUpperCase()) {
          alert ('upper case true');
      }
      if (character == character.toLowerCase()){
          alert ('lower case true');
      }

}
}

function ass8task2(){
  var val1=prompt("Enter first number :");
  var val2=prompt("Enter second number :");

  if(val1>val2){
      alert(val1+" is the larger number in the two given values");
  }else if(val2>val1){
      alert(val2+" is the larger number in the two given values");
  }else if(val1==val2){
      alert("Both numbers are equal");
  }
}


function ass8task3(){

  var user_val=prompt("Enter any number :");
  if (user_val > 0) {
  alert("You typed a positive number");
  }else if(user_val < 0){
      alert("You typed a negative number ");
  }
  else{
      alert("You typed zero");
  }
}


function ass8task4(){
var firstChar=prompt("Enter a character :");
if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
      
      alert("The character is a Vowel");
  }else{
      alert("The character is a Consonant");
  } 

}


function ass8task5(){
  var pass="welcome123";
  var a;
  var get_pass=prompt("Enter your password :" ,a);

  if (get_pass==="") {
      alert("Please enter your password");
      ass8task5();
  }else if(get_pass==pass){
      alert("Correct The password you entered matches the original password");
  }else{
      alert("Incorrect password");
      ass8task5();
  }
  
}



function ass8task6(){
  var greeting;
  var hour = 13;
  if (hour < 18) {
  greeting = "Good day";
  alert(greeting);
  } 
   else{
  greeting = "Good evening";
  alert(greeting);
   }

}



function ass8task7(){
  var time=prompt("Enter time in 24 hours clock format like: 1900");
  if (time>=0000 && time<1200) {
      alert("Good Morning");
  }else if(time>=1200 && time<1700){
      alert("Good Afternoon");
  }else if(time>=1700 && time<2100){
      alert("Good Evening");
  }else if(time>=2100 && time<=2359){
      alert("Good Night");
  }
}



function ass9task1(){

  var StudentNameLiteral= {};

  alert("using JS literal notation \n var StudentNameLiteral= {};");
}


function ass9task2(){
var student_name = new Array();
  
  alert("using JS object notation \n var student_name = new Array();");
}

function ass9task3(){
var stringarry=["john","paul","pablo"];
alert("var stringarry=['john','paul','pablo'];");

}

function ass9task4(){
var intarry=[2,3,45,5];
alert("var intarry=[2,3,45,5];");
}
function ass9task5(){
var boolarray=[true, false ,false , true ];
alert("var boolarray=[true, false ,false , true ];");
}
function ass9task6(){
var mixedarray =["data",2,2.2,true];
alert("var mixedarray =['data',2,2.2,true];");
}

function ass9task7(){

var qualification= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var j=0;
document.write("Qualifications: <br><br>");
for(var i=1; i<=qualification.length; i++){
document.write(i+") "+qualification[j]+"<br>");
j++;
  }


}



function ass9task8(){


var studename=["juandi","sheri","Hammad"];
var stdmarks=[240,320,400];

for(var j=0;j<studename.length;j++){
document.write("Score of "+studename[j]+" is "+stdmarks[j]+" Percentage : "+(stdmarks[j]*100)/500+"% <br>");
}
}


function ass9task9(){

var colorname=["red","blue","green"];
document.write(colorname+"<br>");
var user=prompt("Add color start :");
colorname.unshift(user);
document.write("Add "+user+"in start :"+colorname);
var end_val=prompt("Add Color end :");
colorname.push(end_val);
document.write("<br>Add "+end_val+" Color in end :"+colorname);
var one_val=prompt("add first color for start :" );
var two_val=prompt("add second color for start :" );


colorname.unshift(two_val);
colorname.unshift(one_val);
document.write("<br>Added two more color in the begining of array : "+colorname);
colorname.shift(colorname);
document.write("<br>After deleted the first color : "+colorname);
colorname.pop(colorname);
document.write("<br>After deleted the last color : "+colorname);
var colorr=prompt("Color name for add :");
var indexOfColor=prompt("Which index you want "+colorr+" :");
colorname.splice(indexOfColor, 0,colorr);
document.write("<br>Your desired index color : "+colorname);
var del_color=prompt("how many color do you want to delete :");
var arr=[];
if(del_color>colorname.length){
alert("You can delete below three ");
  var del_color=prompt("how many color do you want to delete :"); 
}else{
  var j=1;
  for(var i=0;i<del_color;i++){
      arr[i]= prompt("Enter "+j+" value :");
      j++;
  }
  

  for (var i = arr.length -1; i >= 0; i--){
      
      colorname.splice(arr[i],1);   
  }
 

  // for(var i=0; i<=del_color.length;i++){

  //    arr[i]= prompt("Enter "+j+" value :");
  //    colorname.splice(arr[i], 1);
  //    j++;
  // }
  document.write("<br>Updated array : "+colorname);
}

}



function ass9task10(){
  var stdScores=[320,230,480,120];
document.write(stdScores+"<br>");
document.write("In ascending  order <br>"+stdScores.sort())

}

function ass9task11(){

  var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

  var selectedCities=[];
  document.write("<h2>Cities list :</h2>"+cities);
  cities.splice(0,2);

  selectedCities.unshift(...cities);


  document.write("<br><h2>Selected cities list:</h2>"+selectedCities);

}


function ass9task12(){

  var arr = ["This", "is", "my", "cat"];

  document.write("<h2>Array:</h2><br>"+arr);

  var a=arr.join(" ");

  document.write("<h2>string:</h2><br>"+a);    

}

function ass9task13(){

  var fifo = new Array();

  fifo.push("keyboard");
  fifo.push("mouse");
  fifo.push("printer");
  fifo.push("monitor");

  document.write("<h2>Devices:</h2>"+fifo+"<br><br>");
  for(var i =1;i<=4;i++){
  document.write("Out:<br>"+fifo.shift()+"<br>");
}


}



function ass9task14(){

  var lifo = new Array();

  lifo.push("keyboard");
  lifo.push("mouse");
  lifo.push("printer");
  lifo.push("monitor");

  document.write("<h2>Devices:</h2>"+lifo+"<br><br>");
  for(var i =1;i<=4;i++){
  document.write("Out:<br>"+lifo.pop()+"<br>");
}


}


// function ass9task15(){
//     var select = document.getElementById("select");

//     var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
//     document.write("<select>");
//  for(var i=1; i<=arr.length; i++){

//              document.write("<option value='default'>"+arr[i]+"</option>");
// }
// document.write("</select>");
// }



function ass9task15()
{
  document.write("<select id='s'> <option> --Select Option-- </option> </select> ");
 var x = document.getElementById("s");
var arr=[];

  var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

  for(var i=0;i<arr.length;i++){
     

      var option = document.createElement("option");
     
       option.text=arr[i];

      x.add(option);
    }


}


function ass10task1(){

  var twoDee = [[],[],[]];

  alert("Empty Multi dimentional Array : \n  var twoDee = [[],[],[]];");

}


function ass10task2(){

var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for (var i = 0; i <arr.length; i++) {
  var a=arr[i].join(" ");
  document.write(a+"<br>");
  
}

}

function ass10task3(){

  for(var i=1; i<=10; i++){
      document.write(""+i+"<br>");
      }
}


function ass10task4(){


  var number=prompt("Enter a number to show its multiplication table");
  var length=prompt("Enter length multiplication table");
  document.write("Multiplication table of "+number+"<br>length "+length+"<br>");
  for(var i=1; i<=length; i++){
  
  document.write(number+"x "+i+" = "+number*i+" <br>");
}


}


function ass10task5(){

var fruits= ["apple", "banana", "mango","orange","strawberry"];

for(var i=0; i<5; i++){

  document.write(""+fruits[i]+"<br>");

}

for(var i=0; i<5; i++){

document.write("<br>Element at index "+i+" is "+fruits[i]);

}

}


function ass10task6(){
  var a=1;
  var count = new Array(15);
  var j=0;
  for(var i=1;i<=count.length;i++){
      count[j]=a++;
      j++;
  }
document.write("<h5>Counting:</h5>"+count);

  var b=10;
  var rev_count = new Array(10);
  var j=0;
  for(var i=1;i<=rev_count.length;i++){
      rev_count[j]=b--;
      j++;
  }
document.write("<br><h5>Reverse Counting:</h5>"+rev_count);

var even= [];
var odd= [];
for(var i=0;i<=20;i++){
  if (i % 2 == 0) {
      even.push(i);

  }else{
      odd.push(i);
  }
}
document.write("<br><h5>Even:</h5>"+even);
document.write("<br><h5>Odd:</h5>"+odd);


var f=2;
var f_series= new Array(10);
var j=0;
for(var i=1;i<=f_series.length;i++){
f_series[j]=f*i+"k";
      j++;
  }
document.write("<br><h5>Series:</h5>"+f_series);


}

function ass10task7(){

var a =["cake", "apple pie", "cookie", "chips", "patties"];
var user_value=prompt("Welcome to ABC Bakery. What do you want to order sir/madam");
var found;
var indexOfOrder;
for(var i=0;i<a.length;i++){

  if (a[i]==user_value) {
      found=a[i];
      indexOfOrder=i;
  }
}if (!found) {
  document.write("We are sorry. "+user_value+" is <b>not available</b> in our bakery");

}else{
document.write(found+" is <b>available</b> at index "+indexOfOrder+" in our bakery");    
}

//alert("found : "+found+" indexOfOrder "+indexOfOrder);

}

function ass10task8(){
  var array = [24,53,78,91,12];
var greatest;
var indexOfGreatest;
for (var i = 0; i < array.length; i++) {
  if (!greatest || array[i] > greatest) {
    greatest = array[i];
    indexOfGreatest = i;
  }
}
document.write("Array items: "+array+"<br>The largest number is "+greatest);
}


function ass10task9(){
  var array = [24,53,78,91,12];
var greatest;
var indexOfGreatest;
for (var i = 0; i < array.length; i++) {
  if (!greatest || array[i] < greatest) {
    greatest = array[i];
    indexOfGreatest = i;
  }
}
document.write("Array items: "+array+"<br>The smallest number is "+greatest);
}


function ass10task10(){

var a =5;

var arr = new Array(20);
var j=0;
for(var i=1;i<=20;i++){

arr[j]=a*i;
j++;    
}

document.write(arr);
}

function ass(){
	alert("working");
}

function ass21_25_1(){

var firstName=prompt("Enter your first Name : ");
var lastName=prompt("Enter your last Name : ");

var fullName=firstName+" "+lastName;
alert("Welcome "+fullName);

}

function ass21_25_2(){


	var fav=prompt("Enter your favourite mobile phone model :");
	var result=fav.length;
	document.write("Your favorite phone is : "+fav+" <br>Length of string : "+result);


}

function ass21_25_3(){
var text= "Pakistani";
var result=text.indexOf("n");
document.write("String : "+text+" <br>Index of 'n': "+result);

}

function ass21_25_4(){
var text= "Hello World";
var result=text.lastIndexOf("l");
document.write("String : "+text+" <br>Last Index of 'l': "+result);

}


function ass21_25_5(){
var text= "Pakistani";
var result=text.charAt(3);

document.write("String : "+text+" <br>Character at Index 3: "+result);

}


function ass21_25_6(){

var firstName=prompt("Enter your first Name : ");
var lastName=prompt("Enter your last Name : ");

var fullName=firstName.concat(" ",lastName);
alert("Welcome "+fullName);

}



function ass21_25_7(){

var city="Hyderabad";

var result=city.replace("Hyder","Islam");

document.write("City : "+city+" <br>After replacement : "+result);

}


function ass21_25_8(){

var message = "Ali and Sami are best friends. They play cricket and football together.";

var result=message.replace(/and/g, "&");

alert(result);

}


function ass21_25_9(){

var numString="472";
var onlyNum=472;
var result=Number(numString);
var type1=typeof(numString);
var type2=typeof(onlyNum);

document.write("Value: "+result+" <br>Type: "+type1+"<br>Value: "+onlyNum+" <br>Type: "+type2);

}

function ass21_25_10(){

var userInput=prompt("type anything in Lowercase letter :");
var result=userInput.toUpperCase();
document.write("User input : "+userInput+" <br>Upper case : "+result);

}


function ass21_25_11(){

var userInput=prompt("type anything in Lowercase letter :");
var result=userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write("User input : "+userInput+" <br>Title case : "+result);

}


function ass21_25_12(){

var num=35.36;
var result=parseInt(num.toString().replace('.', ''));
document.write("Number : "+num+" <br>Result : "+result);


}


function ass21_25_13(){

var username=prompt("Enter your username : ");
if(/^[a-zA-Z0-9- _]*$/.test(username) == false){
    alert("Please enter a valid username");
    ass21_25_13();
}else{
	alert("Welcome "+username);
}

}


function ass21_25_14(){

var a =["cake", "apple pie", "cookie", "chips", "patties"];
var user_value=prompt("Welcome to ABC Bakery. What do you want to order sir/madam");
var rr=user_value.toLowerCase();
var found;
var indexOfOrder;
for(var i=0;i<a.length;i++){

    if (a[i]==rr) {
        found=a[i];
        indexOfOrder=i;
    }
}if (!found) {
    document.write("We are sorry. "+user_value+" is <b>not available</b> in our bakery");

}else{
document.write(found+" is <b>available</b> at index "+indexOfOrder+" in our bakery");    
}


}


function ass21_25_15(){

var p=prompt("Enter your password :");
if (p.length < 6) {
	document.write("Entered password : "+p+" <br>Your password must be at least 6 characters<br>Please enter a valid password");
        
    }
    else if (!isNaN(p.charAt(0))) {
    	document.write("Entered password : "+p+" <br>Your password should not start with a number<br>Please enter a valid password");
         
    }
    else if (p.match(/^[0-9a-zA-Z]+$/)) {
    	document.write("Entered password : "+p+" <br>Your password is in correct format<br>Format :/^[0-9a-zA-Z]+$/");
        
    }
    
}

function ass21_25_16(){

	var university = "University of Karachi";

	var result= university.split('');
	for(var i=0;i<result.length;i++){
		document.write(result[i]+"<br>");

	}
	
}

function ass21_25_17(){
	var user_value=prompt("Write a text");
	var result=user_value.substr(-1);
	document.write("User input : "+user_value+" <br>Last character of input : "+result);
}

function ass21_25_18(){
	var temp="The quick brown fox jumps over the lazy dog";
	var result=(temp.match(/the/gi) || []).length;
	document.write("Text : "+temp+" <br>There are "+result+" occurrences of word 'the'");
}


function ass26_30_1(){

var num=prompt("Enter a positive number for e.g: 3.123");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("number : "+num+"<br>round off value : "+round+"<br>floor value : "+floor+"<br>ceil value : "+ceil);



}


function ass26_30_2(){

var num=prompt("Enter a negative number for e.g: -2.673");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("number : "+num+"<br>round off value : "+round+"<br>floor value : "+floor+"<br>ceil value : "+ceil);



}


function ass26_30_3(){

	var value=-4;
	var result=Math.abs(value);
	document.write("The absolute value of "+value+" is "+result);
}


function ass26_30_4(){

	var result=Math.floor( Math.random() * 6 );
	document.write("Random dice value : "+result);
	var result=Math.floor( Math.random() * 6 );
	document.write("<br>Random dice value : "+result);
}



function ass26_30_5(){

	var result=Math.floor( Math.random() * 2 );
	document.write("Random coin value heads: "+result);
	var result=Math.floor( Math.random() * 2 );
	document.write("<br>Random coin value tails : "+result);
}


function ass26_30_6(){
	var rand=Math.floor(Math.random() * 100); 
	document.write("random number between 1 and 100 : "+rand);
}


function ass26_30_7(){

	var user_weight=prompt("Enter your weight in kilograms :  ");
	var result=user_weight.replace(/\D/g,'');
	document.write("The weight of user is : "+result+" kilograms");
}


function ass26_30_8(){

	var rand=Math.floor(Math.random() * 10); 
	var pro=parseInt(prompt("Enter a number between 1 to 10"));
	if (pro==rand) {
		alert("Congratulation your guess is correct");
	}else{
		alert("Try again ");
		ass26_30_8();
	}
}

function ass31_34_1(){
	var d= new Date();
	document.write(d);

}

function ass31_34_2(){
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
alert("The current month is " + monthNames[d.getMonth()]);


}


function ass31_34_4(){
	var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";



var n = weekday[d.getDay()];

alert(n);
}


function ass31_34_4(){
	var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";



var n = weekday[d.getDay()];

if (n=="Sat" || n=="Sun") {
alert("Its Fun day");	
}else{
	alert("Stress day");
}


}


function ass31_34_5(){

	var date= new Date();
	var onlyDate=date.getDate();
	if (onlyDate>15) {
		document.write("Last days of the month");
	}else{
		document.write("First fifteen days of the month");
	}
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  //var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes;
}

function ass31_34_6(){

	var d = new Date();
	var mili=d.getTime();

	var minutes=millisToMinutesAndSeconds(mili);
	document.write("Current date : "+d+"<br>Elapsed Time: "+mili+"<br>Elapsed Minute: "+minutes+"<br>");

}

function ass31_34_7(){
var d = new Date();
var hour= d.getHours();
	if (hour>12) {
		alert("Its PM");
	}else{
		alert("Its AM");
	}
} 


function ass31_34_8(){
var laterDate = new Date(2020,12,0); 
document.write("Later date: "+laterDate);

}

function ass31_34_9(){

var ramzan = new Date(2020,3,24);
var d = new Date(2020,5,15);

var diffTime = Math.abs(d - ramzan);
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

document.write(diffDays+" days have passed since 1st Ramadan,2020");

}


function ass31_34_10(){
var now = new Date();
var start = new Date(2020,0,1);
var dif = now.getTime() - start.getTime();

var Seconds_from_T1_to_T2 = dif / 1000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
document.write("On reference date "+now+" <br>"+Seconds_Between_Dates+" seconds had passed since begining of 2020");

}

function ass31_34_11(){
var cur = new Date();

document.write("Current date : "+cur);
var d = new Date();

d.setHours(d.getHours() - 1);
document.write("<br>1 hour ago, it was "+d);

}


function ass31_34_12(){
var cur = new Date();
var d = new Date();
d.setFullYear(d.getFullYear() - 100);
alert("Current date :"+cur+"\n100 years back, it was "+d);

}

function ass31_34_13(){

	var age=parseInt(prompt("Enter your age : "));
	var d = new Date();
	var birth=d.getFullYear()-age;
	document.write("Your age is "+age+"<br>Your birth year is "+birth);
}


function ass31_34_14(){

	var cust_name="ABC Customer";
	var month="february";
	var unit=410;
	var per_unit=16;
	var Net_amount_payable=unit*per_unit;
    var surcharge=350;
    var Gross=Net_amount_payable+surcharge;

    document.write("<h1>K-Electric Bill</h1><br>Customer Name: <b>"+cust_name+"</b><br>Month: "+month+"<br>Number of units: "+unit+"<br>Charges per unit: "+per_unit+"<br><br>Net Amount Payable (within Due Date): "+Net_amount_payable+"<br>Late payment surcharge: "+surcharge+"<br>Gross Amount Payable (after Due Date): "+Gross);

}

function ass35_38_1(){

var d = new Date();
document.write(d);

}





function ass35_38_2(firstname,lastname){

    return firstname + lastname;
}
function chap35to38ques2(){

    var fname = prompt("enter first name");
    var lname = prompt("enter last name");

    alert("Hello " + ass35_38_2(fname,lname));

}

function ass35_38_3(num1,num2){

    return num1 + num2;
}

function chap35to38ques3(){

    var num1 = +prompt("enter first num");
    var num2 = +prompt("enter second num");

    alert(ass35_38_3(num1,num2));

}

function ass35_38_4(n1,n2,operator){

    var num1 = +prompt("enter first num: ");
    n1 = num1;
    var num2 = +prompt("enter second num: ");
    n2 = num2;
    var op = prompt("enter operator");
    operator=op;
    var result= 0;

     if(operator === '+'){
        result = num1 + num2;
        return alert(result);
    }else if(op === '-'){
        result = num1 - num2;
        return alert(result);
    }else if(op === '*'){
        result = num1 * num2;
        return alert(result);
    }else if(op ==='/'){
        result = num1 / num2;
        return alert(result);
    }else if(op ==='%'){
        result = num1 % num2;
        return alert(result);
    }else{
        return "invalid operator";
    }
}


function SqrOfArg(num){
    var sqr = 0;
    sqr = num * num;
    return sqr;
}

function ass35_38_5(){
    var num = +prompt("enter number to find its square");
    alert(SqrOfArg(num));
}



function factorial(n){
  var answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
function ass35_38_6(){
var n = 4;
answer = factorial(n)
alert("The factorial of " + n + " is " + answer);
}


function ass35_38_7(){
var val1=parseInt(prompt('Enter starting point for counting'));
var val2=parseInt(prompt('Enter ending point for counting'));
if (val1<val2) {
for(var i=val1;i<=val2;i++){

	document.write(i+"<br>");
}
}else{
	for (var i = val1; i >=val2; i--){



	document.write(i+"<br>");
}
}
}

function hyp(base,perp){

    function sqr(x){

        return x*x;
    }

    return Math.sqrt(sqr(base) +sqr(perp));
}

function ass35_38_8(){

    var base = +prompt("enter base value");
    var perpendicular = +prompt("enter perpendicular value");
    var result = hyp(base,perpendicular);
    alert(result);
}


function area(w,h){

    var A  = w * h;
    return A;
}

function ass35_38_9(){

    var width = 4;
    var height = 5;
    document.write("Argument as value : " + area(3,4) + "<br/>");
    document.write("Argument as variable : " + area(width,height));

} 

function calcCircum(r){
    pi = 3.142
    circum = 2*pi*r;
    return circum;

}

function calcArea(r){
    pi = 3.142
    area_circle = pi*r*r;
    return area_circle;

}

function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
// Check whether the string is empty or not
	if(cstr==="") {
		console.log("Nothing found!");
		return false;
	}
// Check if the length of the string is even or odd 
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
// If the length of the string is 1 then it becomes a palindrome
		if (cstr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
// If the length of the string is odd ignore middle character
			ccount = (cstr.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}
function ass35_38_10(){
check_Palindrome('nurses run');
check_Palindrome('fox');
}



function ass35_38_11(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }


    return str.join(" ");
    
}
function abc(){
alert(ass35_38_11( 'the quick brown fox'));
}

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
function ass35_38_12(){
alert(find_longest_word('Web Development Tutorial'));
}

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
function ass35_38_13(){
alert("Number of occurrences of o is "+char_count('w3resource.com', 'o'));
}

function ass35_38_14(){

    radius = +prompt("enter radius");
    document.write("The circumference of circle is : " + calcCircum(radius) + "<br/>");
    document.write("The area of circle is : " + calcArea(radius));

}







//========================================================
// ==========********* Chap 38 to 42 ********=============
//========================================================

// Q1. Write a custom function power ( a, b ), to calculate the value of a raised to b.


    function power(){
        var a = 5;
         var b = 2;
         document.write(a*=b);
     }
     //power();

// Q2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …  
function task2(){
 var year = parseInt(prompt('Enter A year'));
 var check_leep_year;
 if(year % 4 ==0){
    document.write('Your Enterd year ' + year + ' is a leep year.');
 }
 else{
    document.write('Your Enterd year ' + year + ' is not a leep year.');
 }
}

// Q3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

    function area_triangle() {
        var a = 5;
        var b = 8;
        var c = 4;
        var s;
        if (a < 0 || b < 0 || c <0 || (a+b <= c) || 
        a+c <=b || b+c <=a) 
        { 
        document.write("Not a valid triangle"); 
        } 
        else{
            s = (a+b+c)/2; 
            document.write('Area of triangle is ' + Math.sqrt(s*(s-a)*(s-b)*(s-c))); 
        }
    } 
    //area_triangle();


// Q4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
   function task4main(){
    function std_data(eng,math,sci){
      var s = eng + math + sci;
      return s;
    }
    function std_average(s){
      var t = s/3;
      return t;
    }
    function std_percentage(s){
      var perc = (s/300)*100;
      return perc;
    }
    var a = std_data(50,50,50);
    var b = std_average(a);
    var c = std_percentage(a);
    document.write("Obtained Marks: " + a + "<br> Average of Marks:   " + b + 
    "<br> Percentage of Marks: " + c);
  }
  



// Q5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
function task5(){
var letter = ['a','b','c','d'];
var user = prompt('Check array index our arrays are: a,b,c,d');
var c = 0;
for(i=0; i<letter.length; i++){
  var a = letter[i];
  var b = c+i;
  if(user == a ){
    a = user;
    document.write('<br> Index of (' +  a + ') is: ' + b);
  }
}
}


// Q6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function task6(){
str = 'The quick brown fox jumps over the lazy dog';
document.write(str + "<br><br>")
function removeVowels() {
  document.write(str.replace(/[aeiou]/gi, ''));
}
removeVowels();
}

// Q7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count 
  }
 
  console.log(" The occurance are :"+findOccurrences());


// Q8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
function task8main(){
  var city_dist_km = parseInt(prompt('Enter distance between to cities in KM:'));
  document.write("Distance:  " + city_dist_km);
  function meter(){
    var meter  = city_dist_km*1000;
    document.write("<br> Meter:" + meter);
  }
  meter();
  function feet(){
    var feet  = city_dist_km*3280.84;
    document.write("<br> Feet: " + feet);
  };
  feet();
  function inches(){
    var inches  = city_dist_km*39370.1;
    document.write("<br> Inches: " + inches);
  };
  inches();
  function centimeters(){
    var centimeters  = city_dist_km*100000 ;
    document.write("<br> Centimeters: " + centimeters);
  };
  centimeters();
}


//Q9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
function task9(){
  var working_hours = parseInt(prompt('Enter working hours'));
  var over_time;
  var over_time_pay;

  if(working_hours>40){
    over_time = working_hours - 40;
    over_time_pay = over_time * 12.00;
    document.write("Employee overtime pay is" + over_time_pay);
  }
  else{
    document.write("You have to work for more than 40 hours to get over time pay");
    count++;
  }
}


// Q10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
function task10main(){
var note_10 = 10;
var note_50 = 50;
var note_100 = 100;

function cashier(){

  var cash_withdraw = 470;
  document.write("You Will have " + Math.floor(cash_withdraw / 100) + " Hundred Notes ");
  document.write(Math.floor(cash_withdraw % 100 / 50) + " Fifty Notes ");
  document.write(Math.floor(((cash_withdraw % 100) % 50) / 10) + " Ten Notes.");
}
cashier();
}




//======================================================================
// ==========********* Chap 43 to 48 ********===========================
//======================================================================

// Q1. Show an alert box on click on a link.
// Q2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

function alerts(){
  alert('Added To Cart');
}


// Q3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 


function delete_row(){
  var td = event.target.parentNode; 
  var tr = td.parentNode; 
  tr.parentNode.removeChild(tr);
}


// Q4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function mouseaway(my_image){
  my_image.src = "images/bg.jpg";
}
function rollover(my_image){
  my_image.src = 'images/3.jpg';
}


// Q5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


var clicks = 0;
function add() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function rem(){
  clicks -= 1;
  document.getElementById("clicks").innerHTML = clicks;
}



//======================================================================
// ==========********* Chap 49 to 52 ********===========================
//======================================================================


// Q1. Create a signup form and display form data in your web
// page on submission.
  
function submits(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var num = document.getElementById('num').value;
  var pass = document.getElementById('pass').value;

  document.getElementById('form_data').innerHTML='Name: ' + name +
  '<br> Email: ' + email + '<br> Phone: ' + num + '<br> Password: ' + pass;
}


// Q2 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

function readmore(){
  document.getElementById('more').style.display='block';
  document.getElementById('btn1').style.display='block';
  document.getElementById('btn').style.display='none';
}

function readless(){
  document.getElementById('more').style.display='none';
  document.getElementById('btn1').style.display='none';
  document.getElementById('btn').style.display='block';
}

// Q3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


function details(){
  var name = document.getElementById('std_name').value;
  var email = document.getElementById('std_email').value;
  var num = document.getElementById('std_num').value;
  var table = document.getElementById('myTable1');
  var row = table.insertRow(2);
  row.innerHTML=' <td>'+ name +'</td>'+ 
  '<td>'+ email +'</td>'+'<td>'+ num +'</td> ' + 
  "<td><input type='button' value='Delete' onclick='delete_row()'></td>";
}


//======================================================================
// ==========********* Chap 52 to 57 ********===========================
//======================================================================


// Q1 Image Light box With Array

function open_img_box(){
  document.getElementById('model_gallery').style.display = 'block';
  document.getElementById('gallery').style.display = 'none';
}

var img_arr = [
  'images/10.jpg',
  'images/8.jpg',
  'images/6.jpg',
  'images/11.jpg',
  'images/1.jpg',
  'images/2.jpg',
  'images/4.png',
  'images/6.jpg'
];

var img = document.getElementById('model_img');
var i = img_arr.length;
function previous_img(){
  i--;
  img.src = img_arr[i];
  if(i<0){
    i = 7;
    img.src = img_arr[i];
  }
}

function next_img(){
  i++;
  img.src = img_arr[i];
  if(i>7){
    i = 0;
    img.src = img_arr[i];
  }
}

function close_img_model(){
  document.getElementById('model_gallery').style.display = 'none';
  document.getElementById('gallery').style.display = 'block';
}


// Q2 Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
//  On each click on “zoom in”(+) , add 10px in font size of paragraph.
//  And on each click on “zoom out”(-) , minus 10px in font size of paragraph

var p = document.getElementById('para');

function incr_f_size(){
  p.style.fontSize = '30px';
}

function dcr_f_size(){
  p.style.fontSize = '15px';
}




//======================================================================
// ==========********* Chap 58 to 67 ********===========================
//======================================================================

//    ********************     DOM     ************************

// Q1
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.

var d = document.getElementById('main-content');
d.childNodes;
console.log(d);


// iii. Get all elements of class “render” and show their innerHTML
// in browser.

var r = document.getElementsByClassName('render');
console.log(r);

// iv. Fill input value whose element id first-name using javascript.

document.getElementById('first-name').value = 'edvert';

//// v. Repeat part iv for id ”last-name” and “email”.

document.getElementById('last-name').value = 'cullen';

document.getElementById('emaill').value = 'edvert.cullen@gmail.com';


// Q2 use HTML code of question 1 and show the result on browser.


// i. What is node type of element having id “form-content”.

var x = document.getElementById("form-content").nodeType;
console.log(x);


// ii. Show node type of element having id “lastName” and its child node.

var x = document.getElementById("lastName");
x.nodeType;
x.childNodes;
console.log(x)

// iv. Get First and last child of id “main-content”.

var a = document.getElementById('main-content').firstChild;
var b = document.getElementById('main-content').lastChild;
console.log(a,b);

// v. Get next and previous siblings of id “lastName”.

var l = document.getElementById('lastName').previousSibling;
var m = document.getElementById('lastName').nextSibling;
console.log(l,m);

// vi. Get parent node and node type of element having id “email”

var e = document.getElementById('emaill');
e.parentNode;
s = e.nodeType;
console.log(e,s);