function solution(arr) {
  let avr = 0;
  arr.forEach( (score)=>{
      avr += score/arr.length
  })
  return avr;
}