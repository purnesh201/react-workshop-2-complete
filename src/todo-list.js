import React from 'react';
import {deleteTodo} from './actions';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class TodoList extends React.Component {
    render() {
        return <ul>
            {this.props.todos.map(todo => <li key={todo.id}>
                <Link to={`/${todo.id}`}>{todo.title}</Link>
                <button onClick={() => this.props.dispatch(deleteTodo(todo))}>x</button>
            </li>)}
        </ul>;
    }
}
export default connect(state => {return {todos: state.todoApp.todos}})(TodoList);
