const valorProduto = Number(prompt('Digite o valor do produto: '))
console.log(typeof(valorProduto))
if (valorProduto >=100){
    document.getElementById('resultado').innerHTML = 'Aprovado'
    document.getElementById('resultado').classList.add('aprov')
}
else{
    document.getElementById('resultado').innerHTML = 'Negado'
    document.getElementById('resultado').classList.add('reprov')
   
}