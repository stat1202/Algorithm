function solution(num) {
  let count = 0
  let n = num
  
  if( num === 1 ) return 0
  
  while(count < 500){
      if(n%2 === 0) n = n / 2
      else n = n*3 +1
      
      count +=1
      
      if(n === 1) return count
      
  }
  return -1
}