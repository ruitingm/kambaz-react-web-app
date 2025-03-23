import { useState } from "react";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJs Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        href={`${API}/${todo.id}`}
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Filtering Array Items</h3>
      <a
        href={`${API}?completed=true`}
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
      >
        Get Completed Todos
      </a>
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a
        href={`${API}/create`}
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
      >
        Create Todo
      </a>
      <hr />
      <h3>Deleting from an Array</h3>
      <a
        href={`${API}/${todo.id}/delete`}
        id="wd-retrieve-completed-todos"
        className="btn btn-primary float-end"
      >
        Delete Todo with ID = {todo.id}
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end me-2"
      >
        Update Todo ID = {todo.id}
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        defaultValue={todo.title}
        className="form-control w-50 float-start me-2"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary float-end"
      >
        Update Completed ID = {todo.id}
      </a>
      <input
        defaultValue={todo.id}
        className="form-control float-start me-2 w-25"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <label className="form-control me-2 float-start w-25">
        {todo.completed + ""}
      </label>
      <button
        className="btn btn-primary me-2"
        onClick={() => setTodo({ ...todo, completed: true })}
      >
        True
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => setTodo({ ...todo, completed: false })}
      >
        False
      </button>
      <br />
      <br />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary float-end"
      >
        Update Description ID = {todo.id}
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        defaultValue={todo.description}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br />
      <br />
      <hr />
    </div>
  );
}
