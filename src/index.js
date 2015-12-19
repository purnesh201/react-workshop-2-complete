import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Todos from './todos';
import TodoList from './todo-list';
import TodoDetail from './todo-detail';
import {syncReduxAndRouter,routeReducer} from 'redux-simple-router';
import {createHistory} from 'history';
import {Router,Route,IndexRoute} from 'react-router';
import DevTools from './devtools';

const initialState = {
    todos: []
};

const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
            const newTodos = state.todos.filter(t => t !== action.todo);
            return {todos: newTodos};
        case 'ADD_TODO':
            return {todos: state.todos.concat([action.todo])};
        case 'LOAD_TODOS':
            return {todos: action.todos};
        default:
            return state;
    }
};

const history = createHistory();
const reducer = combineReducers({
    todoApp,
    routing: routeReducer
});

const createStoreWithMiddleware = compose(
        applyMiddleware(thunk),
        DevTools.instrument()
)(createStore);
const store = createStoreWithMiddleware(reducer);
syncReduxAndRouter(history, store);

ReactDOM.render(<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Todos}>
            <IndexRoute component={TodoList} />
            <Route path=":id" component={TodoDetail} />
        </Route>
    </Router>
</Provider>, document.getElementById('root'));
