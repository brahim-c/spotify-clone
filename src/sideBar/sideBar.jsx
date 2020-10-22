import React from 'react';
import SideBarOption from '../sideBarOption/sideBarOption';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LibratyMusicIcon from '@material-ui/icons/LibraryMusic';

import { useDataLayerValue } from '../dataLayer/dataLayer';

import './sideBar.styles.css';


function SideBar() {

    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className='sideBar'>
            <img className='sideBar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
            <SideBarOption title='Home' Icon={HomeRoundedIcon} />
            <SideBarOption title='Search' Icon={SearchRoundedIcon} />
            <SideBarOption title='Your Library' Icon={LibratyMusicIcon} />

             <br />
            <strong className='sideBar__title'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SideBarOption title={playlist.name} />
                
            ))}

        </div>
    )
}

export default SideBar;
