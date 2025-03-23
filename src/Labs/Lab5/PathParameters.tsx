import { useState } from "react";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div>
      <h3>Path Parameters</h3>
      <input
        className="form-control mb-2"
        id="wd-path-parameter-a"
        type="number"
        defaultValue={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="number"
        className="form-control mb-2"
        id="wd-path-parameter-b"
        defaultValue={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        type="button"
        className="btn btn-primary me-1"
        href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        type="button"
        className="btn btn-danger me-1"
        href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        type="button"
        className="btn btn-warning me-1"
        href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        type="button"
        className="btn btn-success me-1"
        href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
