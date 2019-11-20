import React from 'react';
import { fetchAllData } from '../service';
import QuizArea from './QuizArea'
import ScoreArea from './ScoreArea'

export class Quiz extends React.Component {

    constructor(props) {
        super(props)
        this.state = { current: 0, dataSet: [], correct: 0, lives: 3, name: '' }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.fetchDataList();
    }

    fetchDataList = () => {
        fetchAllData().then(allData => {
            this.setState({ dataSet: allData });
            console.log(this.state)
            if (!this.props.location) {
                return <p>Loading...</p>
            }
            this.setState({ name: this.props.location.state })
        })
    }

    handleClick(choice) {
        console.log(choice)
        console.log(this.state);
        if (choice === this.state.dataSet[this.state.current].correct_answer) {
            this.setState({ correct: this.state.correct + 1 })
        } else {
            if (this.state.lives > 1) {
                this.setState({ lives: this.state.lives - 1 })
            } else {
                // window.alert("Kuolit. 18 000 €");
                //TÄHÄN SCOREN JA NIMEN POSTAUS?
                this.props.history.push('/highscore', this.state.correct)
            }
        }

        if (this.state.current === 9) {
            this.setState({ current: 0 })
            this.setState({ lives: 0 })
            this.setState({ correct: 0 })
        } else {
            this.setState({ current: this.state.current + 1 })
        }
    }

    render() {
        return (
            <div>
                <h1>Onnea peliin, {this.state.name}!</h1>
                <ScoreArea correct={this.state.correct} lives={this.state.lives} />
                <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
            </div>
        )
    }
}
// function Question(props) {
//     var style = {
//         color: "red",
//     }
//     if (!props.dataSet) {
//         return <p>Loading...</p>
//     }
//     return (
//         <h1 style={style}>{props.dataSet.question}</h1>
//     )
// }

// function Answer(props) {
//     var style = {
//         width: "100%",
//         height: 50,
//         color: "black"
//     }
//     return (
//         <div>
//             <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
//         </div>
//     )
// }

// function AnswerList(props) {
//     var answers = []
//     if (!props.dataSet) {
//         return <p>Loading...</p>
//     }
//     for (let i = 0; i < props.dataSet.answers.length; i++) {
//         answers.push(<Answer choice={props.dataSet.answers[i]} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
//     }
//     return (
//         <div>
//             {answers}
//         </div>
//     )
// }

// function QuizArea(props) {
//     var style = {
//         width: "100%",
//         display: "block",
//         textAlign: "center",
//         boxSizing: "border-box",
//         float: "left",
//         padding: "0 2em"
//     }
//     return (
//         <div style={style}>
//             <h2>Kysymys: </h2>
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
//         <h2 style={style}>Oikeita vastauksia: {props.correct}</h2>
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
//         <h2 style={style}>Elämiä jäljellä: {props.lives}</h2>
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