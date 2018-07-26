import React, { Component } from 'react';

export default class TodoItem extends Component {
    state = {};

    renderItem = () => {
        const { todos, onRemove } = this.props;

        return todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
                <h4 className="list-group-item-heading">
                    {todo.title}
                    <small>
                        <span className="badge badge-secondary">{todo.priority}</span>
                    </small>
                </h4>
                <p className="text-left">
                    {todo.responsible}
                </p>
                <p className="text-left">
                    {todo.description}
                </p>
                <button className="btn btn-danger btn-sm" onClick={ () => onRemove(index)}>Delete</button>
            </li>
        )
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col">
                    <ul className="list-group">
                        {this.renderItem()}
                    </ul>
                </div>
            </div>
        )
    }
}