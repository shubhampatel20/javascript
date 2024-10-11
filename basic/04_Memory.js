 // stack (Primitive ) -> copy of value


 // Heap (Non-Primitive ) -> reference of value
  let myName = "shubham"
  let lastName = myName
  lastName = "Patel"
  console.log(myName);
  console.log(lastName);


  // heap
 let userOne = {
    email  : "google.com",
    upi : "user@ybl"
 }
 let userTwo = userOne

 userTwo.email="userTwo.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
 
  
  


