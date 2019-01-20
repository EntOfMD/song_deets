import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "God's Plan", duration: '2:50' },
        { title: 'Better Now', duration: '3:25' },
        { title: 'This Is America', duration: '5:20' },
        { title: 'Nice For What', duration: '3:33' },
        { title: 'thank u, next', duration: '4:20' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
