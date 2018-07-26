import React from 'react';

import Header from './../Header/Header';
import TodoForm from './../TodoForm/TodoForm';
import TodoItem from './../TodoItem/TodoItem';

export default ({ onAdd, onRemove, todos }) => (
    <div className="container">
        <Header />

        <div className="row mt-5">
            <TodoForm
                onAdd={onAdd} 
                />
        </div>

        <TodoItem
            todos={todos}
            onRemove={onRemove} 
        />
    </div>
)