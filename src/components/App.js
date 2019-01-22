import React from 'react';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row box" style={{ marginTop: '2rem' }}>
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>
    );
};

export default App;
