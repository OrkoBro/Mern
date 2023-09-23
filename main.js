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
let obj ={
    name:"Md Ariful islam"
}
obj.nickName??= "Orko";

console.log(obj);


let box = null ?? 20;
console.log(box);

let bc = 10**10;
console.log(bc);


let bd = 10;
    bd**= 10;
console.log(bd);