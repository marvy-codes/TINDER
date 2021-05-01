import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>
            
            <img
                className='header__logo'
                src='https://www.flaticon.com/premium-icon/icons/svg/2584/2584680.svg'
                alt=''
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header