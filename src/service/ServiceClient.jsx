const url = '/api/questions';

export const getQuestions = () => {
  return fetch(url)
  .then(res => res.json())
}