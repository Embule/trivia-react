const url = '/api/questions';

export const fetchAllData = () => {
    return fetch(url)
        .then(resp => resp.json())
}

// export const postQuestion = (quote) => {
//     return fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(question)
//     })
// }