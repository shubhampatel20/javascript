const name ="shubham"
console.log(typeof(name));
const  name1= new String("shubham-patel")
console.log(name1);
console.log( `my name is ${name}` )
console.log(name1.__proto__);
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.indexOf('S'));
const newString= name1.substring(0,7)
console.log(newString);


const anotherString = name1.slice(-13,-7)
console.log(anotherString);

const areEqualInUpperCase = (str1,str2 ) =>
    str1.toUpperCase()===str2.toUpperCase()

console.log(areEqualInUpperCase("ß", "ss")); // true ,but should be false


const areEqual =(str1,str2,locale = "en-US") =>
    str1.localeCompare(str2,locale ,{sensitivity :"accent"})=== 0;
console.log(areEqual("ß", "ss"))






