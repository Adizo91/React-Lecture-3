const myPromise = new Promise((resolve, reject)=>{
    if(false){
 setTimeout(()=>{
    resolve("I have seccueded");
 }, 1000);
} else {
    reject("call rejected");
}
});

myPromise
.then((value)=> console.log("we got:"+value))
.catch((error)=>console.log("we got:"+error));

/*fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((users)=> console.log(users))
.catch((error)=>console.log("we got:"+error+"!!!"));*/