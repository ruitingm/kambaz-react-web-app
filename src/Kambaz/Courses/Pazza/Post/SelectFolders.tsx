export default function SelectFolders() {
  const links = [
    "hw1",
    "hw2",
    "hw3",
    "hw4",
    "hw5",
    "hw6",
    "project",
    "exam",
    "logistics",
    "other",
    "office_hours",
  ];
  return (
    <div
      id="wd-pazza-select-folder-screen"
      className="mt-3 align-content-center"
    >
      <div id="wd-pazza-select-folder" className="d-flex">
        {links.map((link) => (
          <a
            key={link}
            className="wd-pazza-blue wd-pazza-font-lucida wd-pazza-font-11pt wd-pazza-bg-light-blue
           ms-2 p-0 ps-1 pe-1 rounded-1 wd-text-no-decor btn "
          >
            {link}
          </a>
        ))}
      </div>
      <a
        id="wd-pazza-manage-folder"
        className="wd-pazza-blue wd-pazza-font-10pt wd-pazza-font-lucida wd-text-no-decor ps-1"
      >
        manage and record folders
      </a>
    </div>
  );
}
