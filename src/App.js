import './App.css';
import data from './data/shoes';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './routes/main';
import Detail from './routes/detail';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* GNB */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ENFP쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Details</Nav.Link>
            <Nav.Link href="/not_ready">Not Ready</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Content */}
      <Routes>
        <Route path="/" element={<div className="main-bg"></div>}></Route>
      </Routes>
      <Container>
        <Routes>
          <Route exact path="/" element={<Main data={shoes} />}></Route>
          <Route
            path="/detail/:paraid"
            element={<Detail data={shoes} />}
          ></Route>
          <Route path="/not_ready" element={<div>준비 중입니다.</div>}></Route>
          <Route path="*" element={<div>없는 페이지입니다.</div>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
