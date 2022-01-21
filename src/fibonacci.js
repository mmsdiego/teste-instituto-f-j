const fibonacci = (numIni, qtd) => {

  if (numIni < 0 || qtd < 0 ) return 'Não é possível usar números negativos'

  let soma = 0
  let anterior = 0
  let proximo = 1
  let fiboArr = []

  for (let i = 0; i < (numIni + qtd); i++) {
    soma = anterior + proximo
    fiboArr.push(anterior)
    anterior = proximo
    proximo = soma
  }

  if (fiboArr.indexOf(numIni) !== -1) {
    const init = fiboArr.indexOf(numIni)
    const final = fiboArr.indexOf(numIni) + qtd

    return fiboArr.slice(init, final)
  } else {
    const init = fiboArr.indexOf(fiboArr.find(item => item > numIni))
    const final = fiboArr.indexOf(fiboArr.find(item => item > numIni)) + qtd

    return fiboArr.slice(init, final)
  }
}

console.log(fibonacci(0, 5))

console.log(fibonacci(5, 5))

console.log(fibonacci(19, 3))

console.log(fibonacci(-1, 3))

console.log(fibonacci(5, -3))