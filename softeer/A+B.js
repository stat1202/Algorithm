const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const input = []

const sum = ( a, b) => {
    return a+b
}

rl.on('line', (line)=>{
    input.push(line)
})

rl.on('close', ()=> {
    const index = input.shift()

    input.forEach( (v,i) => {
        const [a,b] = v.split(' ')
        const result = sum(Number(a), Number(b) )

        console.log(`Case #${i+1}: ${result}`)
    })

    process.exit()
})