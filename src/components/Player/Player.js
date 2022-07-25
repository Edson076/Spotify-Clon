import React from 'react'
import BodyContainer from '../Body/body';
import FooterContainer from '../Footer/footer';
import SidebarContainer from '../Sidebar/sidebar';
import "./Player.css"

const Player = () => {
    return(
        <>
            <div className="SpotifyBody">
                <SidebarContainer/>
                <BodyContainer/>
            </div>
            <FooterContainer/>
        </>
    )
}

export default Player;
