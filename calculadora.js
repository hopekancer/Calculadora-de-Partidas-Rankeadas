function saldoVitorias(vitorias, derrotas)
{
	let saldo = vitorias - derrotas
    return saldo
}

function rank(saldorank)
{
	if (saldorank <= 10)
		{
			return "Ferro"
		}
	if (saldorank > 10 && saldorank <= 20)
		{
			return "Bronze"
		}
	if (saldorank > 20 && saldorank <= 50)
		{
			return "Prata"
		}
	if (saldorank > 50 && saldorank <= 80)
		{
			return "Ouro"
		}
	if (saldorank > 80 && saldorank <= 90)
		{
			return "Diamante"
		}
	if (saldorank > 90 && saldorank <= 100)
		{
			return "Lendário"
		}
	if (saldorank > 100)
		{
			return "Imortal"
		}
}

let saldo = saldoVitorias(50, 10)
let nivel = rank(saldo)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)
