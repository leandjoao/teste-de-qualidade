const frase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie interdum sem. Vestibulum pharetra est lectus, mollis tincidunt libero fermentum sed. Pellentesque efficitur justo eu gravida luctus. Cras id ipsum eros. Aliquam erat volutpat. Mauris feugiat posuere eros. Donec tempor dictum mi non dictum. Quisque pretium aliquet tortor id volutpat."

const palavras = frase.split(' ')
let item = {}

palavras.forEach(i => { 
  item[i] = (item[i]||0) + 1
})

console.log(item)
app.innerHTML = JSON.stringify(item)