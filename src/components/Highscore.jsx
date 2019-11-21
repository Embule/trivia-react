import React from 'react';
import { fetchAllScores } from '../service';
export default class Highscore extends React.Component {

  constructor(props) {
    super(props)
    this.state = { scores: [], score: this.props.location.score, name: this.props.location.name }
  }

  componentDidMount() {
    this.fetchScoreList();
  }
  //fetch data from the server and sort it 
  fetchScoreList = () => {
    fetchAllScores().then(allScores => {
      this.setState({ scores: allScores });
    })
  }
  render() {
    if (!this.state.scores) {
      return <p>Loading...</p>
    }
    var sortArray = this.state.scores.sort(function (a, b) { return b.score - a.score });
    var scorerows = sortArray.map(i => <tr key={i._id}><td>{i.name}</td><td>{i.score}</td></tr>)
    return (

      <div className="highscore" align="center">
        <h1>Onnea {this.state.name}, pääsit loppuun ja valmistut Academysta! </h1>
        <h2>Pisteesi: {this.state.score}</h2>
        <h3>Top-lista</h3>
        <table>
          <tbody>
            <tr>
              <th>Nimi</th>
              <th>Pistemäärä</th>
            </tr>
            {scorerows}
          </tbody>
        </table>
        <a className="btn" id="scorebutton" href="/">Uusi Peli</a>
      </div>
    )}
  }
