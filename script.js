let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // verificar se o numero é entre 1 e 100
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //verifica se o valor não está na lista
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //só vai adicionar se for um numero e se não estiver na lista
        valores.push(Number(num.value)) //adicionar no array valores
        let item = document.createElement('option') // adicionar no select
        item.text = `Valor ${num.value} adicionado.` //forma que aparece para o usuário...dizendo que foi adicionado
        lista.appendChild(item)// criando a lista
        res.innerHTML = '' // quando eu adicionar elemento ele deve limpar o resultado
    } else {
        alert('Valor inválido ou já existe na lista.')
    }
    num.value = '' // para apagar o q tinha sido escrito
    num.focus() // piscar cursor no espaço para escrever novamemte
}

function finalizar() {
    if (valores.length == 0) { // se estiver sem informação 
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // saber a quantidade de valores
        let maior = valores[0] // valor na posição zero é o maior até o momento
        let menor = valores [0] //valor na posição zero é o menor até o momento
        let soma = 0
        let media = 0
        for(let pos in valores){ // fazer um teste para cada pos na posicao valores
            soma += valores[pos] // soma os valores acrescentados 
            if(valores[pos] > maior) //se valores na posiçao pos for maior que maior valor
            maior = valores[pos] // o maior valor passa a ser valores[pos]
            if(valores[pos] < menor) // se valores na posicao pos posicao valores
            menor = valores[pos]// o menor passa a ser valores[pos]
        }
        media = soma / tot

        res.innerHTML = '' //zerar o res
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.`//concatenar
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}