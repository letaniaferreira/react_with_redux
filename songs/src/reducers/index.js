import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '3:08'},
        {title: 'A cura', duration: '3:00'},
        {title: 'Ja sei namorar', duration: '4:08'},
        {title: 'No way', duration: '1:48'}
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
    selectedSongReducer: selectedSongReducer
});
