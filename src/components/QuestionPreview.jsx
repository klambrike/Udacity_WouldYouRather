import React, { useState, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export default ({questionId, questionAnswerOne, questionAnswerTwo}) => {
    const [showQuestionDetailView, setShowQuestionDetailView] = useState(false)

    function handleButtonClick(e) {
        e.preventDefault()

        setShowQuestionDetailView(true)
    }
    
    return(
        <div className='QuestionPreview-container'>
            {
                showQuestionDetailView ? 
                <Redirect to={`/question/${questionId}`} />
                :
                <Fragment>
                    <div>
                        <p>{questionAnswerOne}</p>
                        <p>OR</p>
                        <p>{questionAnswerTwo}</p>
                    </div>
                    <Button variant='outline-primary' onClick={handleButtonClick}>View poll</Button>
                </Fragment>
            }
            
        </div>
    )
}