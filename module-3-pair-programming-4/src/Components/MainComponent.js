import React, { Component } from 'react';
import HeaderComponent from './HeadComponent';
import FooterComponent from './FooterComponent';
import AnswersComponent from './AnswersComponent';

class MainComponent extends Component {
    constructor (props) {
        super (props)
        let left_operand = Math.floor(Math.random()*Math.floor(10));
        let right_operand = Math.floor(Math.random()*Math.floor(10));
        let answer = left_operand * right_operand;
        this.state = {
            left_operand: left_operand, 
            right_operand: right_operand,
            answer: answer,
            answers: this.generateAnswers(left_operand, right_operand),
            count: 0,
            score: 0
        }
        this.newProblem ();
        this.handleStartOver = this.handleStartOver.bind(this);
    }

    newProblem() {
        let left_operand = Math.floor(Math.random()*Math.floor(10));
        let right_operand = Math.floor(Math.random()*Math.floor(10));
        let answer = left_operand * right_operand;
        // updateDisplayProblem([left_operand, right_operand]);
        this.setState({left_operand: left_operand});
        this.setState({right_operand: right_operand});
        this.setState({answer: answer});
        console.log(this.state);

        this.setState({answers: this.generateAnswers(left_operand, right_operand)});

        return [left_operand,right_operand]
    }

    displayexpression () {
        return this.state.left_operand + " * " + this.state.right_operand;
        
    }

    generateAnswers (left_operand, right_operand) {
        let possibleAnswers = [];
        possibleAnswers.push(left_operand * right_operand);

    while(possibleAnswers.length < 4) {
        let choice = Math.floor(Math.random()*Math.floor(81));
        if(!possibleAnswers.includes(choice)) {
            possibleAnswers.push(choice);
        }
    }

    possibleAnswers = possibleAnswers.sort(function (a, b) {return Math.random() - 0.5});
    return possibleAnswers;
    }

    handleanswerClick=(e)=>{
    let selectedAnswer = e.target.innerText;
    if (selectedAnswer == this.state.answer) {
        let score = this.state.score + 1;
        this.setState ({score: score});
    }
    let count = this.state.count +1;
    this.setState ({count: count});

    let operands = this.newProblem ();
    let possibleAnswers = this.generateAnswers(operands[0], operands[1]);
    this.setState({answers: possibleAnswers});
    
    }

    checkFinish() {
    if(this.state.count == 10){
        return "hidden";
    }
    else {
        return "";
    }   
    }

    handleStartOver() {
        this.setState({count: 1});
        this.setState({score: 0});
        let operands = this.newProblem ();
        let possibleAnswers = this.generateAnswers(operands[0], operands[1]);
        this.setState({answers: possibleAnswers});
    }

    render() {
        return (
            <div>
            <HeaderComponent/>
        <main>
            <section id="problem">
            <div className={`expression show-hide ${this.checkFinish()}`}> {this.displayexpression()}</div>
            <p>
                Problem: <span className="currentProblem">{this.state.count}</span>/10 | Score: <span className="currentScore">{this.state.score}</span>
            </p>
            </section>
            <div className={`${this.checkFinish()}`}>
            <AnswersComponent answers={this.state.answers} clickhandler= {this.handleanswerClick}/>
            </div>
           

            <button id="btnStartOver" onClick={this.handleStartOver}>Start Over</button>
        </main>
        <FooterComponent/>
            </div>
        );
    }
}

export default MainComponent;