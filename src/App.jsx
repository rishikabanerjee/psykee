import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchFriends() {
      const { data, error} = await supabase.from('friends').select('*');
      if (error) {
        console.error('Error fetching friends:', error);
      } else {
        setFriends(data);
       }
      }
      fetchFriends();
    }, []);

    return (
      <div className="app">
        <h1>Friend List</h1>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>
              {friend.username} - {friend.status}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  export default App;

