import AddForm from "./forms/addForm";
import OneToDo from "./oneToDo";
import { useContext } from "react";
import { ToDoContext } from "../context/toDoContext";
import AddFormContextAPI from "../context/addFormContext";

import { BounceLoader } from "react-spinners";
import "../buttons/button.css";
import { Divider } from "antd";

const ToDo = () => {
    const { todos, loading, inputData, deleteToDo, fetchData, logOut, onAdd } = useContext(ToDoContext);
    
    const loadingFunction = () => {
      
        if (loading) {
            return <BounceLoader style={{ position: "absolute", margin: "50px" }} />
        }

        if (todos) {
          return (
            <ul>
              {todos.slice(0, 10).concat(inputData).map((element) => (
                <>
                  <OneToDo
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    completed={element.completed}
                    onDelete={deleteToDo}
                  />
                  <Divider />
                </>
              ))}
            </ul>
          )
        }
    }

  return (
    <>
      <div style={{display: "flex"}}>
        <button className="fetchDataBtn" onClick={fetchData}>Fetch <i>to-do</i></button>
        <AddFormContextAPI>
          <AddForm onAdd={onAdd} />
        </AddFormContextAPI>
        <button className="logOutBtn" onClick={logOut}>Log out</button>
      </div>
      {loadingFunction()}
    </>
  );
};

export default ToDo;
