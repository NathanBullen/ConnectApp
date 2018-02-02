import React from 'react';
import data from '../data/QuizQuestions.js';
import QuizOverlay from './QuizOverlay';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            total: data.length,
            questionAnswered: false,
            score: 0,
			displayEndQuiz: 'flex'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    loadQuestion(currentQuestion) {
        this.setState({
            question: data[currentQuestion].question,
            answers: [data[currentQuestion].answers],
            correctanswer: data[currentQuestion].correctanswer,
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

    render() {
        let { currentQuestion, total, question, answers, correct, questionAnswered, displayEndQuiz, score} = this.state;

        return (
            <div id="quiz">
			
			<QuizOverlay style={{display: displayEndQuiz}} score={score} total={total} startQuiz={this.handleStartQuiz}/>
			
            </div>
        );
    }
};

export default Quiz