let returnMath = (num1: number, num2: number): void => {
    let sum: number = num1 + num2;
    let sub: number = num1 - num2;
    let mult: number = num1 * num2;
    let div: number = num1 / num2;
    let highestNumber:number
    if (num1>num2){
        highestNumber = num1
    }else{
        highestNumber = num2
    }
    console.log(sum)
    console.log(sub)
    console.log(mult)
    console.log(div)
    console.log(highestNumber)
}

returnMath(10,5)

