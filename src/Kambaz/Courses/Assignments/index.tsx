export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      ></input>
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <br />
      <h3 id="ws-assignments-title">Assignment 40% of Total</h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>
          <br />
          Multiple Modules | <b>Not Available Until</b> May 6 at 12:00am |
          <br />
          <b>Due</b> May 13 at 11:59pm | 100pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/124"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <br />
          Multiple Modules | <b>Not Available Until</b> May 7 at 12:00am |
          <br />
          <b>Due</b> May 13 at 11:59pm | 100pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/125"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <br />
          Multiple Modules | <b>Not Available Until</b> May 8 at 12:00am |
          <br />
          <b>Due</b> May 13 at 11:59pm | 100pts
        </li>
      </ul>
    </div>
  );
}
