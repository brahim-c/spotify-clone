import React from 'react';
import { useDataLayerValue } from '../dataLayer/dataLayer';
import Header from '../header/header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../songRow/songRow';

import './body.styles.css';

function Body({ spotify }) {
    
    const [{ discover_weekly }, dispatch] = useDataLayerValue();


    const playPlaylist = (id) => {
        spotify.play({
            context_uri: `spotify:playlist:1OFCYEiAIYc3bktrlaHSuI`,
        }).then(r => {
            spotify.getMyCurrentPlayingTrack().then((resp) => {
                dispatch({
                    type: 'SET_ITEM',
                    item: resp.item
                });
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true
                });
            });
        });
    };

    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`],
        }).then(res => {
            spotify.getMyCurrentPlayingTrack().then(r => {
                dispatch({
                    type: 'SET_ITEM',
                    item: r.item
                });
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                });
            });
        });
    };

    return (

        <div className='body'>
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt='' />
                <div className="body__infoText">
                   <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className='body__shuffle' onClick={playPlaylist} />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow playSong={playSong} track={item.track} />
                ))}
                
            </div>
        </div>
    )
}

export default Body;
