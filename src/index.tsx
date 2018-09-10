import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const render = (app: typeof App) =>
  ReactDOM.render(<App />, document.getElementById('app'));

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('reload index');
    setTimeout(() => render(require('./components/App').default));
  });
}
