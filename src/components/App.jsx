import React, { useEffect, useState, useRef } from 'react';
import { getData } from '../actions/data';
import { connect } from 'react-redux'

import Header from './Header';
import VideoPlayer from './VideoPlayer';
import Article from './Article';
import QuickAccessPanel from './QuickAccessPanel';
import { PLAY_STATE_STOPPED } from '../constants/playState';

const App = props => {
    const { getData, data } = props;
    const [videoState, setVideoState] = useState(PLAY_STATE_STOPPED);
    const video = useRef(null);

    const {
        header,
        contentUrl,
        article,
        playStateLabels,
    } = data || "";

    useEffect(() => {
        getData();
    }, [getData]);

    const handlePlayClicked = () => {
        video.current.play();
    }

    const handleStopClicked = () => {
        video.current.pause();
    }

    return (
        <div className="container">
            <Header title={header.title} />
            {
                contentUrl && <VideoPlayer
                    video={video}
                    contentUrl={contentUrl}
                    onStateChange={newState => setVideoState(newState)}
                    playState={videoState}
                    handlePlayClicked={handlePlayClicked}
                    handleStopClicked={handleStopClicked}
                />
            }
            <Article text={article} />
            <QuickAccessPanel
                playStateLabels={playStateLabels}
                playState={videoState}
                handlePlayClicked={() => handlePlayClicked()}
                handleStopClicked={() => handleStopClicked()}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    data: state.data,
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);