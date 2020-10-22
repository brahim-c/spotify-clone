import React, { useEffect } from 'react';
import { getTokenFromUrl } from './spotify/spotify';
import Login from './login/login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './palyer/player';
import { useDataLayerValue } from './dataLayer/dataLayer';


const spotify = new SpotifyWebApi();

function App() {

  const [{ user,token,playlists,discover_weekly }, dispatch] = useDataLayerValue();

  useEffect(() => {
   
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      
      dispatch({
        type: 'SET_TOKEN',
        token:_token
      })

      spotify.setAccessToken(_token);
    }

    dispatch({
      type: 'SET_SPOTIFY',
      spotify: spotify
    });

    spotify.getMe().then((user) => {
      dispatch({
        type: 'SET_USER',
        user: user
      })
    });


    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists
      })
    })

    spotify.getPlaylist('1OFCYEiAIYc3bktrlaHSuI').then((response) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response
      })
    });

    spotify.getMyTopArtists().then((resp) => {
      dispatch({
        type: 'SET_TOP_ARTISTS',
        top_artists: resp
      })
    });


  }, [token, dispatch]);

//  console.log('the user is >>> ', user);
 // console.log('the token is >>> ', token);
 // console.log('all the playlists >>> ', playlists);
 // console.log('discover_weekly >>> ', discover_weekly);

  return (
    <div className="app">
      {token ? 
        <Player spotify={spotify} /> :
        <Login />
      }
    </div>
  );
}

export default App;
