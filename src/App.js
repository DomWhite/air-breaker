import React, { Component } from 'react';
// import logo from './logo.svg';
import styles from './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import Map from './components/GoogleMap/GoogleMap';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        {/*<div className={styles.AppHeader}>*/}
          {/*<img src={logo} className={styles.AppLogo} alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
        {/*</div>*/}
        <SearchBar />
        <Map />
      </div>
    );
  }
}

export default App;
