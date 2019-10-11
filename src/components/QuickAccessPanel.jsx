import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { PLAY_STATE_STOPPED, PLAY_STATE_PLAYING } from '../constants/playState';
import ToggleButton from './ToggleButton';

const QuickAccessPanel = props => {
    const {
        playState,
        handlePlayClicked,
        handleStopClicked,
        playStateLabels,
    } = props;

    return (
        <div className="accessPanel">
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
            <span className="accessPanelText" >
                {playStateLabels && playStateLabels[playState]}
            </span>
        </div>
    )
}

export default QuickAccessPanel;