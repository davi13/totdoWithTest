import {FC, PropsWithChildren} from 'react';
import './todo-layout.css';
import {useCreateTodo} from "../hooks/useCreateTodo.hook";

export type TodoLayoutType = PropsWithChildren & {}

export const TodoLayout: FC<TodoLayoutType> = ({children}) => {
    const {
        isErrorInput,
        handleChange,
        handleSubmit,
        description,
        numberTodos,
        notCheckedTodos,
        checkedTodos
    } = useCreateTodo()

    return (

        <div data-testid="TodoLayout" className="todo_layout">
            <div className="todo_header">
                <h2>Todos ({numberTodos})</h2>
                <div>
                    <h6>checked: {checkedTodos}</h6>
                    <h6>not checked: {notCheckedTodos}</h6>
                </div>
            </div>
            <div className="todo_body">
                <div className="todo_input">
                    <input className={isErrorInput ? 'input_error' : ''} value={description} onChange={handleChange} type="text" placeholder="Enter todo here" />
                    <button role="tab" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="todo_list">
                    {children}
                </div>
            </div>
        </div>
    );
}

