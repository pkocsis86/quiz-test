import React from 'react';

import classes from './PlayerMenu.module.css';
import SubmitButton from '../Button/SubmitButton/SubmitButton';
import TEXT from '../../assets/Text';

const PlayerMenu = (props) => (
    <form className={classes.PlayerMenu} onSubmit={(event) => { event.preventDefault(); props.click() }}>
        <label className={classes.NameTitle}>{props.children}</label>
        <input
            className={classes.NameInput}
            type="text"
            onChange={(event) => props.changeName(event.target.value)}
            value={props.playerName}
            required />
        <div className={classes.SubmitArea}>
            <SubmitButton>{TEXT.PLAYER_MENU.START}</SubmitButton>
        </div>
    </form>
);

export default PlayerMenu;