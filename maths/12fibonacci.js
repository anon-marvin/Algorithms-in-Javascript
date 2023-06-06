function rFibo(n){
    if(n<2){
        return n;
    }
    return rFibo(n-1)+rFibo(n-2)

}
console.log(rFibo(6))
