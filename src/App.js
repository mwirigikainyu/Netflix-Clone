import React, { Component } from "react";
import axios from "axios";
import requests from "./data/requests";
import { connect } from "react-redux";
import {
  saveMovies,
  saveTrending,
  saveShows,
  saveSplashImage,
  saveImageDetails,
} from "./Redux/Actions";
import NavBar from "./Components/NavBar";
import Row from "./Components/Row";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends Component {
  async componentDidMount() {
    const getTrending = axios.get(requests.getTrending);
    const getPopularMovies = axios.get(requests.getPopularMovies);
    const getPopularShows = axios.get(requests.getPopularShows);

    await getTrending.then((res) => {
      this.props.dispatch(saveTrending(res.data.results));
    });
    await getPopularMovies.then((res) => {
      this.props.dispatch(saveMovies(res.data.results));
    });
    await getPopularShows.then((res) => {
      this.props.dispatch(saveShows(res.data.results));
    });

    this.getSplashImage();
  }
  getSplashImage = () => {
    const luckyNum = Math.floor(Math.random() * 20 + 1);
    const imageUrl = this.props.trending[luckyNum].backdrop_path;
    const imageDetails = this.props.trending[luckyNum];
    this.props.dispatch(saveImageDetails(imageDetails));
    this.props.dispatch(saveSplashImage(this.props.baseUrl + imageUrl));
  };

  render() {
    return (
      <div>
        <NavBar logo={this.props.logo} />
        <Header
          image={this.props.splashImage}
          details={this.props.imageDetails}
        />
        {/* {this.props.movies ? <Row data={this.props.movies} /> : <p>Loading...</p>} loader*/}
        <Row data={this.props.movies} title="Movies" />
        <Row data={this.props.shows} title="Tv Shows" />
        <Row data={this.props.trending} title="Trending" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authenticated,
    movies: state.movies,
    logo: state.logo,
    baseUrl: state.baseUrl,
    trending: state.trending,
    shows: state.shows,
    splashImage: state.splashImage,
    imageDetails: state.imageDetails,
  };
};

export default connect(mapStateToProps)(App);
