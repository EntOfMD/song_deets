import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
    return <div>SongDetail</div>;
};

const mapStateToProps = state => {
    return { song: state.selectedSong }; //this gets thrown into props, w/ whatever name you give
};

export default connect(mapStateToProps)(SongDetail);
