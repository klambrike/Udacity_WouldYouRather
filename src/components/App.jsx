import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from './NavigationBar'
import LoginForm from './LoginForm'
import MainDashboard from './MainDashboard'
import { getUserList } from '../actions/authentication';
import LoadingBar from 'react-redux-loading';
import AddQuestion from './AddQuestion'
import { Container } from 'react-bootstrap'
import './App.css'
import SingleQuestionView from './SingleQuestionView'
import LeaderBoards from './LeaderBoards'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUserList())
  }

  render() {
    return (
        <BrowserRouter>
          <Fragment>
              <LoadingBar/>
              <NavigationBar/>
              <Container className='App'>
              {this.props.authenticated
                ?
                <div>
                  <Route path='/' exact component={MainDashboard} />
                  <Route path='/login' component={LoginForm} />
                  <Route path='/add' component={AddQuestion} />
                  <Route path='/leaderboard' component={LeaderBoards} />
                  <Route path='/question/:questionId' component={SingleQuestionView} />
                </div>
                :
                <LoginForm/>
              }
            </Container>
          </Fragment>
        </BrowserRouter>
    )
  }
}

function mapStateToProps({auth}) {
  const userName = auth.userId !== undefined ? auth.users[auth.userId].name : null

  return {
    authenticated: userName !== null,
    userName: userName
  }
}

export default connect(mapStateToProps)(App);
