let num = [5,8,2,9,3]
num.sort()

console.log(num)

for ( let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}