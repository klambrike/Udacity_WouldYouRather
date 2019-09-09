import React from 'react'
import './AnswerStatistics.css'

function AnswerStatistics({ isSelectedOption, answerText, answeringPercentage, answersCountText }) {
    return (
        <div className={isSelectedOption ? 'answer-option answer-option-selected' : 'answer-option'}>
            {isSelectedOption && <div className="your-answer">Your vote</div>}
            <span className='answer-text'>{answerText}</span>
            <div className='answering-percentage-container'>
                <div className='answering-percentage-text'>{answeringPercentage ? `${answeringPercentage}%` : ''}</div>
                <div className='answering-percentage-filler' style={ {"--progress-width": answeringPercentage+"%"}}/>
            </div>
            <div className="answers-count-text">{answersCountText}</div>
        </div>
    )
}

export default AnswerStatistics