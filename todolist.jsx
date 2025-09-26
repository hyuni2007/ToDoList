import { useEffect, useState } from 'react';

export default function Todolist() {
    const [ todos, setTodos ] = useState([]);
    const [ newTodoContent, setNewTodoContent ] = useState('');
    const [ editingId , setEditingId ] = useState(null);
    const [ editingContent, setEditingContent ] = useState('');
    const [ sortOrder, setSortOrder ] = useState('newest');
    const [ filter, setFilter ] = useState('all');

    useEffect(() => {
        fetch("http://localhost:8080/todolist")
        .then(res => res.json())
        .then(data => setTodos(data));
    }, []);

    const createTodo = () => {
        if(!newTodoContent) return;

        const newTodo = {
                content: newTodoContent,
                createdAt: new Date(),
                dueTime: new Date(),
                isCompleted: false
        };

        fetch("http://localhost:8080/todolist", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        })
        .then(res => res.json())
        .then(savedTodo => {
            setTodos([...todos, savedTodo]);
            setNewTodoContent("");
        })
    };

    const deleteTodo = (id) => {
        fetch(`http://localhost:8080/todolist/${id}`, { method: "DELETE" })
            .then(() => {setTodos(todos.filter(todo => todo.id !== id))});
    };

    const checkComplete = (id) => {
        const todo = todos.find(todo => todo.id === id);
        const updatedTodo = {
            ...todo,
            isCompleted: !todo.isCompleted,
            dueTime: !todo.isCompleted ? new Date() : todo.dueTime
        };

        fetch(`http://localhost:8080/todolist/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedTodo)
        })
        .then(() => {
            setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
        });
    };

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditingContent(todo.content);
    }

    const saveEdit = (id) => {
        const todo = todos.find(t => t.id === id);
        const updatedTodo = { ...todo, content: editingContent };

        fetch(`http://localhost:8080/todolist/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodo)
        })
        .then(() => {
            setTodos(todos.map(t => t.id === id ? updatedTodo : t));
            setEditingId(null);
            setEditingContent('');
        });
    };

    const updateDueTime = (id, newDueTime) => {
        const todo = todos.find(t => t.id === id);
        const updatedTodo = { ...todo, dueTime: newDueTime ? new Date(newDueTime) : null };

        fetch(`http://localhost:8080/todolist/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodo)
        })
        .then(() => {
            setTodos(todos.map(t => t.id === id ? updatedTodo : t));
        });
    };
    
    const getSortedTodos = (todosToSort) => {
        const sorted = [...todosToSort];
        switch(sortOrder){
            case 'dueTime-asc':
                sorted.sort((a,b) => (!a.dueTime ? 1 : !b.dueTime ? -1 : new Date(a.dueTime) - new Date(b.dueTime)));
                break;
            case 'dueTime-desc':
                sorted.sort((a,b) => (!a.dueTime ? 1 : !b.dueTime ? -1 : new Date(b.dueTime) - new Date(a.dueTime)));
                break;
            case 'ko-asc':
                sorted.sort((a,b) => a.content.localeCompare(b.content));
                break;
            case 'ko-desc':
                sorted.sort((a,b) => b.content.localeCompare(a.content));
                break;
            case 'newest':
                sorted.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            default: break;
        }
        return sorted;
    };

    const changeSort = (e) => {
        setSortOrder(e.target.value);
    };

    const filterTodos = todos.filter(todo => {
        if (filter === "completed") return todo.isCompleted;
        if (filter === "incompleted") return !todo.isCompleted;
        return true;
    });

    const sortedAndFilteredTodos = getSortedTodos(filterTodos);

    
    return (
        <div className="flex items-center justify-center">
            <div className="bg-yellow-100 shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">할 일 목록</h1>

                <div className="mb-4">
                    <input
                        type='text'
                        placeholder='새로운 할 일'
                        value={newTodoContent}
                        onChange={(e) => setNewTodoContent(e.target.value)}
                        className="border rounded px-2 py-1 w-80"
                    />
                    <button
                        onClick={createTodo}
                        className="bg-white shadow-md rounded px-4 py-1 mx-2 hover:bg-blue-300"
                    >
                        생성
                    </button>

                    <div className="mt-4">
                        <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="border rounded p-1 mr-4">
                            <option value="all">전체</option>
                            <option value="completed">완료</option>
                            <option value="incompleted">미완료</option>
                        </select>

                        <select value={sortOrder} onChange={changeSort} className="border rounded px-2 py-1 mt-1">
                            <option value="newest">최신순</option>
                            <option value="dueTime-asc">만료시간 순</option>
                            <option value="dueTime-desc">만료시간 역순</option>
                            <option value="ko-asc">가나다 순</option>
                            <option value="ko-desc">가나다 역순</option>
                        </select>
                    </div>
                </div>

                <ul className="space-y-4">
                    {sortedAndFilteredTodos.map(todo => (
                        <li key={todo.id} className="border rounded p-3">
                            <div className="flex items-center">
                                <input
                                    type='checkbox'
                                    checked={todo.isCompleted}
                                    onChange={()=>checkComplete(todo.id)}
                                    className="mr-2"
                                />
                                {editingId === todo.id ? (
                                    <>
                                        <input
                                            type='text'
                                            value={editingContent}
                                            onChange={(e)=>setEditingContent(e.target.value)}
                                            className="border rounded px-2 py-1"
                                        />
                                        <button
                                            onClick={()=>saveEdit(todo.id)}
                                            className="bg-white shadow-md px-4 py-1 rounded ml-2 hover:bg-blue-300"
                                        >
                                            저장
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <span className={`flex-1 mx-2 ${todo.isCompleted ? 'line-through text-gray-500' : ''}`}>{todo.content}</span>
                                        <button
                                            onClick={()=>startEdit(todo)}
                                            className="border rounded bg-white shadow-md px-3.5 py-0.5 hover:bg-blue-500 hover:text-white"
                                        >
                                            수정
                                        </button>
                                    </>
                                )}
                            </div>
                            <p className="text-lg">생성시간: {new Date(todo.createdAt).toLocaleString()}</p>
                            <div>
                                <span className="text-lg">만료시간: </span>
                                <input
                                    type='datetime-local'
                                    onChange={(e)=>updateDueTime(todo.id, e.target.value)}
                                    className="border rounded px-1"
                                />
                            </div>
                            <button
                                onClick={()=>deleteTodo(todo.id)}
                                className="mt-2 bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600"
                            >
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}