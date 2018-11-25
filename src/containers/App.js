import React, { Component } from 'react';
import { Fullpage, Slide } from 'react-full-page';
import './App.css';

import Header from '../containers/Header/Header';
import Main from '../containers/Main/Main';
import Footer from '../containers/Footer/Footer';
import FullPage from '../../node_modules/react-full-page/lib/components/FullPage';
const ACC_KEY = "0e00a6fbe35113c24df50c975ad07bb4d9a9396cd031c724adc8eff3685f0e2d";
var value="";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      searchBox: "",
      query: "cars",
      title: "cars",
      currentIndex: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateText = this.updateText.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  };


  componentDidMount() {
    fetch('https://api.unsplash.com/search/photos/?page=1&query=' + this.state.query + '&client_id=' + ACC_KEY)
      .then(res=> res.json())
      .then(data => {
        this.setState({ 
          items: data,
          isLoading: true 
        })
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  updateUrl(query) {
    this.url = 'https://api.unsplash.com/search/photos/?page=1&query=' + query + '&client_id=' + ACC_KEY;
    fetch(this.url)
    .then(res=> res.json())
    .then(data => {
      this.setState({ 
        items: data,
        isLoading: true 
      })
  })
  .catch(err => {
    console.log('Error happened during fetching!', err);
  });
}


updateText = (event) => {
  console.log("updateText", event.target.value);
  this.setState({searchBox: event.target.value});
  value = event.target.value;
}

  handleSubmit = (event) => {
    console.log("handleSubmit target value", value);
    this.setState({
      query: value,
      title: value,
      searchBox: "",
     currentIndex: 1 })		
      console.log("handleSubmit", this.state.query);	 
    // set new url
    this.updateUrl(value);
}

prev = () => {
  if (this.state.currentIndex > 1 ) {

    var currentIndex = this.state.currentIndex;
    currentIndex--;
    this.setState({
    currentIndex: currentIndex
  })
}
console.log("index prev", this.state.currentIndex);
}

next = () => {
  var currentIndex = this.state.currentIndex;

  if (currentIndex < 8 ) {
    currentIndex++;
    this.setState({
    currentIndex: currentIndex
  })
  }
console.log("index next", this.state.currentIndex);

}



  render() {

    var { isLoading, items, searchBox, title } = this.state;
    return (
      <div className="App">
        <div className="fixed_bg">
        </div>
        <FullPage>
        <Slide className="own_slide">
          <Header />
        </Slide>
        <Slide className="own_slide">
          <Main 
            images={items} 
            isLoading={isLoading} 
            searchBox={searchBox}
            title={title}
            handleSubmit = {this.handleSubmit}
            updateText = {this.updateText}
            prev = {this.prev}
            next = {this.next}
            currentIndex = {this.state.currentIndex}
          />
        </Slide>
        </FullPage>
        <Footer />
      </div>
    );
  }
}

export default App;
