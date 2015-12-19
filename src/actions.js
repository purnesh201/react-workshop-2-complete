import axios from 'axios';
import {pushPath} from 'redux-simple-router';

export const addTodo = () => {
    const title = prompt("Enter the task: ");
    return (dispatch) => {
        axios.post('/todos', {title})
                .then(function (res) {
                    dispatch(addTodoSuccess(res.data));
                });
    };
};
export const newTodo = (title) => {
    return (dispatch) => {
        axios.post('/todos', {title})
                .then(function (res) {
                    dispatch(addTodoSuccess(res.data));
                    dispatch(pushPath(`/${res.data.id}`))
                });
    };
};
export const addTodoSuccess = (todo) => {
    return {type: 'ADD_TODO', todo};
};
export const deleteTodo = (todo) => {
    return {type: 'DELETE_TODO', todo: todo};
};
export const fetchTodos = () => {
    return (dispatch) => {
        console.log('here');
        axios.get('/todos').then((res) => {
            dispatch(fetchTodosSuccess(res.data));
        })
    }
};
export const fetchTodosSuccess = (todos) => {
    return {type: 'LOAD_TODOS', todos: todos};
};
