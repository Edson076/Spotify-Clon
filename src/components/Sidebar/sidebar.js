import React from 'react'
import "./sidebar.css"
import SidebarChoice from './sidebarChoice';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const SidebarContainer = () => {
    return(
        <div className = "sidebarContainer">
            <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt ="logo Spotify" className='logoSpotyfi'/>
            <SidebarChoice title = "Home" Icon={HomeIcon}/>
            <SidebarChoice title = "Search" Icon={SearchIcon}/>
            <SidebarChoice title = "Your Library" Icon={LibraryMusicIcon}/>
        </div>
    )
}

export default SidebarContainer;