import React from "react";
import {connect} from 'react-redux';


class SongItem extends React.Component{

    render(){
        if(!this.props.song)
        return <div>No Song Selected</div>

        return(
            <React.Fragment>
            <div style={{fontSize:"30px",display:"block"}}>
                Name : {this.props.song.title} 
                
            </div>
            <div>Duration: {this.props.song.duration}</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongItem);


