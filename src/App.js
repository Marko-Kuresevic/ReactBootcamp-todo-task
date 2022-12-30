import { useEffect, useState } from 'react';
import LoginForm from './components/forms/loginForm';
import ToDoContextAPI from './context/toDoContext';
import ToDo from './components/toDo';

import './App.css';

const url = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Task organizer</h1>
      {!isLoggedIn && <LoginForm onFinish={setIsLoggedIn}/>}
      {isLoggedIn &&
        <section>
          <ToDoContextAPI url={url}>
            <ToDo onFinish={setIsLoggedIn} />
          </ToDoContextAPI>
        </section>
      }
    </div>
  );
}

export default App;
