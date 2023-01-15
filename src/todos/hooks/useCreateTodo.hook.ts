import {useTodoContext} from "../context/todoContext";
import {ChangeEvent, MouseEvent, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export const useCreateTodo = () => {
    const {setTodos, numberTodos, notCheckedTodos, checkedTodos} = useTodoContext();
    const [description, setDescription] = useState<string>('')
    const [isErrorInput, setIsErrorInput] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        setIsErrorInput(false)
        setDescription(e.target.value);
    }

    /**
     * add a new todo
     * @param {MouseEvent<HTMLButtonElement>} e
     * @return void
     */
    const handleSubmit = (e: MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        if (!description.length) {
            setIsErrorInput(true)
            return
        }

        setTodos((s) => ([
            {
                description,
                isChecked: false,
                isEditable: false,
                id: uuidv4()
            },
            ...s,
        ]))
        setDescription('')
    }

    return {
        isErrorInput,
        handleChange,
        handleSubmit,
        description,
        numberTodos,
        notCheckedTodos,
        checkedTodos
    }
};

