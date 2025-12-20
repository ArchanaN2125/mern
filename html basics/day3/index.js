console.log('hello world');
var college="KIT";
let number;
const pi=3.14;
console.log(college);
console.log(pi);

// let lang ="javascript"
// let isVerified=true;
// let age=25;
// age="25 years";
// console.log(typeof lang);
// age=Number(age);
// age=String(age);
// console.log(typeof age);
// function greetFromScript(){
//     let number=10;
//     let count=20;
//     // console.log("Total",number+count);
//     return number+count
// }
// var ans= greetFromScript();
// console.log("Answer From script:",ans); 
// function login(){
//     let Username = document.getElementById("Username").value;
//     let password=document.getElementById("password").value;
//     if(Username=="admin"&& password=="admin123"){
//         console.log("username:",Username);
//         console.log("password:",password);
//         alert("Login Successful");
//     }
//     if (password.length<6){
//         alert("Password must be at least 6 character long");
//     }
//     if(Username ===""){
//         alert("username cannot be empty");
//     }
//     else{
//         console.log("username:",Username);

//         console.log("password:",password);
//         alert("Login Failed");
        
//     }
//     if(Username=="admin"){
//         if(password="admin123"){
//             alert("password failed");
//         }
//         else[
//             alert("password failed")
//         ]
//     }
//     else{
//         alert("username failed");
//     }
// }
// function addpronoun(name){
//     let username="Ms."+name;
//     return username;
// }
// let name=addpronoun("Alice");
// console.log(name);
// let name=(username)=>{
//     username="Ms."+username;
//     return username;
// }; 
// console.log(name("Alice"));
// document.addEventListener("mousedown",(event)=>{
    
//     console.log("mouse",event.clientX);
// });
var c=0;
function increMent(){
    c++;
    document.getElementById("display").innerText=c;
    // let n=10;
    // for(let i=1;i<=n;i++){
    //     console.log(i);
    }
function decreMent(){
    c--;
    document.getElementById("display").innerText=c;

} 
function reSet(){
    c=0;
    document.getElementById("display").innerText=c;
}


