import React from 'react'
import {render} from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home.jsx'
import FundMe from './components/FundMe/FundMe.jsx'
import Meet from './components/Meet/Meet.jsx'
import News from './components/News/News.jsx'


render(
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/fundme" component={FundMe} />
    <Route exact path="/meet" component={Meet} />
    <Route exact path="/news" component={News} />
  </Switch>
</BrowserRouter>, document.getElementById('app'))