import React, { Component } from 'react';

class AnswersComponent extends Component {
    constructor (props) {
        super (props)
        console.log(props)
    }

    render() {
        return (
            <section id="answers" className="show-hide">
            <ul>
                {this.props.answers.map((answer) =>{
                    return <li key={answer}onClick={this.props.clickhandler}>{answer}</li>
                })}
            </ul>
            </section>
        );
    }
}

export default AnswersComponent;