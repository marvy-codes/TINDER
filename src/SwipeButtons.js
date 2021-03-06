import React from 'react';
import "./swipeButtons.css";
import IconButton from "@material-ui/core/IconButton"; 
import RelayIcon from "@material-ui/icons/Replay";
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className="swipeButtons_repeat">
                <RelayIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons_star">
                <StarRateIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
