import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { PLAY_STATE_STOPPED, PLAY_STATE_PLAYING } from '../constants/playState';
import ToggleButton from './ToggleButton';

const ControlPanel = props => {
    const {
        playState,
        handlePlayClicked,
        handleStopClicked,
        playStateInfo,
     } = props;

    return (
        <div>
            <ToggleButton
                onClick={handlePlayClicked}
                icon={<PlayArrowIcon />}
                isActive={playState === PLAY_STATE_PLAYING}
            />
            <ToggleButton
                onClick={handleStopClicked}
                icon={<StopIcon />}
                isActive={playState === PLAY_STATE_STOPPED}
            />
        </div>
    )
}

export default ControlPanel;