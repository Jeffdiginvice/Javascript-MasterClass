//Como funciona a variável VAR

if (true) {
  var pi = 3.141592;
}
console.log(`primeira var pi ${pi}`);

pi = 3;
console.log(`segunda var pi ${pi}`);

var pi = 5;
console.log(`terceira var pi ${pi}`);

//Como funciona a variável LET

/**if (true) {
  let Pi = 3.141592;
}*/
let Pi = 3.141592; // se eu inverter não vai funcionar - pi is not defined
console.log(`primeira LET Pi ${Pi}`);

Pi = 3;
console.log(`reatribuição Pi ${Pi}`); // nãoposso redeclarar outra variável com o nome Pi se for LET

//Como funciona a variável CONST
/*if (true) {
  const PI = 3.141592;
} 
console.log(PI);
não vai funcionar */

const PI = 3.141592;
console.log(`primeira CONST PI ${PI}`);
//PI = 3; NÃO VAI FUNCIONAR
//const PI = 3; redeclarar NÃO VAI FUNCIONAR
