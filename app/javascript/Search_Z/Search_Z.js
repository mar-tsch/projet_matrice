const input = "Hello world";

let searchZ = (input) => {
	const result = (input.match(/z/gi) || []).length;
	if (result === 0) {
		return "aucun z à l'horizon";
	} else {
		return `il y a ${result} z`;
	}
};