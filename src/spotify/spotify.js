

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'https://spotify-clone-456.netlify.app';

const clientId = '06a9bc5f02da41c1944801b377b49ed9';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');

        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;