let n = 3;
// 0 1 1 2
if (n => 3) {
    console.log(0);
    let firstNum = 1;
    let secondNum = 1;
    console.log(firstNum);
    console.log(secondNum);
    for (let i = 3; i < n; i++) {
        let num = firstNum + secondNum;
        console.log(num);
        secondNum = firstNum;
        firstNum = num;
    }
}
else
    console.log("n should be greater than 3");

