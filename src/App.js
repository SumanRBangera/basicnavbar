import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link, BrowserRouter} from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* Fragments : we can use either <> or <React.Fragment> */}
      <>
       <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Welcome</Navbar.Brand>
            <Nav className="me-auto">
              
              <Nav.Link as={Link} to="/fcomponent">Functional Component</Nav.Link>
              <Nav.Link as={Link} to="/ccomponent">Class Component</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
      <Routes>
      <Route path="/fcomponent" element={<FunctionalComponent/>}></Route>
      <Route path="/ccomponent" element={<ClassComponent/>}></Route>
     
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
