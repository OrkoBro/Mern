let Orko = {
    familyName:"Mohammod Ariful Islam",
    nickName:"Orko",
}
console.log(Orko);// to access the whole object
Orko.nickName = "baca"

Orko.FatherName = "Md. Joynal Abedin";
Orko.MotherName ="Mst. Asia Begom";
console.log(Orko);
delete Orko.nickName;
console.log(Orko);

console.log ("familyName" in Orko);// to chack Property exists or not 
// if exists it will return true ortherwise return false  