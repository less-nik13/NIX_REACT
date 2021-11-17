import React from 'react';

import TodoItem from "../TodoItem/TodoItem";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodoCompleted } from "../../redux/actions/todo";

const TodoList = ({ todos, editTodo, isEdit }) => {
    const dispatch = useDispatch();

    const completeTodo = (id) => {
        dispatch(setTodoCompleted(id));
    };

    const removeTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <ul className="todo__list">
            {todos.map((todo) => (
                <TodoItem key={todo.id}
                          todo={todo}
                          completeTodo={completeTodo}
                          editTodo={editTodo}
                          removeTodo={removeTodo}
                          isEdit={isEdit}
                />
            ))}
        </ul>

    );
};

export default TodoList;