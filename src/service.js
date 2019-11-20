const url = '/api/questions';

export const fetchAllData = () => {
    return fetch(url)
        .then(resp => resp.json())
}

const scoreUrl = '/api/scores';

export const fetchAllScores = () => {
    return fetch(scoreUrl)
.then(resp => resp.json())
}

export const postScore = (score) => {
    return fetch(scoreUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(score)
    })
}