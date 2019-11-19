import React from 'react';
import ReactDOM from 'react-dom';
import {getQuestions} from '../service/ServiceClient';
import Question from './Question';

export class Quiz extends React.Component {

    constructor(props) {
        super(props)
        this.state = { current: 0, dataSet: [], correct: 0, lives: 3 }
        // this.handleClick = this.handleClick.bind(this)

    } // end constructor

    componentDidMount() {
        getQuestions().then(dataSet => {
            this.setState({dataSet});
            console.log(dataSet);
        })       
    }

    render() {
        const questions = this.state.dataSet
        .map((question)=>{
            return <Question {...this.props} question={question} key={question._id} />
        })
        return (            
            <div>
                moi
                {questions}
                {/* <ScoreArea correct={this.state.correct} lives={this.state.lives} />
                <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} /> */}
            </div>
        )
    }
}
//     handleClick(choice) {
//         if (choice === this.state.dataSet[this.state.current].correct) {
//             this.setState({ correct: this.state.correct + 1 })
//         } else {
//             this.setState({ lives: this.state.lives - 1 })
//         }

//         if (this.state.current === 9) {
//             this.setState({ current: 0 })
//             this.setState({ lives: 0 })
//             this.setState({ correct: 0 })
//         } else {
//             this.setState({ current: this.state.current + 1 })
//         }
//     }



// function Question(props) {
//     var style = {
//         color: "red",
//     }
//     return (
//         <h1 style={style}>{props.dataSet.question}</h1>
//     )
// }

// function Answer(props) {
//     var style = {
//         width: "100%",
//         height: 50,
//         color: "blue"
//     }
//     return (
//         <div>
//             <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
//         </div>
//     )
// }

// function AnswerList(props) {
//     var answers = []
//     for (let i = 0; i < props.dataSet.answers.length; i++) {
//         answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
//     }
//     return (
//         <div>
//             {answers}
//         </div>
//     )
// }

// function QuizArea(props) {
//     var style = {
//         width: "25%",
//         display: "block",
//         textAlign: "center",
//         boxSizing: "border-box",
//         float: "left",
//         padding: "0 2em"
//     }
//     return (
//         <div style={style}>
//             <Question dataSet={props.dataSet} />
//             <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
//         </div>
//     )
// }

// function TotalCorrect(props) {
//     var style = {
//         display: "inline-block",
//         padding: "1em",
//         background: "#eee",
//         margin: "0 1em 0 0"
//     }
//     return (
//         <h2 style={style}>Correct: {props.correct}</h2>
//     )
// }

// function TotalLives(props) {
//     var style = {
//         display: "inline-block",
//         padding: "1em",
//         background: "#eee",
//         margin: "0 0 0 1em"
//     }
//     return (
//         <h2 style={style}>Lives: {props.lives}</h2>
//     )
// }

// function ScoreArea(props) {
//     var style = {
//         width: "100%",
//         display: "block",
//         textAlign: "left",
//         float: "left",
//         padding: "2em"
//     }
//     return (
//         <div style={style} >
//             <TotalCorrect correct={props.correct} />
//             <TotalLives lives={props.lives} />
//         </div>
//     )
// }

// ReactDOM.render(
//     <Quiz />,
//     document.getElementById("root")
// )