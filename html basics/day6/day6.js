function transferMoney(event){
    return new Promise((resolve,reject)=>{
        let isTrue=true;
        if(isTrue)resolve('Process Completed');
        else{
            reject('Not Completed');
        }
    });

}
transferMoney(event).then().catch();
function resolve(msg){
    console.log(msg);
}
function reject(msg){
    consolew.log(msg);
}
//another directly:
transferMoney(event).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg));
//Example for this
function transferMoney(event){
    event.preventDefault();
    let cash = document.getElementById("amount").Value;

    new Promise((resolve,reject)=>{
        document.write("Processing");
        if(cash <= 5000){
            setTimeout(()=> resolve(document.write("transaction succesful"),reject("Tramscation successfull"),1000));
        }else{
            reject("Limit Exceeded");
        }
    });
}
 //then((messg)=>console.log(msg));

 //async and await:
  async function transaction(){
    try{
        await validation();
    await transferMoney(event);
    }
    catch(err){
        document.write("internal server error",err);
    }
    finally{
        console.log("Working...");
    }
 }
 function validation(){
    let pin = 223;
    return new Promise((resolve,reject)=>{
        if(pin == 223){
            resolve("login Successfull");
        }else{
            reject("login failed");
        }
    });
 }