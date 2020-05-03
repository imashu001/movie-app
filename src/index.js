import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';


// //middleware added here
// const logger = function({dispatch,getState}){
//     return function(next){
//         return function(action){
//             //middleware code
//             console.log('Action Type ',action.type)
//             next(action);
//             // if next not caslled loop will stuck at middleware and movies wont render
//         }
//     }
// }
const logger = ({dispatch,getState}) => (next) => (action) => {
    // console.log('Action Type ',action.type)
    next(action);
}
const thunk = ({dispatch,getState}) => (next) => (action) => {
    // console.log('Action Type ',action.type)
    if(typeof action ==='function'){
        action(dispatch);
        return;
    }
    next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log('Store',store);
// console.log('BEFORE STATE ', store.getState());


// store.dispatch({
//     type: 'ADD_MOVIES',
//     movies: [{name: 'Superman'}]
// });

// console.log('AFTER STATE ', store.getState());


ReactDOM.render(<App store={store}/>,document.getElementById('root'));

