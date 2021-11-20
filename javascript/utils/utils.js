import { data } from "../helpers/data.js";

export const getQuestion = num => {
	if (data.length > num) {
		return {
			question: data[num].question,
			answers: data[num].answers,
			correctAnswers: data[num].correctAnswer,
		};
	}
};
