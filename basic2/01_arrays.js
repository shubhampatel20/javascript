// const myArr = [0,2,3,4,5,6]

// console.log(myArr);


// array in javascript share shallow copy (references)


// Deep copy => value
 

// Array Methods

//push
//pop

//myArr.unshift(9)// insert in first place
//myArr.shift()
 
// includes give boolean Result 
 
// indexOf

// const newArr = myArr.join() // convert array into strin
// console.log(myArr);
// console.log(typeof newArr);


// slice give a part  array
// splice manipulate array also the portion is deleted from original array


const marvelHeros = ["thor","ironman","hulk"]
const dcHeros = ["flash","superman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)  for two array
// console.log(allHeros);

// const all_Heros = [...marvelHeros,...dcHeros] // for two or more arrays
// console.log(all_Heros);


// const anotherArr= [1,2,[3,4,6],[1,[3,7,8]]]
// const realArr = anotherArr.flat(Infinity)
// console.log(realArr);


console.log(Array.isArray("shubham"));// to check whether it is array or not


console.log(Array.from("shubham"));  // to make array
console.log(Array.from({name :"shubham"}));  //give empty array


let score1 = 300
let score2 =400
let score3 = 500
console.log(Array.of(score1,score2,score3))
