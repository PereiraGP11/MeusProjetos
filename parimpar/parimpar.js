function parImpar() {
  let valor = parseFloat(document.querySelector('input#valor').value)

  if (valor % 2 == 0) {
      window.alert('Par')
  } else {
      window.alert('Impar')
}
}
