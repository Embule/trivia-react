import React from 'react';
import { fetchAllScores, postScore } from '../service';

export default class Highscore extends React.Component {

  constructor(props) {
    super(props)
    this.state = { scores: [] }
  }

  componentDidMount() {
    this.fetchScoreList();
  }
  //fetch data from the server
  fetchScoreList = () => {
    fetchAllScores().then(allScores => {
      this.setState({ scores: allScores });
      console.log(this.state.scores)
    })
  }

  // addScore = score => {
  //   postScore(score).then(vastaus => {
  //     this.fetchScoreList();
  //   })
  // }
  //error handling 
  render() {
    if (!this.state.scores) {
      return <p>Loading...</p>
    }
    var scorerows = this.state.scores.map(i => <tr key={i._id}><td>{i.name}</td><td>{i.score}</td></tr>)
    // const Score = ({score}) => {
    return (

      <div className="highscore">
        <h1>Onnea pääsit loppuun ja valmistut Academysta! </h1>
        <h2>Pisteesi:</h2>
        {/* <p>{score}</p> */}
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
        <a className="btn" class="scorebutton" href="/">Uusi Peli</a>
      </div>
    )}
  }
// }


//lisäää pelin loppu///////////////
// function restartGame(props) {
//   this.state.lives == 0
//   this.router.navigateByUrl("/score")
// }
// return (
//   <div>
//       <Highscore score={props.correct} refresh={this.restartGame}/>
//   </div>
// )
//tähän loppuu lisäys////////////