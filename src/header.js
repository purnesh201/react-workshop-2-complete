import React from 'react';

export class Header extends React.Component {
    render() {
        return <header>
            <h1>Todos</h1>
            <button onClick={this.props.onAddTodo}>+</button>
        </header>;
    }
}
