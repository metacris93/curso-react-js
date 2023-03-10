import react from "react";
import './TodoItem.css'

function TodoItem(props) {
  const onComplete = (msg) => {
    alert(msg + ' ' + props.text);
  };

  const onDelete = (msg) => {
    alert(msg + ' ' + props.text);
  };

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={() => onComplete('Completaste el TODO')}
      >
        ✅
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={() => onDelete('Borraste el TODO')}
      >
        ❌
      </span>
    </li>
  );
}

export { TodoItem };
