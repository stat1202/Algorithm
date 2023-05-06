const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const input = []
rl.on('line',(line) => {
    input.push(...line.split(' '))
})

rl.on('close', () =>{
    const nums = input.map( n => Number(n))
    let ascending_count = 0
    let descending_count = 0
    for(let i=0; i< nums.length-1; i++){
        ascending_count +=  nums[i]+1 === nums[i+1] && 1
        descending_count +=  nums[i]-1 === nums[i+1] && 1
    }

    const result = ascending_count === nums.length-1 ? 'ascending' : 
    descending_count === nums.length-1 ? 'descending' : 'mixed'
    console.log(result)
    process.exit()
})