function fn(value){
    console.log(arguments)
    console.log(value)
}

fn(1,2,3)

console.log([1,2,3] instanceof Array)