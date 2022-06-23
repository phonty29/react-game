const POSSIBLE_ANSWERS = ['1', '0', '?'];

export const timeout = (delay) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

export const getRandomPlayers = (array, playerAmount = array.length) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }  
  return array.slice(array.length - playerAmount, array.length);
};

const knavesAnswerGenerator = (knavesAmount) => {
  let query = [];
  for (let i = 0; i < knavesAmount; i++) {
    switch(i) {
      case 0: query.push('1'); break;
      case knavesAmount-1: query.push('0'); break;
      default: query.push('?');
    }
  }
  return query;
};

const knightsAnswerGenerator = (knightsAmount) => {
  let query = [];
  for (let i = 0; i < knightsAmount; i++) {
    query.push(POSSIBLE_ANSWERS[Math.floor(Math.random() * 3)]);
  }
  return query;
};

export const createPlayerObjects = (players) => {
  let playersLength = players.length;
  let knavesAmount = Math.floor(playersLength / 2);
  let knightsAmount = playersLength - knavesAmount;
  let knaves = players.slice(0, knavesAmount);
  let knights = players.slice(knavesAmount, playersLength);
  let knavesAnswers = knavesAnswerGenerator(knavesAmount);
  let knightsAnswers = knightsAnswerGenerator(knightsAmount); 
  for (let i = 0; i < knavesAmount; i++) 
    players[i] = {name: players[i], role: 'knave', reply: knavesAnswers[i]};
  for (let j = knavesAmount; j < playersLength; j++) 
    players[j] = {name: players[j], role: 'knight', reply: knightsAnswers[j-knavesAmount]};

  return players;
};

export const displayOrderOfEntrance = (players) => {
  let order = players.filter((player, index, arr) => {
    if (player.role == 'knave')
      return player;
  });
  players.forEach((player, index, arr) => {
    if (player.role == 'knight' ) {
      switch(player.reply) {
        case '1': order.unshift(player); break;
        case '0': order.push(player); break;
        default: Math.floor(Math.random()*2) ? order.unshift(player) : order.push(player);
      }
    }
  }); 
  return order;
};

export const deselectPlayer = (array, player) => {
     return array.filter((element, index, arr) => {
        return element != player;
     });   
}

export const defineNewReplies = (players) => {
  let knavesAmount = 0;
  let knightsAmount = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].role == 'knave')
      knavesAmount++;
    else if (players[i].role == 'knight') 
      knightsAmount++;
  }

  let knavesAnswers = knavesAnswerGenerator(knavesAmount);
  let knightsAnswers = knightsAnswerGenerator(knightsAmount);
  let knavesIndex = 0;
  let knightsIndex = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].role == 'knave')
      players[i].reply = knavesAnswers[knavesIndex++];
    else if (players[i].role == 'knight') 
      players[i].reply = knightsAnswers[knightsIndex++];   
  }
  return players;
};

export const checkPlayers = (players) => {
  if(players[0].role == 'knave' || players[1].role == 'knave')
    return false;
  return true;
};

