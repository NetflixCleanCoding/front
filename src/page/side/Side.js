import { useState } from 'react';

const Side = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  console.log(todo);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    console.log(todo);
    setTodo('');
    setTodos((currentArray) => [todo, ...currentArray]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="안녕하세요"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default Side;
