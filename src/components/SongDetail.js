import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song from the list</div>;
    }

    return <div>{song.title}</div>;
};

const mapStateToProps = state => {
    return { song: state.selectedSong }; //this gets thrown into props, w/ whatever name you give
};

export default connect(mapStateToProps)(SongDetail);
