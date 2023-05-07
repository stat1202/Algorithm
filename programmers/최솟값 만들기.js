function solution(A,B){
  //가장 큰값과 가장 작은 값을 곱하게 한다.
  A.sort( (a,b)=> a-b)
  B.sort( (a,b)=> b-a)
  
  let sum = 0
  
  for(let i=0; i< A.length; i++){
      sum += A[i]*B[i]
  }
  return sum
}