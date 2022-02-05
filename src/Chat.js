import React from 'react';
import './Chat.css'
import { IconButton ,Avatar} from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
function Chat({messages}) {
  return <div className='chat'>
      <div className="chat_header">
          <Avatar />
          <div className="chat_headerInfo">
              <h3>Room name</h3>
              <p>last seen 12:50 </p>
          </div>
          <div className="chat_headerRight">
              <IconButton>
                  <YoutubeSearchedForIcon />
              </IconButton>
              <IconButton>
                  <AttachmentIcon />
              </IconButton>
              <IconButton>
                  <MoreVertIcon />
              </IconButton>
          </div>
      </div>
      <div className="chat_body">
          {messages.map((messages) => (
               <p className={`chat_message ${messages.received && "chat_reciever"}`}>
               <span className='chat_name'>A{messages.name}</span>
               {messages.message}
               <span className='chat_timestamp'>{new
                   Date().toUTCString()}</span>
 
           </p>
          ))}
         
         
      </div>
      <div className="chat_footer">
          <EmojiEmotionsIcon />
          <form action="">
              <input placeholder='type a message' type="text" />
              <button type='submit'>Send</button>
          </form>
          <MicIcon/>
      </div>
  </div>;
}

export default Chat;
