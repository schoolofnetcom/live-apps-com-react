import React, { Component } from 'react';

import TodoFormView from './TodoFormView';

export default class TodoForm extends Component {
    state = {
        title: '',
        responsible: '',
        description: '',
        priority: ''
    };

    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({ [name] : value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: ''            
        })
    }

    render() {
        const { title, responsible, description, priority } = this.state;
        console.log(this.state);

        return (
            <TodoFormView 
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                title={title}
                responsible={responsible}
                description={description}
                priority={priority}
            />
        )
    }
}