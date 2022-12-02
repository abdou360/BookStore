
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () => (
    <Offcanvas.Body>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search books"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
  </Form>
  </Offcanvas.Body>
);

export default SearchBar;