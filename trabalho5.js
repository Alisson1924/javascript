// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.
function somaMaiorDez(array) {
let soma = 0
   for (let i = 0; i < array.length; i++) {
if (array[i] > 10) {
soma += array[i] }
    }
    return soma
}
console.log(somaMaiorDez(10))

// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.
function somaMaiorDez(num) {
    let soma = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 10) {
            soma += num[i] 
        }
    }
    return soma
}
const numeros = [ 41 ,6 , 2 , 77 , 35 , 48]

console.log(somaMaiorDez(numeros)) 

// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.

function filmeMaiorcinco(filmes) {
for (let filme of filmes) {
 if (filme.length > 5) {
 return filme  
        }
    }
}
console.log(filmeMaiorcinco(["dois carecas brigando por um pente", "sherek", "berbie", "kleber"]))

// 4. Crie uma função que receba um array de nomes de personagens de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.
function jogadorescomuitaforça(nomes, forcas) {
    let personagensFortes = []

    for (let i = 0; i < nomes.length; i++) {
        if (forcas[i] > 150) {
            personagensFortes.push(nomes[i])
        }
    }

    return personagensFortes
}

const nomes = ["vini jr", "mbappe", "rodrigo"]
const forcas = [195, 145, 140]


console.log(jogadorescomuitaforça(nomes, forcas))  




// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.
function contarNegativos(array) {
    let Contador = 0 
    let i = 0

    while (i < array.length) {  
        if (array[i] < 0) {  
            Contador++
        }
        i++
    }

    return Contador
}

console.log(contarNegativos([77, -47, -97, 7, -10, -17]))

// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.
function contarLetraA(str) {
    
    let Caracteres = str.split('');
    
    
    let contador = 0

    
    for (let i = 0; i < Caracteres.length; i++) {
        if (Caracteres[i].toLowerCase() === 'a') {
            contador++ 
        }
    }

    return contador
}

console.log(contarLetraA("real madrid"))


// 7. Crie uma função que percorra um array de filmes e series, e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.
function filmesComLetraS(filmes) {
    let filmesLetraS = []

    for (let filme of filmes) {
        if (filme[0].toUpperCase() === 'S') {  
            filmesLetraS.push(filme)
        }
    }

    return filmesLetraS
}

console.log(filmesComLetraS(["Star Wars", "Stranger Things", "apenas um show"])) 


// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.
function maiorSubstring(Nome) {
    let MaiorNome = ''  

    for (let nome of Nome) {
    if (nome.length > MaiorNome.length) {
            MaiorNome = nome
}
}

    return MaiorNome
}

console.log(maiorSubstring(["Kleber Abreu", "Mario", "Neemias", "Kauã"]))



// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.
function fatorial(numero) {
    let resultado = 1


    for (let i = numero; i > 1; i--) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(5))



// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.
function repetirNumero(numero, vezes) {
    let resultado = 'este é o resultado:'
    let contador = 0

    while (contador < vezes) {
        if (contador > 0) {
            resultado += ' '
        }
        resultado += numero
        contador++
    }

    return resultado
}

console.log(repetirNumero(7, 4))
