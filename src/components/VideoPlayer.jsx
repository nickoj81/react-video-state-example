import React, { useEffect, useState, useRef } from 'react';
import ControlPanel from './ControlPanel';
import { PLAY_STATE_STOPPED, PLAY_STATE_PLAYING } from '../constants/playState';

const VideoPlayer = props => {
    const {
        contentUrl,
        onStateChange,
        playState,
    } = props;

    const video = props.video || useRef(null);

    const handlePlayClicked = () => {
        props.handlePlayClicked ? props.handlePlayClicked() : video.current.play();
    }

    const handleStopClicked = () => {
        props.handlePlayClicked ? props.handleStopClicked() : video.current.pause();
    }
    
    useEffect(() => {
        video.current.addEventListener("playing", () => {
            onStateChange(PLAY_STATE_PLAYING)
        });

        video.current.addEventListener("pause", () => {
            onStateChange(PLAY_STATE_STOPPED)
        });

        video.current.addEventListener("ended", () => {
            onStateChange(PLAY_STATE_STOPPED)
        });

        video.current.addEventListener("stalled", () => {
            onStateChange(PLAY_STATE_STOPPED)
        });

        return () => {
            video.current.removeEventListener("playing");
            video.current.removeEventListener("pause");
            video.current.removeEventListener("ended");
            video.current.removeEventListener("stalled");
        }
    }, [
    ]);


    return (
        <div>
            <video
                className="video"
                // width="320"
                // height="240"
                ref={video}>
                <source src={`${contentUrl}.mp4`} type="video/mp4" />
                <source src={`${contentUrl}.ogg`} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <ControlPanel
                handlePlayClicked={handlePlayClicked}
                handleStopClicked={handleStopClicked}
                playState={playState}
            />
        </div>
    )
}

export default VideoPlayer;