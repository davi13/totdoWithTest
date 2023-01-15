import {useTodoContext} from "../context/todoContext";
import {ChangeEvent, MouseEvent, useState, FocusEvent, KeyboardEvent} from "react";

export const useUpdateTodo = () => {
    const {setTodos, todos} = useTodoContext();
    const [text, setText] = useState<string>('')

    const handleCheckedTodo = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        e.stopPropagation()

        setTodos((s) => [...s].map((todo) => {
            if (todo.id === id) {
                todo = {
                    ...todo,
                    isChecked: !todo.isChecked
                }
            }
            return todo
        }))
    }

    const handleDeleteTodo = (e: MouseEvent<SVGElement>, id: string) => {
        e.stopPropagation()
        const newTodo = [...todos].filter((todo) => todo.id !== id)
        setTodos(newTodo)
    }

    const handleEditableTodo = (e: MouseEvent<SVGElement>, id: string) => {
        e.stopPropagation()
        setTodos((s) => [...s].map((todo) => {
            if (todo.id === id) {
                todo = {
                    ...todo,
                    isEditable: !todo.isEditable
                }
            }
            return todo
        }))
    }

    /**
     * @description: update an existing todo
     * @param {string} id
     * @return void
     */
    const updateTodo = (id: string) => {
        setTodos((s) => [...s].map((todo) => {
            if (todo.id === id && text.length) {
                todo = {
                    ...todo,
                    description: text,
                    isEditable: !todo.isEditable
                }
            }
            return todo
        }))
    }

    const handleBlurEditTodo = (e: FocusEvent<HTMLInputElement>, id: string) => {
        e.stopPropagation()
        updateTodo(id)
    }

    const handleKeyPressEditTodo = (e: KeyboardEvent<HTMLInputElement>, id: string) => {
        e.stopPropagation()
        if (e.code === 'Enter') updateTodo(id)
    }

    return {
        handleCheckedTodo,
        handleDeleteTodo,
        handleEditableTodo,
        text,
        setText,
        handleBlurEditTodo,
        handleKeyPressEditTodo
    }
};

