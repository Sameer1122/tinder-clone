import React from 'react'
import './SwipeButton.css'
import ReplayIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButton() {
  return (
    <div className='swipebutton'>
      <IconButton className = 'reply'>
        <ReplayIcon fontSize = 'large' />
      </IconButton>
      <IconButton className = 'close'> 
        <CloseIcon fontSize = 'large'/>
      </IconButton>
      <IconButton className = 'star'> 
        <StarRateIcon fontSize = "large" />
      </IconButton>
      <IconButton className ='favorite'>
        <FavoriteIcon fontSize ='large' />        
      </IconButton>
      <IconButton className ='flash'>
        <FlashOnIcon fontSize = 'large' />
      </IconButton>
    </div>
  )
}

export default SwipeButton
