function solution(left, right) {
  let sum = 0
  for(let i= left; i <= right; i++){
      let tmp = 0
      for(let j=1; j<= i; j++){
          if(i%j === 0) tmp += 1
      }
      tmp%2 === 0
      ?
      sum += i
      :
      sum -= i
  }
  return sum
}