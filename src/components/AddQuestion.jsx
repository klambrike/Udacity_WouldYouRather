import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleAddNewQuestion } from '../actions/questions'
import { Row, Col } from 'react-bootstrap'
import './AddQuestion.css'
import { Button } from 'react-bootstrap'

class AddQuestion extends Component {

    state = {
        optionA: '',
        optionB: '',
        goToHome: false
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { optionA, optionB } = this.state
        this.props.dispatch(handleAddNewQuestion(this.props.userId, optionA, optionB))

        this.setState({
            goToHome: true
        })
    }

    handleTextChange = (e, optionId) => {
        this.setState({
            [optionId]: e.target.value
        })
    }

    render() {
        const { optionA, optionB, goToHome } = this.state

        if(goToHome) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className='AddQuestion-container'>
                            <h1>Would you rather:</h1>
                            <form onSubmit={this.handleFormSubmit}>
                                <textarea value={optionA} placeholder='Option 1' onChange={(e) => this.handleTextChange(e, 'optionA')}/>
                                <p>OR</p>
                                <textarea value={optionB} placeholder='Option 2' onChange={(e) => this.handleTextChange(e, 'optionB')}/>
                                <Button variant='primary' type='submit'>Add question</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return {
        userId: auth.userId
    }
}

export default connect(mapStateToProps)(AddQuestion)