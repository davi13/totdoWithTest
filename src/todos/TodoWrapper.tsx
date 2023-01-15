import {TodoLayout} from "./TodoLayout/TodoLayout";
import Todo from "./lists/todo/Todo";
import './todo.css'
import {useTodoContext} from "./context/todoContext";

const TodoWrapper = () => {
    const {todos} = useTodoContext()
    return (
        <div data-testid="TodoWrapper" className="todo_wrapper">
            <TodoLayout>
                {
                    todos.map((todo, index) => (
                        <Todo key={todo.id} {...todo} index={index} />
                    ))
                }
            </TodoLayout>
        </div>
    )
};

export default TodoWrapper;