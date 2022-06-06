import getData from "./fetch.js";

(async () => {
	const userData = await getData(1);
	console.log(userData);
})();
