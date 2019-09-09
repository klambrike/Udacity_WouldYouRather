import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import QuestionListTypeToggle from './QuestionListTypeToggle'

class MainDashBoard extends Component {
    state = {answeredToggeled: false}

    onToggleChanged = (answeredToggeled) => {
        this.setState({answeredToggeled})
    }

    render() {
        return(
            <div>
                <QuestionListTypeToggle answeredToggeled={this.state.answeredToggeled} onToggleChanged={this.onToggleChanged}/>
                <QuestionsList excludeCurrentUser={false} showAnsweredQuestions={this.state.answeredToggeled}/>
            </div>
        )
    }
}

export default MainDashBoard