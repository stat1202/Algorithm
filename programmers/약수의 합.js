function solution(n) {
    const d = []
    if(n ===0) return 0
    for(let i=1; i<=n; i++){
        if(n%i ===0){
            d.push(i)
        }
    }
    
    return d.reduce((a,b)=>a+b);
}