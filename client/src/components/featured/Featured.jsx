import React from 'react';
import './featured.scss'
import {PlayArrow,InfoOutlined} from '@material-ui/icons'
const Featured = ({type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type==='movies'?'Movies':'Series'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantacy">Fantacy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentory">Documentory</option>
                    </select>
                </div>
            )}
            <img  src="https://images.pexels.com/photos/7991495/pexels-photo-7991495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div className='info'>
                <img src="images/netflix.png" alt="" />
                <span className='desc'>
                Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a library of films and television series through distribution deals as well as its own productions, known as Netflix Originals.
                </span>
                <div className='buttons'>
                    <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;