import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import {
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component
{
  apiKey = process.env.React_App_APIKEY;
  pageSize = 10;
  constructor()
  {
    super();
    this.state = {progress:0}
  }

  setProgress = (newProgress)=>
  {
    this.setState({progress:newProgress})
  }
  render()
  {
    return(
      <>
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={()=>this.setProgress(0)}
      />
      <Routes>
      <Route exact path = "/" element = {<News apiKey ={this.apiKey} setProgress = {this.setProgress}  key = "general"  pageSize = {this.pageSize} category = "general" />}  />
      <Route exact path = "/science" element = {<News apiKey ={this.apiKey} setProgress = {this.setProgress}  key = "science" pageSize = {this.pageSize} category = "science"/>} />
      <Route exact path = "/entertainment" element = {<News apiKey ={this.apiKey} setProgress = {this.setProgress}  key = "entertainment" pageSize = {this.pageSize} category = "entertainment"/>} />
      <Route exact path = "/health" element = {<News apiKey ={this.apiKey} setProgress = {this.setProgress}   key = "health"  pageSize = {this.pageSize} category = "health"/>} />
      <Route exact path = "/technology" element = {<News apiKey ={this.apiKey} setProgress = {this.setProgress}  key = "technology" pageSize = {this.pageSize} category = "technology"/>} />
      <Route exact path = "/sports"  element = {<News apiKey ={this.apiKey} setProgress = {this.setProgress}  key = "sports" pageSize = {this.pageSize} category = "sports"/>} />
      <Route exact path = "*"  element = {<News apiKey ={this.apiKey} setProgress = {this.setProgress}  key = "general" pageSize = {this.pageSize} category = "general"/>} />
      </Routes>
      </>
    );
  }
}