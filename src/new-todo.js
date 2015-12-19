import React from 'react';

export class NewTodo extends React.Component {
    constructor() {
        super();
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    handleKeyUp(event) {
        if(event.keyCode !== 13) return;
        this.props.onNewTodo(this.refs.newTodo.value);
        this.refs.newTodo.value = '';
    }
    render() {
        return <input type="text" ref="newTodo" onKeyUp={this.handleKeyUp} />;
    }
}
