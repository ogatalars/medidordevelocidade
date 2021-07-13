//velocidade maxima de 70
// a cada 5km acima do limite voce ganha 1 ponto na carteira
// Math.Floor() -> arredonda valores decimais
// caso os pontos sejam maiores que 12 -> carteira suspendida.


// function verificadordevelocidade(x) { 
//     if(x >= 70) 
//     console.log('um ponto na carteira');
//     else console.log('Dentro da velocidade');

// }

// let velocidade = 70;
// let pontos = velocidade > 70 ? 'Ponto na carteira' : 'dentro da velocidade';
// console.log(pontos);

// Criar uma função que DIZ que se a velocidade passar de 70, e em cada 5 kms A mais, aumenta um ponto.


// let pontosdacarteira = 0;
// function verificadordevelocidade(x) {
//      if(x > 70) { 
//         pontosdacarteira += 1;
//         console.log('Aumenta um ponto');
//         console.log('Seus pontos da carteira são/é ' + pontosdacarteira);
//     }
  

// }
// verificadordevelocidade(71);






// function aplicaMulta(velocidade) { 
//     if(velocidade > 70) {
//         multa += 1;
//         console.log(multa);
//     }

// }

// aplicaMulta(75)


function verificadorVelocidade(velocidade) { 
    const velocidadeMaxima = 70;
    const kmPorPont = 5;
    if(velocidade <= 70) {
        console.log('ok')
    }
    else {
        const pontos = Math.floor(velocidade - velocidadeMaxima)/kmPorPont; 
        if( pontos >= 12)
         console.log('Carteira Suspensa');
        
        else
           console.log('Pontos', pontos);

    }
}
verificadorVelocidade(80);

function aplicaMulta(vel) { 
    const velMax = 70;
    const kmPorPonto = 5;
    if(vel <= 70) {
        console.log('velocidade está de acordo com as regras')
    }
    else {
        const ponto = Math.floor(vel - velMax)/kmPorPonto;
        if(ponto >= 12)
        console.log('Carteira Suspensa');

        else
        console.log('Seus pontos ', ponto);
    }

}

aplicaMulta(120);