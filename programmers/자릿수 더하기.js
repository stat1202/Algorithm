function solution(n){
    
  return n < 10? n :String(n).split("").reduce( 
      (a,b)=> parseInt(a)+parseInt(b))
}