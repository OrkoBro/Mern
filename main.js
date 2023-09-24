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
for (let p1 = 1; p1 <= 3; p1++) {

//if()
  for (let j1 = 1; j1 <= 5; j1++) {    
       if (j1==5){ // out off the loop only for child not for parent 
      continue;
    }
    console.log(p1, j1);


  }} 
  // continue end ================================
  