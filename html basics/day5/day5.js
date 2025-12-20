function busbooking(){
   return new Promise((resolve,reject)=>{
    let isBooked=true;
    if(isBooked){
        setTimeout(()=>{
            resolve("Bus Booked Successfully after delay");
        },3000);
       // resolve("Bus Booked Successfully");
    }else{
        reject("bus booked failed");
    }
   });
}
busbooking()
.then((message)=>{
    console.log(message);

})
.catch((error)=>{
   console.log(error);
})