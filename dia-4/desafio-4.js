function dayRate(ratePerHour) {
  return ratePerHour * 8
}
console.log(dayRate(89))

function daysInBudget(budget, ratePerHour) {
  return Math.round(budget / dayRate(ratePerHour))
}

console.log(daysInBudget(20000 , 89))

/**
 * Calcule o desconto
 *
 * @param {number} ratePerHour
 * @param {number} numDays: numero de dia que o projeto terá
 * @param {number} discount: desconto: 20% será passado como 0.2
 * @returns {number} total que custara o projeto com desconto
 */
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyValue = dayRate(ratePerHour)
  const meses = Math.floor(numDays / 22)
  const diasUteis = meses * 22
  const semDesconto = dailyValue * diasUteis

  const valorDiasUteisTotal = semDesconto * (1 - discount)

  const diasSobrados = numDays % 22
  const totalDiasSobradoSemDesconto = diasSobrados * dailyValue

  return Math.round(totalDiasSobradoSemDesconto + valorDiasUteisTotal)
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42))