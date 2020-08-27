import React from 'react'
import "./Body.css"
import Header from '../header/Header'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../song_row/SongRow';

export default function Body({ spotify }) {

    let [{ weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img
                    src={weekly?.images[0].url}
                    alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon />
                    <MoreHorizIcon />
                </div>


                {weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}
