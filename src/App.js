import React, {Component} from 'react';

import './App.css';
import Logo from './components/Logo.js';
import Hero from './components/Hero';
import TitleList from './components/TitleList';
import UserProfile from './components/UserProfile';
import Navigation from './components/Navigation';


class App extends Component {
  state = {
    searchTerm: "",
    searchUrl: ""
  }
  
  handleKeyUp = (e) => {
    const apiKey = '87dfa1c669eea853da609d4968d294be';
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + apiKey;
      this.setState({ searchUrl: searchUrl });
    }
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }
  
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;