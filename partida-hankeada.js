let nivel = '';

function hankingDeVitorias(vitorias, derrotas) {
  let saldoDeVitorias = vitorias - derrotas;
  
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return "O Herói tem de saldo de "+ saldoDeVitorias +" está no nível de "+nivel+" **";
}

hankingDeVitorias();
console.log(hankingDeVitorias(154,56))
