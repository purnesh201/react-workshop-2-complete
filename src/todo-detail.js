import React from 'react';
import {connect} from 'react-redux';

class TodoDetail extends React.Component {
    render() {
        return <p>{this.props.todo.title}</p>
    }
}
const stateToProps = (state, props) => {
    const todoId = props.routeParams.id;
    return {
        todo: state.todoApp.todos.find(todo => todo.id == todoId)
    };
};
export default connect(stateToProps)(TodoDetail)
