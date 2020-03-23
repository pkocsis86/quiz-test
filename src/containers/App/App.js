import React, { Component } from 'react';

import { gameMenu, answersCount, getLocalData, setLocalData } from '../containers.util';
import GameSession from '../GameSession/GameSession';
import MainMenu from '../../components/MainMenu/MainMenu';
import QuizSession from '../../components/QuizSession/QuizSession';
import PlayerMenu from '../../components/PlayerMenu/PlayerMenu';
import TEXT from '../../assets/Text';

class App extends Component {
  state = {
    gameState: gameMenu.PLAYER_MENU,
    quizArray: getLocalData(),
    answersCount: answersCount,
    playerName: ''
  };

  gameStateHandler = (gameState) => {
    this.setState({ gameState });
    this.resetQuizHandler();
  };

  addQuizHandler = (quiz) => {
    const quizArray = [...this.state.quizArray];
    quizArray.push(quiz);
    this.setState({ quizArray });
    setLocalData(quizArray);
  };

  removeQuizHandeler = (index) => {
    const quizArray = [...this.state.quizArray];
    quizArray.splice(index, 1);
    this.setState({ quizArray });
    setLocalData(quizArray);
  };

  resetQuizHandler = () => {
    const quizArray = this.state.quizArray.map(item => {
      item.isQuestionAnswered = false;
      item.answers = item.answers.map((value) => {
        value.isChosen = false;
        return value;
      })
      return item;
    });
    this.setState({ quizArray });
  };

  answerQuizHandler = (quizIndex, answerIndex) => {
    const quizArray = [...this.state.quizArray];
    quizArray[quizIndex].isQuestionAnswered = true;
    quizArray[quizIndex].answers.forEach(item => item.isChosen = false);
    quizArray[quizIndex].answers[answerIndex].isChosen = true;
    this.setState({ quizArray });
  };

  nameHandler = (playerName) => {
    this.setState({ playerName });
  }

  getGameState = () => {
    return {
      [gameMenu.PLAYER_MENU]: (<PlayerMenu
        click={() => this.gameStateHandler(gameMenu.MAIN_MENU)}
        playerName={this.state.playerName}
        changeName={this.nameHandler}
      >{TEXT.PLAYER_MENU.NAME}</PlayerMenu>),
      [gameMenu.MAIN_MENU]: (<MainMenu
        click={this.gameStateHandler}
        isGame={this.state.quizArray.length > 0}
      ></MainMenu>),
      [gameMenu.QUIZ_SESSION]: (<QuizSession
        click={this.gameStateHandler}
        addQuiz={this.addQuizHandler}
        removeQuiz={this.removeQuizHandeler}
        quiz={this.state.quizArray}
        answersCount={this.state.answersCount}
      ></QuizSession>),
      [gameMenu.GAME_SESSION]: (<GameSession
        playerName={this.state.playerName}
        click={this.gameStateHandler}
        quiz={this.state.quizArray}
        answerQuiz={this.answerQuizHandler}
      ></GameSession>)
    }[this.state.gameState];
  }

  render() {
    const gameState = this.getGameState()
    return (<div>{gameState}</div>);
  }
}

export default App;