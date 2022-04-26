import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import './Header.css'
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>

        <img 
        className='header__logo'
        src="/images/tinder-logo.png" alt="" />

<IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}

export default Header
