// Imediately Invoked Function Expression(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`db connected two`);
    
}) ();

( (name) => {
    console.log(`db connected two,${name}`);
    
}) ("shubham")