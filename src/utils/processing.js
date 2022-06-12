// import {players} from  './data';
// export 
const players = ['бека', 'шерхан', 'рафик', 'адиар', 'азамат сагындыков', 'азамат аскаров', 'женя', 'данил', 'маха', 'нурик', 'тимур', 'вова хван', 'вова бондарев'];

// function gameAlgorithm() {
// 	const testimonies = '1110000';

// 	const n = testimonies.length
// 	const a = [];
// 	const b = [];
// 	const indexes = [];
// 	a[0] = true;
// 	b[0] = true;
// 	for (let i = 0; i < n; i++) 
// 		a[i+1] = a[i] && (testimonies[i] === '1' || testimonies[i] === '?');
// 	for (let i = n-1; i >= 0; i--) 
// 		b[n-i] = b[n-i-1] && (testimonies[i] === '0' || testimonies[i] === '?');

// 	let suspects = 0;
// 	for (let i = 0; i < n; i++) 
// 		if (a[i] && b[n-i-1]) {
// 			suspects++;
// 			indexes.push(i);
// 		}

// 	console.log(suspects);

// 	indexes.forEach( index => {
// 		console.log(testimonies[index]);
// 	});

// }
let listOfPlayers = [...players];
let playerAmount = players.length;

// export 
const shuffle = (array) => {
  for (let i = playerAmount - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffle(listOfPlayers);

console.log(players);
console.log(listOfPlayers);
