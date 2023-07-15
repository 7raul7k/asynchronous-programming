let open = true;

let order = (time,work) =>{

    return new Promise((resolve,reject)=>{
        if(open){
            setTimeout(() => {
                resolve(work()); 
            }, time);
        }else{
            reject(console.log("our shop is closed"));
        }
    })
}

function func1(){
    console.log('Store was opened!');
}

function func2(){

    console.log('Stock are available');
}

function func3(){
    console.log("T-shirt was bought by 200 people");
}

function func4(){
    console.log("New article was added");
}

function func5(){
    console.log("Don't miss our our amazing sneakers sale");
}

function func6(){
    console.log('100 sneakers was bought by 50 people ');
}

function func7(){
    console.log('Store was closed!');
}

order(1000,()=>{ 
    
    func1()

})
.then(()=>{
    return order(2000,()=>{
        func2()
    })
})
.then(()=>{
    return order(1000,()=>{
        func3()
    })
})
.then(()=>{
    return order(1500,()=>{
        func4()
    })
})
.then(()=>{
    return order(500,()=>{
        func5()
    })
})
.then(()=>{
    return order(3000,()=>{
        func6();
    })
})
.then(()=>{
    return order(1000,()=>{
        func7();
    })
})
