const user ={
    username :   "kaif",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


  
//ARROW FUNCTION


// function chai(){
//     console.log(this);
    
// } 
// chai()

// const chai = () => {
//     let username = "Sam"
//     console.log(this.username);  //this gives undefined because this keyword only refer to calling context in objects not in functions 
//     console.log(this);           //this gives empty object
    
// }

// chai()


// const addtwo = (num1 , num2) => {
//     return num1+num2              //curly braces use karenge to return keyword use karenge
// }       
// console.log(addtwo(3,4))

//IMPLICIT RETURN IN ARROW FUNCTION

// const add = (num1,num2) => (num1+num2)  //agar parenthesis use karenge to return keyword nahi use karenge
// console.log(add(3,4));


//How to return object in arrow function

const users = () => ({username:"kaif"})
console.log(users());

