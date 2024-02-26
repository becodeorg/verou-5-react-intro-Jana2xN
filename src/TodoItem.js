import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
        </li>
    );
};

export default TodoItem;
