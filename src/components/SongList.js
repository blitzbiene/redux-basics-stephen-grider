import React from 'react';
import { connect } from 'react-redux';
import SongItem from './SongItem';
import {selectSong} from '../actions';
class SongList extends React.Component {


     selectClicked = (song)=>{
         console.log(song);
         this.props.selectSong(song);
     }
    render() {
        //console.log(this.props);
        return (
        <div className="ui middle aligned divided list">
        {this.props.songs.map(song=>{
            return <SongItem song={song} key={song.title} selectClicked={this.selectClicked}/>
        })}      

        </div>


        );
    }
}

const mapStateToProps = (state) => {

    return {songs:state.songList};
}
export default connect(mapStateToProps,{
    selectSong
})(SongList);