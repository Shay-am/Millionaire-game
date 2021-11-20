import { ELEMENT_DOM } from "../utils/element_dom.js";

export class Answer {
	constructor(a, b, c, d, correctAnswer) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.correctAnswer = correctAnswer;
		this.clearFields = this.clearAnswerFields();
		this.listener = this.addListener();
		this.show = this.displayResponsesInTheFields();
	}

	addListener = () => ELEMENT_DOM.coinatnerAnswer.addEventListener("click", this.toggleClassWithSelectedAnswer);
	removeListener = () => ELEMENT_DOM.coinatnerAnswer.removeEventListener("click", this.toggleClassWithSelectedAnswer);

	toggleClassWithSelectedAnswer = e => {
		this.addClassList("selected", e);

		e.target.textContent.includes(this.correctAnswer)
			? this.selectedCorrectAnswer(e)
			: this.selectedNotCorrectAnswer(e);

		this.removeListener();
	};

	selectedCorrectAnswer = e => {
		setTimeout(() => {
			this.addClassList("correct", e);
			this.removeClassList("selected", e);
		}, 2000);
	};

	selectedNotCorrectAnswer = e => {
		setTimeout(() => {
			this.addClassList("uncorrect", e);

			ELEMENT_DOM.fieldsAnswer.forEach(field => {
				if (field.textContent.includes(this.correctAnswer)) {
					field.classList.add("correct");
				}
			});
		}, 2000);
	};

	clearAnswerFields = () =>
		ELEMENT_DOM.fieldsAnswer.forEach(field => field.classList.remove("selected", "correct", "uncorrect"));

	addClassList = (classList, e) => e.target.closest("div").classList.add(classList);
	removeClassList = (classList, e) => e.target.closest("div").classList.remove(classList);

	displayResponsesInTheFields() {
		return (
			(ELEMENT_DOM.fieldA.textContent = this.a),
			(ELEMENT_DOM.fieldB.textContent = this.b),
			(ELEMENT_DOM.fieldC.textContent = this.c),
			(ELEMENT_DOM.fieldD.textContent = this.d)
		);
	}
}
