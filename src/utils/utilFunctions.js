export const isNotInStorage = (item) => {
	return (sessionStorage.getItem(item) === null) ? true : false;
};

export const isInStorage = (item) => {
	return (sessionStorage.getItem(item) === null) ? false : true;
};

export const getFromStorage = (item) => {
	return sessionStorage.getItem(item);
};