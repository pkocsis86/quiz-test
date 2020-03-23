import { emptyQuiz } from "./containers/containers.util"

export const demoQuiz = () => {
    const quiz = emptyQuiz();
    quiz.question = 'kacsa';
    quiz.answers[0].answer = '0';
    quiz.answers[0].isAnswerRight = true;
    quiz.answers[1].answer = '1';
    quiz.answers[2].answer = '2';
    quiz.answers[3].answer = '3';
    return [quiz];
}