import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo/Todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
