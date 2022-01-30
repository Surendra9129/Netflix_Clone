import React from 'react';
import './listItem.scss'
import {PlayArrow, Add,ThumbUpOutlined,ThumbDownOutlined} from '@material-ui/icons'
import { useState } from 'react';
const ListItem = ({index}) => {
    const [isHovered,setHovered]=useState(false)
    const trailer='https://www.youtube.com/watch?v=UPOy2xP3nAQ'
    return (
        <div className='listItem' style={{left:isHovered && index*225+index*2.5}} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <img src="https://images.pexels.com/photos/4050336/pexels-photo-4050336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            {isHovered && (
                <>
                    
                    <iframe src="https://www.hbo.com/game-of-thrones" frameborder="0" ></iframe>
            <div className='itemInfo'>
                <div className='icons'>
                 <PlayArrow className='icon'/>
                 <Add className='icon'/>
                 <ThumbUpOutlined className='icon'/>
                 <ThumbDownOutlined className='icon'/>
                </div>
                <div className='itemInfoTop'>
                    <span>1 hr 14min</span>
                    <span className='limit'>+16</span>
                    <span>1999</span>
                </div>
                <div className='genre'>Action</div>
                <div className='desc'>Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a library of films and television series through distribution deals as well as its own productions, known as Netflix Originals.
                </div>
            </div>
            </>
            )}
        </div>
    );
};

export default ListItem;