const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const weights = []
const costs = []

rl.on('line',(line) => {
    const [weight, cost] = line.split(' ')

    weights.push( weight )
    costs.push( cost )
})


rl.on('close', ()=>{
  let result = 0
  let max_weight = weights.shift()
  let kind = costs.shift()

  const jewels = weights.map( (v,i) =>{
      return { weight : Number(v), cost : Number(costs[i] ) }
  })

  jewels.sort( (a,b) => a.cost - b.cost )


  while( max_weight > 0 && kind > 0){

    const jewel = jewels.pop()

    if( max_weight >= jewel.weight){
        result  += jewel.weight * jewel.cost
        max_weight -= jewel.weight
    }
    else{
        result += max_weight * jewel.cost
        max_weight -= max_weight

    }
    kind--
  }
  console.log(result)
  process.exit()
})

