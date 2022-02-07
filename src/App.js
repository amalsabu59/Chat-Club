import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';
import Login from './Login';

function App() {

const [messages, setMessages] = useState([]);

useEffect(() => {
 axios.get('/messages/sync')
 .then(response =>{
   console.log(response.data) 
   setMessages(response.data)
 })
}, []);

useEffect(() => {
  var pusher = new Pusher('725a0d18aeab76a3b0c0', {
    cluster: 'ap2'
  });

  var channel = pusher.subscribe('messages');
  channel.bind('inserted', function(newMessage) {
    //alert(JSON.stringify(newMessage));
    setMessages([...messages, newMessage])
  });

 
}, [messages]);

const [user, setUser] = useState(null);

  return (
    <div className="app">
      
      {!user ? (
        <Login />
      ): (
        <div className="app_body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
      )}
      
    </div>
  );
}

export default App;
