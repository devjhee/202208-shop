import './App.css';
import { useState } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ENFP쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container className="sell-list">
        <Row>
          {shoes.map((item, index) => {
            return (
              <>
                <SellItem
                  index={index}
                  title={item.title}
                  content={item.content}
                  price={item.price}
                />
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;

// interface SellItemProps { > TypeScript에서 사용하는 문법임
//   index: number
// title: String
// content: string
// price: string
// }

function SellItem(props) {
  return (
    <>
      <Col key={props.index} sm>
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            props.index + 1
          }.jpg`}
          alt="상품사진"
          width="100%"
        />
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>{props.price}</p>
      </Col>
    </>
  );
}
