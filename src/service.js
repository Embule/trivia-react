const url = '/api/questions';

export const fetchAllData = () => {
    return fetch(url)
        .then(resp => resp.json())
}
