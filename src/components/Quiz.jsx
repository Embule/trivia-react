import React from 'react';
import { fetchAllData } from '../service';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';
import Progress from './Progress';
import { postScore } from '../service'

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = { current: 0, dataSet: [], score: 0, lives: 3, currentSeconds: 10, name: '' }
        this.handleClick = this.handleClick.bind(this);
        this.renderTime = this.renderTime.bind(this);
        this.countdownRef = React.createRef();
    }

    componentDidMount() {
        this.fetchDataList();
    }

    fetchDataList = () => {
        fetchAllData().then(allData => {
            shuffle(allData);
            this.setState({ dataSet: allData });
            if (!this.props.location) {
                return <p>Loading...</p>
            }
        })
        this.setState({ name: this.props.location.state })
    }

    handleClick(choice) {
        if (choice === this.state.dataSet[this.state.current].correct_answer) {
            this.setState({ score: this.state.score + 10 + this.state.currentSeconds });
        } else {
            if (this.state.lives > 1) {
                this.setState({ lives: this.state.lives - 1 })
            } else {
                this.setState({ lives: this.state.lives - 1 })
                postScore({ name: this.state.name, score: this.state.score });
                this.props.history.push({ pathname: '/highscore', score: this.state.score, name: this.state.name })
            }
        }

        this.countdownRef.current.start();

        if (this.state.current === 19) {
            postScore({ name: this.state.name, score: this.state.score });
            this.props.history.push({ pathname: '/highscore', score: this.state.score, name: this.state.name })
        } else {
            this.setState({ current: this.state.current + 1 })
        }
    }

    // Renderer callback with condition
    renderTime = ({ seconds, completed }) => {
        if (completed) {
            this.state.currentSeconds = 0;
            // Render a time out text
            return <TimeOut />;
        } else {
            this.state.currentSeconds = seconds;

            // Render a countdown
            return <span>{seconds}</span>;
        }
    };

    render() {
        return (
            <div>
                <div className="progressArea">
                    <Progress currentQuestion={this.state.current} />
                </div>
                <ScoreArea countdownRef={this.countdownRef} score={this.state.score} lives={this.state.lives} date={Date.now() + 10000} renderer={this.renderTime} />
                <h1>Onnea peliin, {this.state.name}!</h1>
                <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
                {/* <Highscore addCallback={this.addScore}/> */}
            </div>
        )
    }
}

const TimeOut = () => <span>Time out!</span>;