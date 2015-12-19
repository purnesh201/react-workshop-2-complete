import React from 'react';
import {Header}from './header';
import {TodoList} from './todo-list';
import {connect} from 'react-redux';
import {addTodo, fetchTodos, deleteTodo,newTodo} from './actions';
import {NewTodo} from './new-todo';
import DevTools from './devtools';

class Todos extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTodos());
    }

    render() {
        return <div>
            <Header onAddTodo={() => this.props.dispatch(addTodo())} />
            {this.props.children}
            <NewTodo onNewTodo={(title) => this.props.dispatch(newTodo(title)) }/>
            <DevTools/>
        </div>;
    }
}

export default connect(x => x)(Todos);
