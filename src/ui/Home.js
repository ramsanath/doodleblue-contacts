import React from 'react';
import './css/index.css';
import './css/components.css';
import './css/theme.css';
import ContactList from './contact/ContactList';
import Conversation from './conversation/Conversation';

const Home = () => {
  return (
    <div id="app">
      <ContactList style={styles.list} />
      <Conversation style={styles.chat} />
    </div>
  );
}

const styles = {
  list: {
    width: '40%'
  },
  chat: {
    width: '60%'
  }
}

export default Home;
