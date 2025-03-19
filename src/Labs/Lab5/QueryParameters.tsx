import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        type="number"
        id="wd-query-parameter-a"
        className="form-control mb-2"
        defaultValue={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="number"
        id="wd-query-parameter-a"
        className="form-control mb-2"
        defaultValue={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        type="button"
        className="btn btn-primary me-1"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        type="button"
        className="btn btn-danger me-1"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        type="button"
        className="btn btn-warning me-1"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        type="button"
        className="btn btn-success me-1"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
