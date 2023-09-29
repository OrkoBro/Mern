// let Orko = {
//     familyName:"Mohammod Ariful Islam",
//     nickName:"Orko",
// }
// console.log(Orko);// to access the whole object
// Orko.nickName = "baca"

// Orko.FatherName = "Md. Joynal Abedin";
// Orko.MotherName ="Mst. Asia Begom";
// console.log(Orko);
// delete Orko.nickName;
// console.log(Orko);

// console.log ("familyName" in Orko);// to chack Property exists or not 
// // if exists it will return true ortherwise return false  

// let nitPrice = 100.50;
// let ShippingFee = 50.78;
// let payableAmount = nitPrice + ShippingFee;
// document.write(`total amount = ${payableAmount}`); 

// let p = 11/5;
// console.log(p)

// let c = 11%5;
// console.log(c);

// let amar = false; //true and false er khetre kono quetes hobe na 
// let you = +amar;
// console.log(typeof(you));
// console.log(you);

// unary oparator with object 

// let person = {
//     name:"jone",
//     toString:function (){
//         return "22"; ami eita bujhi nai 
//     }

// }
// console.log(+person);
// ami bujhi nai 


// let age = 24;
// ++age;
// age +=1;
// age = age + 1
// console.log(age)

// let weight = 200 ;
// weight = ++weight + 19;
// console.log(weight);

// let weight1 = 200 ;
// weight1 = ++weight + 19;
// console.log(weight);

// let a = "20";
// console.log(typeof(a++));
// // console.log(a++);
// // console.log(a)


// let p = a++ +5 ;
// console.log(p);
// console.log(a);


// let p =  true ;
// let c = p && true ;
// console.log (c);

// let a = true ;
// let b = false ;
// let c = true ;
// let d = true;

// console.log(a || b ||c || d); 

// console.log(!!undefined); // false 
// console.log(!!null); // 
// console.log(!!20); //f
// console.log(!!0); //
// console.log(!!NaN); //
// console.log(!!{}); // f
// console.log(!!''); //
// console.log(!!'OK'); //f
// console.log(!!false); //
// console.log(!!true); //f


// ======only work when the veriable is true ====================== logical && assignment oparetor start ==============
// let p = {
//     name:"javascript"
// }
// console.log(p)   
// console.log(Boolean(p));

// p &&= "hello bro you was true";
// console.log(p)
// ======================= logical && assignment opparetro end ========


// ========== only works null and undifind===== ogical ??= assignment opparetro start ========
// 









// switch statement ==============start =================
// let year = 2016;
// let month = 2;
// let dayCount;

// switch (2) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     dayCount = 31; // 
//     console.log(dayCount);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dayCount = 30;
//     console.log(dayCount);
//     break;
//   case 2:
//     // leap year
//     if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
//       dayCount = 29;
//       console.log(dayCount);
//     } else {
//       dayCount = 28;
//       console.log(dayCount);
//     }
//     break;
//   default:
//     dayCount = -1; // invalid month
//     console.log(dayCount);
// }
// console.log(dayCount)


// let c = 2 + 2 + 2+1;

// switch(c){
//     case 2:
//         console.log("hi orko i am here to litsen you");
//         break;
//     case 5:
//         console.log("brother i am listening you 2nd time");
//         break;
//     case 6:
//         c = "Md. Ariful Islam";
//         console.log(`${c} has been writen useing case 6 `);
//         break;
//     case 7:
//         if (5>4 &&2<5){
//         c = "Orko";
//         console.log(`${c} is new coming pogramar `);
//         }else{
//             console.log("i am over here brother");
//         }
//         break;
//     default:
//         console.log("i didn't get any value");
// }







// // switch statement ============ end =====================



// // condition ==================  while start ===============
// let x = 1; // innitializetion 
// while (x <=10){
//     console.log(`hello ${x}`);
//     x++; // increment 
// }
// // ======================= while loop end ================
// // ======================= do ---while loop start ================
// let xx = 1;
// do{
//     console.log(`${xx} orko vai`);
//     xx++
// }while(xx<=10);
// // ======================= do ---while loop end ================
// // ======================= for loop start ================
// for(let p5 = 1; p5 <=15; p5++){
//     console.log(`${p5} brother i am here`);
// }

// // ======================= for loop end ================



// ==break start ======================
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i == 2) {
//       break;
//     }
//   }

//   for (let p = 1; p <= 3; p++) {


//     for (let j = 0; j <= 3; j++) {
//       console.log(p, j);
//       if (j==2){ // out off the loop only for child not for parent 
//         break;
//       }
//     }
// }
// break end ========================

// continue start ===========================
// for (let p1 = 1; p1 <= 3; p1++) {

// //if()
//   for (let j1 = 1; j1 <= 5; j1++) {    
//        if (j1==5){ // out off the loop only for child not for parent 
//       continue;
//     }
//     console.log(p1, j1);


//   }} 
  // continue end ================================



//return key-word start==============================function============
// function MynFunction(firstN,lastN,NickN){
//   let p = `${firstN} ${lastN} and my nick name is ${NickN}`;
//   console.log(`${p} --------------- this is from function`)
//   return p;
// }

// let returnKey = MynFunction("Mohammod", "Ariful Islam", "Orko");
// console.log(`${returnKey} ------------ this is from return`);
//return keyword end ==============================function============

// function myb(){
//   alert("not only anonymous function work as a callback function");
//   alert("but if you want than maybe normal function can work as callback function");
// }

// function test (abc){
//   abc();
// }
// test(myb);


//default value for parameter ============start=============
// function myFun(firstName ="you did not pass your First Name"){
//       console.log(firstName)
// }
// myFun();
//default value for parameter ============end=============


// three ways to make define function inside an object 
// when you creat a function inside an object then that function is called method of thet object 

// let person1 = {
//       firstname:"mohammod",
//       fullName:"Mohammod Ariufl Islam",
//       nickName:"orko",
//       great(){
//         alert(this.firstname +" "+ this.fullName + " "+ this.nickName);
//       }
// }
// person1.great();


// let person2 ={
//   firstname:"mohammod",
//   fullName:"Mohammod Ariufl Islam",
//   nickName:"orko",
//   great2:   function(){
//         alert("this is secound method of an object");
//       }
// }

// person2.great2();


// let person3 ={
//   firstname:"mohammod",
//   fullName:"Mohammod Ariufl Islam",
//   nickName:"orko",
// }
// person3.great3 = function(){
//     alert("this is 3rd method of an object");
// }
// person3.great3();

//end ==============================================


// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

//  let p = new User("ORKO BAI");

// alert(p.name); // Jack
// alert(p.isAdmin); // false


//======================= about fucntion constructor ===========start ======================
//======================= normal way ===========start ======================

// function myfunction(firstN,lastN){
//   person = {};
//   person.FirstName = firstN;
//   person.LastName = lastN;
//   return person;
// }

// let creatingOject = myfunction("Ariful","islam");
// console.log(creatingOject);

//======================= normal way ===========end ======================
// ===================== using function constructor ------start =============


//function Person(firstName,lastName,nickName){
  
//   this.prothomNam = firstName;
//   this.lastnam = lastName;
//   this.daknam = nickName;
// }

// let x = new Person("Mohammod","Ariful Islam","orko");
// console.log(x);
// ===================== using function constructor ------start =============




// ================= comma opparator ==================
// let c = (10+15 , 15 +20);
// console.log(c);
// ================= comma opparator ==================

// ========================prototype---start================
// let X = {
//   goodwords:"you are good boy.",
//   betterwords:"you are good enough.",
//   bestwords:"you are unbeliveable man."
// }

// let stuend69 = {
//   name:"Md. Ariful Islam",
//   nickName:"orko",
//   __proto__: X
// }
// console.log(stuend69)
//==============================================================




// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = "English";
// let myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather)



// function Mobile (model_no){
//   this.model= model_no;
//   this.price = 3000;
// };

// let apple = new Mobile("Apple");
// let nokia = new Mobile("Nokia");

// apple.color="rosemarry";
// console.log(nokia);


// function x (){
//   var a = 15; // you can't access this variable from function scope 
// }


// if(true){
//  var a = 20 // it wll accessable 
//  let b = 30;// you cant accesse it because it define by let 
// }

// console.log(b);

//return annonimous function --------------start--------------
// function codefather(a){
//   return function (b){
//     return a+b ; 
//   };
// }
// let p = codefather(10);
// console.log(p + "   -------------------------");
// let x = p(20);
// console.log(x);
//return annonimous function ------------end----------------


// let hp = {};
// hp.myFunction = ()=> (10+20+30);
// // console.log (hp.myFunction());   ---- 1 
// console.log(hp["myFunction"]()) //-------2 
// 1 and 2 dose the same work


//===================== Factory function start ==============

// function forAllMobileModel(Model,Ram,storage,Price){
//   return {
//           Modal:Model,
//           Ram:Ram,
//           Storage:storage,
//           Price:()=> Price 
//   }
// }

// let x = forAllMobileModel("Nokia", "6GB","120GB","3000TK");
// console.log(x);

//====================== Factory function end ===================

// ================= to chack property is available or not 
// if (forAllMobileModel.Storage !== "undefined"){
//   document.write("It is Defined");
// }else{                                             ------1st method
//   document.write("It is not defined");
// }

// if('Ram' in x){
//   document.write("Available");
// }else{                                         ----------2nd method 
//   document.write("Not Available");
// }

// if (x.hasOwnProperty("Ram")){
//   document.write("This Property is Available");
// }else{                                               -------3red method
//   document.write("This Property is not Available");

// }