import {players} from './data';

export const checkInput = (inputName) => {
	for (let i = 0; i < players.length; i++) 
		if (players[i] == inputName.trim().toLowerCase()) 
			return true;
	return false;
};

export const isNotInStorage = (item) => {
	return (sessionStorage.getItem(item) === null) ? true : false;
};

export const isInStorage = (item) => {
	return (sessionStorage.getItem(item) === null) ? false : true;
};

export const getFromStorage = (item) => {
	return sessionStorage.getItem(item);
};
