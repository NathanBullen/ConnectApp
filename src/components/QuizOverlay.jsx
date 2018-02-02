import React from 'react';

class QuizOverlay extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            finished: false,
            title: 'Quiz',
            description: 'Practice quiz, blah blah blah blah' ,
            buttonText: 'Start the quiz' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { finished } = this.state;
        
        if(!finished){
            this.setState({
                finished: true,
                title: 'Congratulations!',
                buttonText: 'Restart'
            });
            
            this.props.startQuiz();
        } else {            
            window.location.reload();// restart the application
        }
    }
    
    componentWillReceiveProps(nextProps) {
		if(this.props.showNextButton){
			this.setState({
				description: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + '</strong> out of <strong>' +this.props.total +'</strong> questions right.'
			})
		}
    }
    
    createMarkup(html) {
        return {__html: html};
    }
    
    
    render() {
       
        let { title, description, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <div class="quiz-introduction" style={style}>
				<div class="quiz-introduction-holder">
					<div class="quiz-introduction-text-box">
						<div class="rounded-box">
							<h1>{title}</h1>
						</div>
						<p dangerouslySetInnerHTML={this.createMarkup(description)} />
					</div>
					<div class="horizontal-line"></div>
					<button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
					<div class="horizontal-line"></div>
				</div>
            </div>
        );
    }
}

export default QuizOverlay