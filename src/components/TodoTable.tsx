import { TodoItem } from '../interface/TodoItem';

type tableProps = {
    todos: TodoItem[];
    deleteTodo: (index: number) => void;
};

function TodoTable({ todos, deleteTodo }: tableProps) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Priority</th>
                </tr>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <td>{todo.priority}</td>
                        <td>
                            <button onClick={() => deleteTodo(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TodoTable;
