import React from 'react'
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from '../sidebar-option/SidebarOption';
import { useDataLayerValue } from '../DataLayer';


export default function Sidebar() {

    const [{ playlists }, distpatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => {
                return (
                    <SidebarOption key={playlist.name} title={playlist.name} />
                )
            })}

        </div>
    )
}
