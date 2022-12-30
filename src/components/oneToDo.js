import "./oneToDo.css";

const OneToDo = (props) => {
    console.log(props.title);
    const deleteHandler = () => {
        props.onDelete(props.id);
      };

    return (
        <li style={{ display: "flex", listStyleType: "none" }}>
            <p className="title">{props.title}</p>
            <p className="completed">{props.completed.toString()}</p>
            <button className="delete" onClick={deleteHandler}>X</button>
        </li>
    )
};

export default OneToDo;