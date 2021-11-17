import React from 'react';
import { AiOutlineCheck, MdDeleteOutline, MdOutlineEdit } from "react-icons/all";

import Button from "../Button/Button";

const TodoItem = ({ todo, completeTodo, removeTodo, editTodo, isEdit }) => {
    const { id, text, color, backgroundColor, completed } = todo;

    return (
        <li className={`todo__item todo__item-bg-${backgroundColor} todo__item-text-${color}`}>
            <p className={completed ? "todo__item-text--completed" : "todo__item-text"}>{text}</p>
            <div className="todo__buttons-wrapper">
                {!completed && <>
                    {!isEdit && <>
                        <Button className="todo__item-complete-btn"
                                handleSubmit={() => completeTodo(id)}><AiOutlineCheck/></Button>
                        <Button className="todo__item-edit-btn"
                                handleSubmit={() => editTodo(id)}><MdOutlineEdit/></Button>
                    </>}
                </>}
                <Button className="todo__item-delete-btn"
                        handleSubmit={() => removeTodo(id)}><MdDeleteOutline/></Button>
            </div>
        </li>
    );
};

export default TodoItem;