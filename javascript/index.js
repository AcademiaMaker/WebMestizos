console.log("Hola Mundo")

let Nombres = "Mi primera variable"
Nombres = 'Hola Mundo'

//se utiliza en la linea de comandos touch para crear un archivo, nano para editar con el Editor de texto nano o VIM

let miBoleano = true
let otroBoleano = false

let miNumero = 1234567890

console.log(miBoleano,otroBoleano,miNumero)
console.log('El resultadod de las variables es: ' + miBoleano)

let variable_Indefinido
console.log(variable_Indefinido)
let nulo = null

//objetos en Java Script, un objeto es una agrupacion de datos. Estos
// datos hacen sentido entre si

//Este es un tipo de objeto vacio
const myPrimerObjeto = {}


const mySegundoObjeto = {
    unNumero: 12,
    unaLetra: 'A',
    unaCondicion: true,
}

console.log(mySegundoObjeto.unNumero)

const arr = ["1", 2, mySegundoObjeto]

console.log(arr)

arr.push(5)

console.log(arr)

//Operadores Matematicos
let num 

num = 1 + 1
num = 1 - 1
num = 1 / 1
num = 1 * 1

num++
num--
num += 1
num -= 1
num *= 1
num /= 1

//Comparadores 
const result1 = 5 === 6 //el triple igual es una comparacion estricta
const result2 = 5 == '5' // igual no estricta

console.log(result2)

let resultt = 5 < 6

// comparadores logicos or || , and && , not !
let logicos = false || false || true
logicos = false || false || "hola mundo"

logicos = true && true && false
logicos = !true


// funciones para reutilizar codigo
function iteracion(numero1) {

    for (let index = 0; index < 5; index++) {
        console.log(numero1[index])
    }
}
const numerosss = [1,2,3,4,5]
const nombresss = ["noe", "Diana", "hakim"]
iteracion(numerosss)
iteracion(nombresss)

function suma(a, b) {
    return a + b
}

let resultado = suma(5, 5)
console.log(resultado)



//Callbacks funciones llamando funciones como parametros o valores
function restar(a,b,cb){
    let resta = a - b
    cb(resta)
}

function callback(other123){
    console.log(other123)
}

restar(1,1,callback)



//fat arrow function
// son denominadas funciones sencillas para hacer pequeñas instrunciones
const fat = (a, b) => a + b
console.log(fat(1,1))



//Cambiar objetos denttro del html
const objeto = document.getElementById("Marca")
objeto.innerHTML = '<h1> Hola Mundo</h1>'

//Obtener datos 

window.onload = () => {
    const form = document.getElementById("Marca")
    form.onsubmit = () => {
        const todo = document.getElementById('todo')
        const todotxt = todo.value;
        todo.value 
    }
}