import {render, screen} from "@testing-library/react";
import TodoWrapper from "./TodoWrapper";
import {TodoContextProvider} from "./context/todoContext";

describe('src/todos/TodoWrapper', () => {
    it('test la definition du component', () => {
        render(
            <TodoContextProvider>
                <TodoWrapper/>
            </TodoContextProvider>
        )
        const component = screen.getByTestId('TodoWrapper');
        expect(component).toBeDefined()
        expect(component).toBeInTheDocument()
    })
})

