function solution(s) {
  const s_arr = s.split(" ").map( v=> {
      if(v !== ""){
          v = v.toLowerCase()
          v = v.replace(v[0], v[0].toUpperCase() )
      }
      return v
  })
      
  return s_arr.join(" ");
}