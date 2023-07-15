function func5(){
    console.log('JavaScript');
}

function func4(){
    console.log('Learning!');
}

function func3(){
    console.log('Students!');
}

function func2(){

    console.log('Treehouse');
}

function func1(){
    console.log('Hi');
    setTimeout(func2,100);

    func3();
    func4();
    func5();
}


func1();
