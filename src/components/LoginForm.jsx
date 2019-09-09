import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserRow from './UserRow'
import { setAuthedUser } from "../actions/authentication";
import { Redirect } from 'react-router-dom';
import './LoginForm.css'
import { Row, Col } from 'react-bootstrap'

class LoginForm extends Component {
    state = {
        redirectToHome: false
    }

    userClicked = (e, userId) => {
        e.preventDefault()

        this.props.dispatch(setAuthedUser(userId))
        this.setState({
            redirectToHome: true
        })
    }

    render() {
        const { userIds } = this.props

        if(this.state.redirectToHome === true) {
            return <Redirect to='/' />
        }

        return(
            <div className="LoginForm-container">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <h1>Select your user</h1>
                    <ul>
                        {userIds && userIds.map( userId => (
                            <div key={userId} onClick={(e) => this.userClicked(e, userId)}>
                                <UserRow userId={userId} />
                            </div>
                        ))}
                    </ul>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return {
        userIds: auth ? Object.keys(auth.users) : null
    }
}

export default connect(mapStateToProps)(LoginForm)