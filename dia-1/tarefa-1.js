
function calculoDeGorjeta(nomeGarcom, lucroTotal, porcentagemGarcom){
   const valorGorjeta = lucroTotal * porcentagemGarcom / 100
   return  `o ${nomeGarcom} receberá R$ ${valorGorjeta} de gorjeta.`
}

console.log(calculoDeGorjeta("mariana", 10, 5))

console.log(calculoDeGorjeta("elto", 20, 8))
