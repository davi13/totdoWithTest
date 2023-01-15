import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useMemo, useState} from "react";

export type TodoProps = {
    description: string;
    isChecked: boolean;

    isEditable: boolean
    id: string
}

type TodoContextType = {
    todos: TodoProps[]
    numberTodos: number
    checkedTodos: number
    notCheckedTodos: number
    setTodos: Dispatch<SetStateAction<TodoProps[]>>
}

const todoContext = createContext<TodoContextType | undefined>(undefined)


export const TodoContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [todos, setTodos] = useState<TodoProps[]>([])

    const checkedTodos = useMemo(() => [...todos].filter((todo) => todo.isChecked).length, [todos]);
    const notCheckedTodos = useMemo(() => [...todos].filter((todo) => !todo.isChecked).length, [todos]);

    return (
        <todoContext.Provider value={{
            todos,
            setTodos,
            numberTodos: todos.length,
            checkedTodos,
            notCheckedTodos
        }}>
            {children}
        </todoContext.Provider>
    )
}

export const useTodoContext = () => {
    const context = useContext(todoContext);

    if (!context) {
        throw new Error("context not provided")
    }

    return context;
}