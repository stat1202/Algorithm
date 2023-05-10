function solution(x) {
  let sum = 0
  String(x).split("").forEach( (n)=> sum += n/1)
  return x % sum == 0 ? true : false
}