import { Question } from "./Question.js";
import { ELEMENT_DOM } from "../utils/element_dom.js";
import { Stake } from "./Stake.js";

export class Game {
	constructor() {
		this._round = null;
		this._startGame = false;
		this.question = null;

		this.startGame = this.startGame();
	}
	init = () => {
		if (this._startGame) {
			this.setRound();
			this.question = new Question(this._round);
			Stake.showRates(this._round);
			this.addListenerToTheSelectedAnswer();
		}
	};
	startGame = () => ELEMENT_DOM.btnStartGame.addEventListener("click", this.setStartGame);

	setRound = () => (this._round === null ? (this._round = 0) : (this._round += 1));

	check = answer => this.question.checkAnswer(answer, this.correct, this.unCorrect);

	correct = () => {
		// console.log("poprawna odpwoiedz");
		this.removeListenerToTheSelectedAnswer();
		setTimeout(() => {
			this.init();
		}, 5000);
		clearTimeout();
	};

	unCorrect() {
		setTimeout(() => {
			console.log("nie poprawna odpowiedz");
		}, 2000);
	}
	getAnswer = e => this.check(e.target.innerText);

	addListenerToTheSelectedAnswer = () => ELEMENT_DOM.coinatnerAnswer.addEventListener("click", this.getAnswer);
	removeListenerToTheSelectedAnswer = () => ELEMENT_DOM.coinatnerAnswer.removeEventListener("click", this.getAnswer);

	setStartGame = () => {
		this._startGame = true;
		this.init();
	};
}
