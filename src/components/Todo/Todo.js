import React, { Component } from 'react';

import TodoView from './TodoView';
import Seed from './../../utils/Seed';

export default class Todo extends Component {
    state = {};

    render() {
        return (
            <TodoView />
        )
    }
}