import React from 'react';


const SongItem = ({ song,selectClicked}) => {
    return (
        <div className="item">
            <div className="right floated content">
                <div className="ui button" onClick={()=>selectClicked(song)}>Select</div>
            </div>

            <div className="content">
                {song.title}
            </div>
        </div>
    );
}

export default SongItem;