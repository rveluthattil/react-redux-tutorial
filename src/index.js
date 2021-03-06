import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';

/*const stories = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID : 0
    }, 
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID : 1,       
    },
]*/

// subscribing to the store and then rendering

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
