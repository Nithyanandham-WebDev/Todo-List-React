
import { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const localval = localStorage.getItem('TODOLIST');
    setTodoList(JSON.parse(localval));
  }, []);

  useEffect(() => {
    localStorage.setItem('TODOLIST', JSON.stringify(todoList));
  }, [todoList]);

  const handleAddClick = () => {
    const val = inputRef.current.value;
    const tmpToDo = [...todoList];
    tmpToDo.push({id: uuidv4(), desc: val, complete: false});
    setTodoList(tmpToDo);
    inputRef.current.value = '';
  }

  const toogleComplete = (id) => {
    const tmpToDo = [...todoList];
    const todoElem = tmpToDo.find(todo => todo.id === id);
    todoElem.complete = !todoElem.complete;
    setTodoList(tmpToDo);
  }

  const clearComplete = () => {
    const tmpToDo = [...todoList];
    const unCompletetodo = tmpToDo.filter(todo => !todo.complete);
    setTodoList(unCompletetodo);
  }

  return (
    // <div>
    //   <TodoList todoList={todoList} toogleComplete={toogleComplete} />
    //   <input ref={inputRef} />
    //   <button onClick={handleAddClick}>Add todo</button>
    //   <button onClick={clearComplete}>Clear complete Todo</button>
    //   <p>{todoList.filter(todo => !todo.complete).length} left to do</p>
    // </div>
    <div className='container'>
      <div className='todo_list'>
      <h1>Todo List</h1>
        <TodoList todoList={todoList} toogleComplete={toogleComplete}/>
        <div className='todo_space'>
          
          <input ref={inputRef} />
        </div>
        <div className='todo_button'>
          <button onClick={handleAddClick}>Save</button>
        </div>
        <div className='todo_p'>
          <button onClick={clearComplete}>Cancel</button>
        </div>
        <div className='todo_add'>
          <p>{todoList.filter(todo => !todo.complete).length} left to do</p>          
        </div>
      </div>
    </div>
  );
}
export default App;
