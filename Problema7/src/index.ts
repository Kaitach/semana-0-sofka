//Creamos la funcion
function crearPalindromo(palabra: string) {

 // usamos .substring para eliminar el ultimo caracter de la   palabra 
 // .split para pasar cada caracter a un array, con .reverse lo invertimos 
 // y con .join lo volvemos a hacer una cadena
let palabraInvertida:string = palabra.substring(0, palabra.length -1).split('').reverse().join(' ')
let palabraSinEspacios:string = palabraInvertida.replace(/ /g,'') 
let palindromo =  palabra+palabraSinEspacios;
  console.log(palindromo);

  }


  crearPalindromo("americando")
  crearPalindromo("hola")
  crearPalindromo("papas fritas")
  crearPalindromo("tupper")
  
  





