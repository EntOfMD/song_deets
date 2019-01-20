// Action Creator- returns plain JS object
// payload is option, while type is required
export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
