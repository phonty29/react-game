const playerNames = ['Бека', 'Шерхан', 'Рафик', 'Адиар', 'Азамат Сагындыков', 'Азамат Аскаров', 'Женя', 'Данил', 'Маха', 'Нурик', 'Тимур', 'Вова Хван', 'Вова Бондарев'];

export const checkInput = (inputName) => {

	for (let i = 0; i < playerNames.length; i++) {

		if (playerNames[i] == inputName) {
			return true;
		}
	}

	return false;

};