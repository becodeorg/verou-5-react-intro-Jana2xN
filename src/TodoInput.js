import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [todoText, setTodoText] = useState('');

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            addTodo(todoText);
            setTodoText('');
        }
    };

    const inputStyle = {
        marginRight: '10px', // Adjust this value as needed
    };

    return (
        <div>
            <input
                type="text"
                value={todoText}
                onChange={handleInputChange}
                style={inputStyle}
            />
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoInput;