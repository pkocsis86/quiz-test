import React, { Component } from 'react';

import QuitButton from '../../components/Button/QuitButton/QuitButton';
import { gameMenu, QUIZ, next, previous } from '../containers.util';
import TEXT from '../../assets/Text';
import GamePresenter from '../../components/GamePresenter/GamePresenter';
import StepperButton from '../../components/Button/StepperButton/StepperButton';
import classes from './GameSession.module.css';

class GameSession extends Component {
    state = {
        actualQuiz: 0,
        score: 0,
        answerIndex: undefined
    };

    stepHandler = (step) => {
        const actualQuiz = this.state.actualQuiz + step;
        this.setState({ actualQuiz });
        this.resetAnswerIndex();
    };

    answerQuizHandler = () => {
        this.props.answerQuiz(this.state.actualQuiz, this.state.answerIndex);
        this.generateScore()
        this.resetAnswerIndex();
    };

    chosenAnswerHandler = (answerIndex) => {
        this.setState({ answerIndex });
    };

    resetAnswerIndex = () => {
        this.setState({ answerIndex: undefined });
    };

    generateScore = () => {
        let score = 0;
        this.props.quiz.forEach(item => {
            if (item.isQuestionAnswered) {
                item.answers.forEach(element => {
                    if (element.isAnswerRight && element.isChosen) {
                        score++;
                    }
                })
            }
        });
        this.setState({ score });
    };

    render() {
        const quizIndex = this.state.actualQuiz;
        const actualQuiz = (
            <GamePresenter
                name={`${this.state.actualQuiz}${QUIZ}`}
                key={quizIndex}
                quiz={this.props.quiz[quizIndex]}
                chosenAnswer={this.chosenAnswerHandler}
                answerQuiz={this.answerQuizHandler}
                answerIndex={this.state.answerIndex}
            ></GamePresenter>
        );

        return (
            <div className={classes.GameSession}>
                <QuitButton
                    id={gameMenu.MAIN_MENU}
                    click={this.props.click}
                    resetQuiz={this.props.resetQuiz}
                ></QuitButton>
                <label className={classes.SessionTitle}>{TEXT.GAME_SESSION.TITLE}</label>
                <label className={classes.Score}>{`${this.props.playerName}'s ${TEXT.GAME_SESSION.SCORE} ${this.props.quiz.length}/${this.state.score}`}</label>
                {actualQuiz}
                <StepperButton
                    step={() => this.stepHandler(previous)}
                    disabled={this.state.actualQuiz === 0}
                >{TEXT.GAME_SESSION.PREVIOUS}</StepperButton>
                <StepperButton
                    step={() => this.stepHandler(next)}
                    disabled={this.state.actualQuiz === this.props.quiz.length - 1}
                >{TEXT.GAME_SESSION.NEXT}</StepperButton>
            </div>
        );
    };
}

export default GameSession;