function solution(arr) {
  const answer = arr.filter( (v)=> v !== Math.min(...arr))
  return arr.length == 1 ? [-1] : answer
}