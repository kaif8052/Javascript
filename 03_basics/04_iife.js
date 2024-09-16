//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)

(function chai(){
    //NAMED IIFE
    console.log(`DB Connected`);
    
} )();

((name) => {
    console.log(`DB is connected to ${name}`);
    
})("kaif");