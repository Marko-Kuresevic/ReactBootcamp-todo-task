import axios from "axios";
import React, { useCallback, useState } from "react";

export const ToDoContext = React.createContext();

const ToDoContextAPI = ({ children, url }) => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState([]);
  
    const fetchData = useCallback(async () => {
      setLoading(true);
    
      const response = await axios.get(url);
      const data = await response.data;
    
      setTodos(data);
      setLoading(false);
    }, [url]);
  
    const onAdd = (newToDo) => {
      setInputData([...inputData, newToDo]);
    };
  
    const logOut = () => {
      localStorage.removeItem("isLoggedIn");
    };
  
    const deleteToDo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
      setInputData(inputData.filter((todo) => todo.id !== id));
    };

  return (
    <ToDoContext.Provider value={{ 
        todos,
        loading,
        inputData,
        fetchData,
        onAdd,
        logOut,
        deleteToDo
    }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextAPI;
