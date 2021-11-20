import { ELEMENT_DOM } from "../utils/element_dom.js";

export class Stake {
	constructor() {}

	static showRates = count => {
		let getReverseRates = [...ELEMENT_DOM.rates].reverse();

		getReverseRates.forEach((item, index) => {
			if (count === index) {
				item.classList.add("rate");
			}
		});
	};
}
