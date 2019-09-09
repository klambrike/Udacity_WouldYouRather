import React from 'react'
import { ToggleButton, ToggleButtonGroup, Container, Row } from 'react-bootstrap'
import './QuestionListTypeToggle.css'

const QuestionListTypeToggle = ({answeredToggeled, onToggleChanged}) => {
    
    const handleChange = val => {
        onToggleChanged(val)
    }

    return(
        <div className='QuestionListTypeToggle'>
            <Container>
                <Row className='justify-content-md-center'>
                    <ToggleButtonGroup type='radio' value={answeredToggeled} onChange={handleChange} name='questionListType'>
                        <ToggleButton value={false}>Unanswered</ToggleButton>
                        <ToggleButton value={true}>Answered</ToggleButton>
                    </ToggleButtonGroup>
                </Row>
            </Container>
        </div>
    )
}

export default QuestionListTypeToggle;