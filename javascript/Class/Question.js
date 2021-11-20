import { Answer } from "./Answer.js";
import { ELEMENT_DOM } from "../utils/element_dom.js";
import { getQuestion } from "../utils/utils.js";

export class Question {
	constructor(num) {
		this.question = getQuestion(num);
		this.showQuestionAndAnswers = this.show();
	}
	displayQuestion(query) {
		return (ELEMENT_DOM.fieldQuestion.textContent = query);
	}
	checkAnswer(answer, resolve, reject) {
		return this.question.correctAnswers === answer ? resolve() : reject();
	}

	show() {
		const { a, b, c, d } = this.question?.answers;
		const { question } = this.question;

		return new Answer(a, b, c, d, this.question.correctAnswers), this.displayQuestion(question);
	}
}
