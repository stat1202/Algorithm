function solution(phone_number) {
  const l = phone_number.length    
  const last =  phone_number.slice(l-4, l)
  
  return last.padStart(l ,"*");
}