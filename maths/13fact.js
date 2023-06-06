function rFact(n){
    if(n===0)
    {
        return 1;
    }
    return n*rFact(n-1);

}
console.log(rFact(3))
