import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
			highlightedAnswer: '',
			checkedAnswer: false,
            classNames: ['', '', '', '']
        }
        
		this.highlightAnswer = this.highlightAnswer.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
		this.handleCheckedAnswer = this.handleCheckedAnswer.bind(this);
    }
    
	highlightAnswer(e) {
		let { highlightedAnswer } = this.props;
		let{ checkedAnswer } = this.state;
		//If someone has already checked their answer, they shouldn't be able to select others
		if(checkedAnswer){
			return;
		}
		let elem = e.currentTarget;
		let updatedClassNames = this.state.classNames;
		let answer = Number(elem.dataset.id);
		updatedClassNames[this.state.highlightAnswer-1] = '';
		updatedClassNames[answer-1] = 'selected';
		
		this.setState({
			classNames: updatedClassNames,
			highlightAnswer: answer
		});
		this.props.questionHasStarted();
	}
	
	handleCheckedAnswer() {
        this.setState({
            checkedAnswer: true,
			questionAnswered: true
        })
		this.props.showNextButton();
    }
	
    checkAnswer(e) {
        let { isAnswered } = this.props;
		//Checking if they have selected an answer before submitting
        if(!this.state.highlightAnswer){
			alert("You need to select an answer");
		}
        else if(!isAnswered) {
            let { correctAnswer, increaseScore } = this.props;
            let answer = this.state.highlightAnswer;
            let updatedClassNames = this.state.classNames;

            if(answer === correctAnswer){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }
            
            this.setState({
                classNames: updatedClassNames,
            })
			this.handleCheckedAnswer();
        }
    }
    
    shouldComponentUpdate() {
        return true;	
    }
	
	setMaxHeight() {
		var height = Math.max(this.refs.A.offsetHeight,this.refs.B.offsetHeight,this.refs.C.offsetHeight, this.refs.D.offsetHeight);
		//If the answers aren't rendered yet, we don't want to change their size
		if(height){
			this.refs.A.style.height = height + 'px';
			this.refs.B.style.height = height + 'px';
			this.refs.C.style.height = height + 'px';
			this.refs.D.style.height = height + 'px';
			return true;
		}	
	}
	
	resetHeight() {
		this.state.beingrendered = true;
		this.refs.A.style.height = '';
		this.refs.B.style.height = '';
		this.refs.C.style.height = '';
		this.refs.D.style.height = '';
		this.setMaxHeight();
	}
		
    render() {
        let { answers } = this.props;
		let { classNames, checkedAnswer } = this.state;
		let { questionStarted } = this.props;
		
		if(!questionStarted){
			this.state.highlightedAnswer = '';
			this.state.classNames = ['', '', '', ''];
			this.state.checkedAnswer = false;
			this.props.questionHasStarted();
		}
        
        let transition = {
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
        }
		
        return (
			<div>
				<div id="answers">
					<ul>
						<li onClick={this.highlightAnswer} className={classNames[0]} data-id="1" ref="A" ><span>A</span> <p class="watchtextchange">{answers[0]}</p></li>
						<li onClick={this.highlightAnswer} className={classNames[1]} data-id="2" ref="B"><span>B</span> <p class="watchtextchange">{answers[1]}</p></li>
						<li onClick={this.highlightAnswer} className={classNames[2]} data-id="3" ref="C"><span>C</span> <p class="watchtextchange">{answers[2]}</p></li>
						<li onClick={this.highlightAnswer} className={classNames[3]} data-id="4" ref="D"><span>D</span> <p class="watchtextchange">{answers[3]}</p></li>
					</ul>
				</div>	
				{checkedAnswer ? null : 
				<div>
					<div class="horizontal-line"></div> 
					<div id="submit">
						<button className="fancy-btn" onClick={this.checkAnswer}>Check Answer</button>
					</div>
					<div class="horizontal-line"></div>
				</div>}
			</div>
        );
    }
}

export default Answers