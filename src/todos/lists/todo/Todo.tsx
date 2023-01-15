import { FaEdit, FaTrashAlt } from "react-icons/fa"
import './todo.css'
import {FC} from "react";
import {TodoProps} from "../../context/todoContext";
import {useUpdateTodo} from "../../hooks/useUpdateTodo.hook";

const Todo: FC<TodoProps & {index: number}> = ({
    description,
    isChecked,
    id,
    isEditable,
    index
}) => {
    const {
        handleDeleteTodo,
        handleCheckedTodo,
        handleEditableTodo,
        text,
        setText,
        handleBlurEditTodo,
        handleKeyPressEditTodo
    } = useUpdateTodo()

    const handleEditableTodos = (e: any) => {
        e.preventDefault();
        setText(e.target.value)
    }

    return (
        <div id="todo" className={index % 2 === 0 ? 'bg_dark' : 'bg_light'}>
            <input type="checkbox" checked={isChecked} onChange={(e) => handleCheckedTodo(e, id)}/>
            <div className="content">{
                !isEditable ? <p>{description}</p> :
                    <input
                        type="text"
                        value={!text.length ? description : text}
                        onChange={handleEditableTodos}
                        onBlur={(e) => handleBlurEditTodo(e, id)}
                        onKeyDown={(e) => handleKeyPressEditTodo(e, id)}
                    />
            }</div>
            <div className="todo_action">
                <div>
                    <FaEdit onClick={(e) => handleEditableTodo(e, id)}/>
                </div>
                <div>
                    <FaTrashAlt onClick={(e) => handleDeleteTodo(e, id)} />
                </div>
            </div>
        </div>
    );
}

export default Todo;