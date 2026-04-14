// console.log("Likhitha")
// var a = 10
// var b = 20
// if (a > b)
//     console.log(a)
// else
//     console.log(b)

// == -> checks value
// === -> checks data type also
// * -> multiple
// ** -> powers

// var c = "10";
// var d = 10;
// if (c == d) console.log(-1);
// else console.log("Bye");
// if (c===d) console.log(-1);
// else console.log("Bye");
// console.log(c*d);
// console.log(c**d);

// WAP to print a range(n) of prime numbers
// var n = 10;
// for(var i = 1 ; i <= n ; i++){
//     var fc = 0;
//     var num = i;
//     for(var j = 1 ; j <= num ; j++){
//         if(num%j == 0){
//             fc++;
//         }
//     }
//     if(fc == 2){
//         console.log(i);
//     }
// }
// n = 20;
// console.log(n);

// var x = 20;
// var x = 40;
// console.log(x);

// let x = 10;
// x = 50;
// console.log(x);

// const x = 50;
// // x = 80;
// console.log(x);

// userData = [20,"Hello" , 'bye' , 2.8, false, null];
// for(let i = 0 ; i < userData.length ; i++)
//     console.log(userData[i]);

// userData = [20,"Hello" , 'bye' , 2.8, false, null];
// for(let i = 0 ; i < userData.length ; i++)
//     console.log(typeof userData[i]);

// let s = "100";
// let y = 100;
// // if(s === y)
// if(s==y)
//     console.log("same");
// else
//     console.log("Both are not same");
// console.log(s*y);
// console.log(16**3);
// console.log(" ==false);

// newArray = [25,79,4,6]
// console.log(newArray);
// push-> add last
// pop -> remove last
// shift-> remove first
// unshift-> add first

// newArray.push(52);//add last
// newArray.pop(79);
// newArray.pop();//both are removing last element only
// newArray.shift();//remove first element
// newArray.unshift(56);//add in first position
// console.log(newArray);
// const obj = {
//     id : 1,
//     name : "Hello"
// }
// const obj1 = {
//     a : [2 , 5 ,6]
// }
// console.log(obj1.a);
// obj.loc = "Hyderabad";
// console.log(obj.id + " " + obj.name + " " + obj.loc);
// console.log(obj);
// //Arrays with objects

// Data = [
//     {
//         id : 102,
//         name : "Likhitha",
//         marks : 530
//     },
//     {
//         id : 103,
//         name : "Lotus",
//         marks : 560
//     },
//     {
//         id : 104,
//         name : "Hello",
//         marks : 600
//     }
// ]
// console.log(Data);
// console.log(Data[0]);
// console.log(Data[1].name);
//for of -> arrays
// for in -> objects

// function myFun(){
//     // console.log(-1);
//     return -1;
// }
// myFun();
// console.log(myFun());

// console.log(myFun);

// function myFun(num1,num2){
//     return num1-num2;
// }
// function myFun(num1,num2){
//     return num1+num2
// }
// //recently written function is executing(same name)
// console.log(myFun(12,4));

// const x = function myFun(num1,num2){
//     return num1+num2;
// }
// console.log(x(52," hello"));
// console.log(x(12,4));


// function doMath(num1,num2,op){
//     switch(op){
//         case "+" : return "The addition of " +num1+ " and " + num2 + " is " + (num1+num2);
//         case "-" : return "The Subtraction of " +num1+ " and " + num2 + " is " + (num1-num2);
//         case "*" : return "The Multiplication of " +num1+ " and " + num2 + " is " + (num1*num2);
//         case "/" : return "The Division of " +num1+ " and " + num2 + " is " + (num1/num2);
//         case "%" : return "The Modulos(Remainder) of " +num1+ " and " + num2 + " is " + (num1%num2);
//         case "**" : return "The Power of " +num1+ " and " + num2 + " is " + (num1**num2); 
//     }
// }
// console.log(doMath(1,2,"%"));

//Interpolation
let name = "Likhitha";
let age = 22;
console.log(`My name is ${name} and my age is ${age}`);



const doMath = (num1,num2,op)=>{
    switch(op){
        case "+":
            console.log(`The addition of ${num1} and ${num2} is ${num1 + num2} `);
            break;
        case "-":
            console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2} `);
            break;
        case "*":
            console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2} `);
            break;
        case "/":
            console.log(`The division of ${num1} and ${num2} is ${num1 / num2} `);
            break;
        case "%":
            console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2} `);
            break;
        case "**":
            console.log(`The power of ${num1} and ${num2} is ${num1 ** num2} `);
            break;
        default:
            console.log("Please pass a Valid Input");
            break;
    }
}

doMath(5,15,"+");