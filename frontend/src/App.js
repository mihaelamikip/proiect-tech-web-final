import React, { Component } from 'react';
import './App.css';
import FounderList from './FounderList'
import CompanyList from './CompanyList'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Founders & Co.</h1>
          
        </header>
        <div className="wrap2">
            <div className="search2">
              <input type="text" className="searchTerm" placeholder="Search for a founder..." />
              <button type="submit" className="searchButton">Search</button>
            </div>
    </div>
     <div className="wrap">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="Search for a company..." />
              <button type="submit" className="searchButton">Search</button>
            </div>
    </div>
        <FounderList /> <CompanyList />
        
      </div>
    );
  }
}

export default App;