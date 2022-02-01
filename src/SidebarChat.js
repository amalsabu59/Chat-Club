import React from 'react';
import './SidebarChat.css'
import { IconButton ,Avatar} from '@mui/material';

function SidebarChat() {
  return <div 
  className='sidebarChat'>
      <Avatar/>
      <div className="sidebarChat_info">
          <h2>Room name</h2>
          <p>This is the last mesage in room</p>
      </div>
  </div>;
}

export default SidebarChat;
