import {combineReducers} from 'redux';


const songsReducer = () => {
    return [
        { title: 'Chale Chaiyya Chaiyya ', duration: "4:05" },
        { title: 'Zindagi Gulzar hai ', duration: "5:45" },
        { title: 'Playdate ', duration: "3:14" },
        { title: 'Strength of Thousands ', duration: "2:15" }

    ];
}

const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type==="SELECT_SONG")
    {
        return action.payload;
    }
    return selectedSong;

}

export default combineReducers({
    selectedSong:selectedSongReducer,
    songList:songsReducer
});