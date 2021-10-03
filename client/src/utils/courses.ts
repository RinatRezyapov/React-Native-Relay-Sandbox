export const splitString = (str: string) => {
	return str
			.replace(/[^\w\s]|_/g, '')
			.replace(/\s+/g, ' ')
			.toLowerCase()
			.split(' ')
}