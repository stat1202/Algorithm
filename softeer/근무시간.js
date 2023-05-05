const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const timeCalculator = (start, end) => {
    const [start_h, start_m] = start.split(':')
    const [end_h, end_m] = end.split(':')

    let h = end_h - start_h
    let m = 0
    if(end_m - start_m >= 0){
        m = end_m - start_m
    }
    else{
        m = 60 + Number( end_m - start_m )
        h -= 1
    }

    return {h, m}
}



const input = []

rl.on('line', (line) => {
    input.push(line)
})

rl.on('close', ()=>{
    let result = 0
    let total_h = 0
    let total_m = 0
    input.forEach( time => {
        const [start, end] = time.split(' ')
        const {h, m} = timeCalculator(start, end)
        total_h += h
        total_m += m

    })

    result = total_h * 60 + total_m
    console.log(result)
    process.exit()
})