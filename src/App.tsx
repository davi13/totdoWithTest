import TodoWrapper from "./todos/TodoWrapper";
import {TodoContextProvider} from "./todos/context/todoContext";
const App = () => (
    <TodoContextProvider>
        <TodoWrapper />
    </TodoContextProvider>
);

export default App;