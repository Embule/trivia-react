import React from 'react';


const Score = ({ refresh, score }) => {
  return (
    <div className="scoreCard">
      <h1>Pisteesi</h1>
      <p>{score}200</p>
      <h2>Top-lista</h2>
      <p></p>
      <table>
        <tr>
          <th>Nimi</th>
          <th>Pistemäärä</th>
        </tr>
        <tr>
          {/* <td>{top.name}</td>
          <td>{top.score}</td> */}
        </tr>
      </table>
      <button onClick={refresh}>Uusi Peli</button>
    </div>
  )
}

export default Score;