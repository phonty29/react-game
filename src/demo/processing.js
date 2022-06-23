function main() {
	let playersAmount = prompt("The number of players");
	if (playersAmount > 3 && playersAmount < CHARACTERS.length)
		gameplay(playersAmount);
	else main();
}

const gameplay = (playersAmount) => {
	let gameIsOn = true;	
	let players = getRandomPlayers([...CHARACTERS], playersAmount);
	createPlayerObjects(players);
	let playersForDisplay =  getRandomPlayers([...players]);
	render(playersForDisplay);
	const splashScreen = (forOrder) => {
		return timeout(3000).then(() => {
			return displayOrderOfEntrance(forOrder);
		}).then((message) => {
			console.log(message);
			return timeout(playersAmount*1500);
		}).then(() => {
			return lastRender(playersForDisplay);
		});		
	};
	const windowLoadEvent = (resolve) => {
		console.log('initial load');
		splashScreen(players).then((message) => {
			console.log(message);
			const submitButtonEvent = () => {
			  let gamerSuggestion = [];
		      document.querySelectorAll('.selectable').forEach((element, index, arr) => {
		        if (element.classList.contains('selected')) 
		          gamerSuggestion.push({...playersForDisplay[index]});
		      });
		      if (gamerSuggestion.length != Math.ceil(playersAmount/2)) return;
		      playersAmount = gamerSuggestion.length;
		      console.log(gamerSuggestion);
		      gameIsOn = defineNewReplies(gamerSuggestion);
		      if (gameIsOn == false) {
		      	SUBMIT.removeEventListener('click', submitButtonEvent);
				window.removeEventListener('load', windowLoadEvent);
				return;
		      };
		      playersForDisplay =  getRandomPlayers([...gamerSuggestion]);
		      render(playersForDisplay);
		      splashScreen(gamerSuggestion).then((message) => {
		      	console.log(message);
		      });
			};
		    SUBMIT.addEventListener('click', submitButtonEvent);
		});
	};
	window.addEventListener('load', windowLoadEvent);
};

main();

