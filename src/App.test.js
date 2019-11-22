import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("/highscore should return list of scores", () => {
  return request(response.body)
      .get("/highscore").then(response => {
          expect(response.statusCode).toBe(200);
          // expect(response.body.length).toBe(5);
          // expect(response.body[0].name).toMatch(/John/);
      });
});
