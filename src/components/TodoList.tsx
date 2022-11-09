import { useState } from 'react';
import TodoTable from './TodoTable';
import { TodoItem } from '../interface/TodoItem';

// export interface TodoItem {
//     description: string;
//     date: string;
//     priority: string;
// }

function TodoList() {
    const [todo, setTodo] = useState<TodoItem>({
        description: '',
        date: '',
        priority: '',
    });

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    };

    const deleteTodo = (index: number) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <div className="App">
            <h1>TODO list</h1>
            <form onSubmit={addTodo}>
                <input
                    type="date"
                    name="date"
                    value={todo.date}
                    onChange={inputChanged}
                />
                <input
                    placeholder="description"
                    type="desription"
                    name="description"
                    value={todo.description}
                    onChange={inputChanged}
                />
                <input
                    placeholder="priority"
                    type="priority"
                    name="priority"
                    value={todo.priority}
                    onChange={inputChanged}
                />
                <input type="submit" value="Add" />
            </form>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoList;
