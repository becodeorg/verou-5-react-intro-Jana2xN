import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
    const listStyle = {
        listStyleType: 'none',
        padding: 0,
    };

    return (
        <ul style={listStyle}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
