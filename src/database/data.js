const playerNames = ['бека', 'шерхан', 'рафик', 'адиар', 'азамат сагындыков', 'азамат аскаров', 'женя', 'данил', 'маха', 'нурик', 'тимур', 'вова хван', 'вова бондарев'];

export const checkInput = (inputName) => {

	for (let i = 0; i < playerNames.length; i++) {

		if (playerNames[i] == inputName.trim().toLowerCase()) {
			return true;
		}
	}

	return false;

};