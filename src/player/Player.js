import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Body from '../body/Body'
import "./Player.css"
import Footer from '../footer/Footer'
export default function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            {/* FOOTER */}
            <Footer />
        </div>
    )
}
