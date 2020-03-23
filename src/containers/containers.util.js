export const next = 1;

export const previous = -1;

export const answersCount = 4;

export const QUIZ = 'quiz';

export const QUIZ_ARRAY = 'quizArray';

export const gameMenu = {
    PLAYER_MENU: 'playerMenu',
    MAIN_MENU: 'mainMenu',
    GAME_SESSION: 'gameSession',
    QUIZ_SESSION: 'quizSession'
};

const emptyAnswer = () => {
    return {
        answer: '',
        isAnswerRight: false,
        isChosen: false
    };
};

export const createEmptyAnswers = (answersCount) => {
    const answers = [];
    for (let i = 0; i < answersCount; i++) {
        answers.push(emptyAnswer());
    }
    if (answers.length > 0) answers[0].isAnswerRight = true;
    return answers;
};

export const getLocalData = () => {
    const data = JSON.parse(localStorage.getItem(QUIZ_ARRAY));
    return data || [];
};

export const setLocalData = (data) => {
    localStorage.setItem(QUIZ_ARRAY, JSON.stringify(data));
};