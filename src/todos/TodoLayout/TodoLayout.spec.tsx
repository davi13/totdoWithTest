import {render,screen} from "@testing-library/react";
import {TodoLayout, TodoLayoutType} from "./TodoLayout";

function getComponent(props: TodoLayoutType = {}) {
    render(<TodoLayout {...props}/>)
}

describe('src/todo/TodoLayout/TodoLayout',()=> {
    it('should render a TodoLayout', () => {
        getComponent()
        const element = screen.getByTestId('TodoLayout')
        expect(element).toBeInTheDocument()
    })

    it('should show a title todo', () => {
        getComponent()
        const title = screen.getByText('Todos')
        expect(title).toBeTruthy()
    })

    it('should show input field', () => {
        getComponent()
        const input = screen.getByPlaceholderText('Enter todo here')
        expect(input).toBeTruthy()
    })

    it('should show Button', () => {
        getComponent()
        const button = screen.getByRole('tab')
        expect(button).toBeInTheDocument()
    })

    it('should show children', () => {
        getComponent({children: <p>I'm a component child </p>})
        const button = screen.getByText('I\'m a component child')
        expect(button).toBeTruthy()
    })

})