import React from 'react';
import Body from '../body/body';
import SideBar from '../sideBar/sideBar';
import Footer from '../footer/footer';

import './player.styles.css';

function Player({spotify}) {
    return (
        <div className='player'>
            <div className="player__body">
                <SideBar />
                <Body spotify={spotify} />
            </div>

            <Footer spotify={spotify} />

        </div>
    )
}

export default Player;
