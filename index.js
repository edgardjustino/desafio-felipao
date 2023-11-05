let herói = 'Superman';
let xp = 5956;
let nível = '';

function checkHeroLevel() {
  if (xp <= 1000) {
    nível = 'Ferro';
  } else if (xp <= 2000) {
    nível = 'Bronze';
  } else if (xp <= 6000) {
    nível = 'Prata';
  } else if (xp <= 7000) {
    nível = 'Ouro';
  } else if (xp <= 8000) {
    nível = 'Platina';
  } else if (xp <= 9000) {
    nível = 'Ascendente';
  } else if (xp <= 10000) {
    nível = 'Imortal';
  } else {
    nível = 'Radiante';
  }

  return 'O Herói ' + herói + ' está no nível ' + nível + '!';
}
checkHeroLevel();