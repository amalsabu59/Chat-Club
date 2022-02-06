import React from 'react';
import './SidebarChat.css'
import { IconButton ,Avatar} from '@mui/material';

function SidebarChat({ addNewChat }) {

const createChat = () => {
  const roomName = prompt("please enter name for chat");
  if (roomName){
    //db stuff
  }
}

  return !addNewChat ? (
  <div className='sidebarChat'>
      <Avatar />
      <div className="sidebarChat_info">
          <h2>Room name</h2>
          <p>This is the last mesage in room</p>
      </div>
  </div>
  ) : (
   <div onClick={createChat}
   className="sidebarChat">
     <h3> Add new chat</h3>
   </div>
  )
}

export default SidebarChat;
