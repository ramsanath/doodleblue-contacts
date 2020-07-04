import React from 'react';
import './css/index.css';
import './css/components.css';
import './css/theme.css';
import ContactList from './contact/ContactList';

const Home = () => {
  return (
    <div className="column app">
      <ContactList style={styles.list} />
    </div>
  );
}

const styles = {
  list: {
    width: '30%'
  },
  chat: {
    width: '70%'
  }
}

export default Home;
