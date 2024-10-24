// then() => response 
// catch()
// finally() stores everything

const  promiseOne = new Promise(function(resolve,reject){
   setTimeout(function(){
   console.log("asyn task started");

    resolve();
   },1000)
    
})

promiseOne.then(function(){
    console.log("promiseOne resolved")
})


new Promise(function(resolve,reject){
   setTimeout (function()
   {console.log("asyn task  two started");
    resolve();
},1000)
}).then(()=>
     console.log("promise 2 resolved")
    )


const promiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({userName : "shubham", email : "shubhampatel.com"})
        },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "shubham", password: "1234"})
        }
        else
            reject("ERROR : something went wrong")
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.userName
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("promise either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "javascript", password: "1234"})
        }
        else
            reject("ERROR : JS went wrong")
    },1000)
})

async function consumeFive(){
    try{const response = await promiseFive
    console.log(response);
     }
     catch(error){
        console.log(error);
        
     }
}

consumeFive()

// async function getAllUsers() {
//   try { const respons= await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(respons);
        
 
//      const data = await respons.json()
//      console.log(data);
//     }
//     catch(error){
//         console.log("E: ",error);
        
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error)
)