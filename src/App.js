import logo from "./rss-feed-rss-svgrepo-com.svg";
import twitter from "./twitter-sign.svg"
import fakeboock from "./facebook.svg"
import linkin from "./linkedin-logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Container,
  ModalFooter 
} from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar className="bg-light justify-content-between mb-3" style={{boxShadow:" 0px 5px 5px grey"}}>
        <Form inline>
          <img className="ml-3 mr-3" src={logo} height="30px" />
          <a>Feedmail</a>
        </Form>
        <Form inline>
          <Button className="mr-3" variant="primary">
            Save
          </Button>
          <Button className="mr-3" variant="secondary">
            Preview
          </Button>
          <Button className="mr-3" variant="danger">
            Send
          </Button>
        </Form>
      </Navbar>
      <Form className="row ml-3">
        <Container className="col">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" >
    <Form.Control as="textarea"style={{height:"70vh"}} />
  </Form.Group>
        </Container>

        <Container className="col mr-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Rss url</Form.Label>
            <InputGroup className="mb-4">
    <FormControl
      placeholder="https://example.site/rss.xml"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    <Button  variant="outline-secondary light">
            Add
          </Button>
    </InputGroup.Append>
  </InputGroup>
          </Form.Group>
          <Alert variant="dark">Rss</Alert>
        </Container>
      </Form>
      <ModalFooter style={{position:"absolute",background:"black",bottom:0,width:"100vw",justifyContent:"center"}}>
        <img
    width={25}
    height={25}
    className="mr-3"
    src={twitter}
    alt="Generic placeholder"
  />
   <img
    width={25}
    height={25}
    className="mr-3"
    src={fakeboock}
    alt="Generic placeholder"
  />
   <img
    width={25}
    height={25}
    className="mr-3"
    src={linkin}
    alt="Generic placeholder"
  />
      </ModalFooter>
    </>
  );
}

export default App;
