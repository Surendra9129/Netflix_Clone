import React from 'react';
import './watch.scss'
import {KeyboardBackspaceOutlined} from '@material-ui/icons'
const Watch = () => {
    return (
        <div className='watch'>
            <div className='back'>
            <KeyboardBackspaceOutlined />
            home
            </div>
            <video className='video' autoPlay progress controls src="video/videos.mp4" />
        </div>
    );
};

export default Watch;