let counter=7;

let  examplePromoise=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
             counter++;
             if(counter<10){
                res("succes");
             }else{
                rej("failure");
             }

        },500);
    });

}

function example(){

    examplePromoise().then(data=>{


        console.log(data);//raspunsunl pe care i-l primesc din res
   
        console.log(contor);
   }).catch(rej=>{
   
   
       console.log(rej);
   
   })
   
   console.log(contor);
}


let contor = 0;

let promiseExample =()=>{

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(contor<20){
                res('succes');
            }else{
                rej('failure');
            }
        },500);
    })
}

function promise () {

   promiseExample().then((data)=>{

    console.log(data);

    console.log(counter);


   }).catch((rej)=>{
    console.log(rej);
   })
}

function func5(){
  contor = 25;
  console.log(contor);
}

function func4(){
    contor = 20;
    console.log(contor);
}

function func3(){
    contor = 14;
    console.log(contor);
}

function func2(){
   contor = 7;
   console.log(contor);
   
}

function func1(){
  contor= 4;
  console.log(contor);
    func2();
    setTimeout(func3,150);
    setTimeout(func4,200);
    setTimeout(func5,300);

    promise();
}

func1();

