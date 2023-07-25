//string
let nome = 'João'
console.log(nome)
//nome = 28


// numbers
let idade = 27
console.log(idade)
//idade = 'Ana'
idade = 27.5
console.log(idade)



// boolean
let possuiHobbies = true
console.log(possuiHobbies)
// possuiHobbies = 1
console.log(possuiHobbies)


// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)



// tipo array
let hobbies: any[] = ['cozinhar','praticar esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100,200,300]
console.log(hobbies)


// tuplas
let endereco: [string, number] = ['Av Paulista', 2202]
console.log(endereco)



// enums
enum Cor{
    Cinza,          // 0
    Verde = 100,    // 100
    Azul = 2,       // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)



// any
let carro : any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano:'2019'}
console.log(carro)