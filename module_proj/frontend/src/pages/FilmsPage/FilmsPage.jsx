import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { AiOutlinePlus, BsCheck2All, IoMdClose } from "react-icons/all";
//
// import TodoList from "../../components/TodoList/TodoList";
// import Input from "../../components/Input/Input";
// import Button from "../../components/Button/Button";
// import ColorPicker from "../../components/ColorPicker/ColorPicker";
// import { addTodo, getTodos, loadingTodos, updateSelectedTodo } from "../../redux/actions/films";
// import TodoLoader from "../../components/TodoLoader/TodoLoader";
// import { setAlert } from "../../redux/actions/alert";
// import { instance } from "../../utils/axios.api";

const FilmsPage = () => {
    // const [ colors, setColors ] = useState(null);
    // const [ backgroundColors, setBackgroundColors ] = useState(null);
    // const [ isEdit, setIsEdit ] = useState(false);
    // const [ todo, setTodo ] = useState({
    //     text: "",
    //     color: "white",
    //     backgroundColor: "black",
    //     id: ""
    // });
    // const { todos, loading } = useSelector(state => state.todo);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     const getColors = async () => {
    //         const response = await instance('/todos/colors');
    //         setColors(response.data.colors);
    //     };
    //
    //     const getBackgroundColors = async () => {
    //         const response = await instance('/todos/backgrounds');
    //         setBackgroundColors(response.data.backgrounds);
    //     };
    //
    //     if(!todos) {
    //         dispatch(loadingTodos());
    //         dispatch(getTodos());
    //     }
    //
    //     getColors();
    //     getBackgroundColors();
    //     // eslint-disable-next-line
    // }, []);
    //
    // const handleChange = ({ target }) => {
    //     setTodo({
    //         ...todo, text: target.value
    //     });
    // };
    //
    // const handleTextColor = ({ target }) => {
    //     const color = target.classList[1].split("-")[1];
    //
    //     setTodo({
    //         ...todo, color
    //     });
    // };
    //
    // const handleBackgroundColor = ({ target }) => {
    //     const backgroundColor = target.classList[1].split("-")[1];
    //
    //     setTodo({
    //         ...todo, backgroundColor
    //     });
    // };
    //
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     if(!todo.text.trim()) {
    //         dispatch(setAlert('Todo cannot be empty!', 'error'));
    //         return;
    //     }
    //
    //     if(todos.some((item) => item.text === todo.text)) {
    //         dispatch(setAlert(`Todo with text ${todo.text} is exists`, 'error'));
    //         return;
    //     }
    //
    //     dispatch(addTodo(todo));
    //     setTodo({
    //         text: "",
    //         color: "white",
    //         backgroundColor: "black",
    //         id: ""
    //     });
    // };
    //
    // const editTodoActive = (id) => {
    //     if(!isEdit) {
    //         const { text, color, backgroundColor } = todos.find((item) => item.id === id);
    //         setTodo({ text, color, backgroundColor, id });
    //         setIsEdit(!isEdit);
    //     }
    // };
    //
    // const updateTodo = async (e) => {
    //     e.preventDefault();
    //     const { id, text } = todo;
    //     const notActiveTodos = todos.filter((item) => item.id !== id);
    //
    //     if(!text.trim()) {
    //         dispatch(setAlert('Todo cannot be empty!', 'error'));
    //         return;
    //     }
    //
    //     if(notActiveTodos.some(item => item.text === text)) {
    //         dispatch(setAlert(`Todo with text ${text} already exists`, 'error'));
    //         return;
    //     }
    //
    //     dispatch(updateSelectedTodo(id, todo));
    //
    //     setTodo({
    //         text: "",
    //         color: "white",
    //         backgroundColor: "black",
    //         id: ""
    //     });
    //     setIsEdit(!isEdit);
    // };
    //
    // const cancelUpdate = () => {
    //     setTodo({
    //         text: "",
    //         color: "white",
    //         backgroundColor: "black",
    //         id: ""
    //     });
    //     setIsEdit(!isEdit);
    // };

    return (
        <>
            <div className="todo">
            {/*    {colors && backgroundColors && <div className="todo__color-pickers">*/}
            {/*        <ColorPicker pickColor={handleTextColor} colors={colors} selectedColor={todo.color}*/}
            {/*                     title="Text color"/>*/}
            {/*        <ColorPicker colors={backgroundColors} title="Background color" selectedColor={todo.backgroundColor}*/}
            {/*                     pickColor={handleBackgroundColor}/>*/}
            {/*    </div>}*/}
            {/*    <form className="todo__form">*/}
            {/*        <Input type="text" name="todo" value={todo.text} handleChange={handleChange}*/}
            {/*               placeholder="Add todo"*/}
            {/*               maxLength="30"/>*/}

            {/*        {!isEdit ? <Button className="todo__btn" type="submit" handleSubmit={handleClick}><AiOutlinePlus*/}
            {/*            size={30}/></Button> : <>*/}
            {/*            <Button className="todo__btn" type="submit" handleSubmit={updateTodo}><BsCheck2All*/}
            {/*                size={30}/></Button>*/}
            {/*            <Button className="todo__btn" handleSubmit={cancelUpdate}><IoMdClose*/}
            {/*                size={30}/></Button>*/}
            {/*        </>}*/}
            {/*    </form>*/}
            {/*</div>*/}
            {/*<div className="todo__list-wrapper">{loading ? <TodoLoader/> : (todos && todos.length ?*/}
            {/*    <TodoList todos={todos} editTodo={editTodoActive} isEdit={isEdit}/> :*/}
            {/*    <div className="todo__empty-msg">Sorry, Todos not found &#128549;</div>)}*/}
            </div>
        </>

    );
};

export default FilmsPage;