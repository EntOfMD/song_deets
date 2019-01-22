import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
};

export default connect(
    //the connect does special operation on the fx inside of this obj. It looks at all the functions inside and it wraps them up in another JS fx. When we call the new fx, connect will auto call actioncreator , take the action that gets returned, and it'll call it.
    mapStateToProps,
    {
        selectSong //if we don't pass this, redux won't be linked
    }
)(SongList);
