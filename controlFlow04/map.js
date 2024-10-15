const mynumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynumers.map(  (num)  =>  num + 10)

// chaning

// const newNums = mynumers
//                     .map( (num) => num*10 )
//                     .map( (num) => num+1)
//                     .filter( (num) => num>=40)
// console.log(newNums);



// reduce()

// const number = [1,2,3]

// const myTotal = number.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// },7)
// console.log(myTotal);

// by arrow function

const mynum = [1,2,3,4]

const myTotal = mynum.reduce( (acc,curr) => acc+curr, 0)

console.log(myTotal);

const shoppingcart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "java course",
        price : 2999
    }
]

const priceToPay = shoppingcart.reduce( (acc,item)=> acc+item.price,0)
console.log(priceToPay);
