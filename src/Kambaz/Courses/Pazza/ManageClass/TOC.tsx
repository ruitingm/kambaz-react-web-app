import { Nav, NavItem } from "react-bootstrap";

export default function TOC() {
  return (
    <div className="container row wd-pazza-bg-light-grey wd-pazza-dark-grey">
      <div className="col-2"></div>
      <div className="col-10">
        <Nav>
          <NavItem className="col-1">
            <Nav.Link>General Setting</Nav.Link>
          </NavItem>
          <NavItem className="col-1">
            <Nav.Link>Customize Q&A</Nav.Link>
          </NavItem>
          <NavItem className="col-1 ms-2">
            <Nav.Link>Manage Folders</Nav.Link>
          </NavItem>
          <NavItem className="col-1 ms-2">
            <Nav.Link>Manage Enrollment</Nav.Link>
          </NavItem>
          <NavItem className="col-1 ms-2">
            <Nav.Link>Create Groups</Nav.Link>
          </NavItem>
          <NavItem className="col-2">
            <Nav.Link>Customize Course Page</Nav.Link>
          </NavItem>
          <NavItem className="col-2">
            <Nav.Link>Pazza Network Settings</Nav.Link>
          </NavItem>
          <NavItem className="col-1">
            <Nav.Link>Customize Q&A</Nav.Link>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}
