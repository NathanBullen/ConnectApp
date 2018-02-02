import React from 'react';
import data from '../data/QuizQuestions.js';
import Answers from './Answers';
import QuizOverlay from './QuizOverlay';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            total: data.length,
			showNextButton: false,
            questionAnswered: false,
            score: 0,
			displayEndQuiz: 'flex'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
		this.handleShowNextButton = this.handleShowNextButton.bind(this);
    }

    loadQuestion(currentQuestion) {
	    //This allows for more than 4 answers.
		var iterateanswers = [];
		for(var i = 0; i < data[currentQuestion].answers.length; i++) {
			iterateanswers.push(data[currentQuestion].answers[i]);
		}
        this.setState({
            question: data[currentQuestion].question,
			answers: iterateanswers,
            correctAnswer: data[currentQuestion].correctanswer,
            currentQuestion: currentQuestion + 1
        });
    }

    componentWillMount() {
        let { currentQuestion } = this.state;
        this.loadQuestion(currentQuestion);
    }

    nextQuestion() {
        let { currentQuestion, total, score } = this.state;

        if(currentQuestion === total){
			//End Quiz State
            this.setState({
                displayEndQuiz: 'flex'
            });
        } else {
            this.loadQuestion(currentQuestion);
            this.setState({
				showNextButton: false,
                questionAnswered: false
            });
        }

    }

    handleStartQuiz() {
        this.setState({
            displayEndQuiz: 'none',
            currentQuestion: 1
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }
	
	handleShowNextButton() {
		this.setState({
			showNextButton: true
		});
	}
	
    render() {
        let { currentQuestion, total, question, answers, correctAnswer, questionAnswered, displayEndQuiz, score, showNextButton} = this.state;

        return (
            <div id="quiz">
			
				<QuizOverlay style={{display: displayEndQuiz}} score={score} total={total} startQuiz={this.handleStartQuiz}/>
			
				<div class="quiz-introduction-holder">
					<div class="quiz-introduction-text-box">
						<h4>Question {currentQuestion} of {total}</h4>
						<p>{question}</p>
					 </div>
					 <Answers answers={answers} correctAnswer={correctAnswer} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore} showNextButton={this.handleShowNextButton}/>
					{showNextButton ? 
					<div>
						<div class="horizontal-line"></div> 
						<div id="submit">
							<button className="fancy-btn" onClick={this.nextQuestion} >{currentQuestion===total ? 'View Results' : 'Next Question'}</button>
						</div>
						<div class="horizontal-line"></div>
					</div> : null}
				</div>
			</div>
        );
    }
};

export default Quiz