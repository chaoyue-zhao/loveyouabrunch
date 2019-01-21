import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSearchLocation, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import RestaurantList from './Components/RestaurantList';
import Footer from './Components/Footer';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
  }

  onFormSubmit = (searchLocationQuery) => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
          title = 'Love you a brunch'
          tagline = 'Find the perfect spot for your next weekend late morning meal.'
        />
        <SearchForm onFormSubmit = {this.onFormSubmit}/>
        <RestaurantList 
          searchLocationQuery = {this.state.searchLocationQuery}/> 
        <Footer 
          message = 'Built with &hearts; in the beautiful city of Toronto, Canada. Powered by Yelp Fusion. Design inspired by Sea Harvest.'

          thanks = 'Special thanks to Karley, Tiff, Shangni, Katie, Mark and the amazing HackerYou team. You have never failed to inspire me going. '

          copyright = '&#169; 2019 by Chaoyue Zhao. All rights reserved.'/>
      </div>
    );
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt)

export default App;


// <Footer />