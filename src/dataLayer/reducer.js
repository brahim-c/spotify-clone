export const initialState = {
    user: null,
   // token:'BQAA99B61OoXD_JB4rHSFAcQaRuWcJkY69Lu9yjjeXTBiDGwKTYwKjgdZ45un5heucore0gj4aaSqDjUiW7KCF_NsZRtQWLCCjMoDDEhulhlQ9MiW48VElUMFnBqu-mVeu4EAuqi2kJAUYpx789JNbILWfZLCSIP-wLjxLUaAIkzuRMV',
    playlists: [],
    spotify:null,
    playing: false,
    item: null,
    discover_weekly: null,
    top_artists:null
    
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }; 
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists:action.top_artists
            };
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            };
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            };
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            };
        default :
        return state;
    }
    
}

export default reducer;