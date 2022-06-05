import "./styles.css";
import { useState } from "react";
//var x = 10;

export default function App() {
  const [pending, setPending] = useState(["JS", "Angular", "React"]);
  const [completed, setComplete] = useState(["HTML"]);

  const taskCompleted = (index) => {
    var p = [...pending];
    var c = [...completed];

    c.push(pending[index]);
    p.splice(index, 1);

    setPending(p);
    setComplete(c);
  };

  const showTask = (task, index) => {
    return (
      <div>
        {task}
        <button
          class="button"
          onClick={() => {
            taskCompleted(index);
          }}
        >
          <span>✅</span>
        </button>
      </div>
    );
  };
  const showCompletedTask = (task, index) => {
    return (
      <div>
        {task}
        <button
          class="button"
          onClick={() => {
            taskRemove(index);
          }}
        >
          <span>❎</span>
        </button>
      </div>
    );
  };
  const taskRemove = (index) => {
    var c = [...completed];
    c.splice(index, 1);

    setComplete(c);
  };
  return (
    <div>
      {/*  Regular JS variable, use react state vars instead x = {x} */}
      <div class="task-container">
        <h2>Pending tasks</h2>
        {pending.map(showTask)}
      </div>
      <div class="task-container">
        <h2>Completed tasks</h2>
        {completed.map(showCompletedTask)}
      </div>
    </div>
  );
}
