import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Images from "../Images/logo.png";

function Home() {
  return (
    <>
      <div>
        <Navbar
          bg="light"
          className="w-100"
          expand="lg"
          style={{ borderBottom: "1px solid black" }}
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
                <img src={Images} alt="" style={{ height: "50px" }} />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  display: "flex",
                  marginLeft: "350px",
                }}
                navbarScroll
              >
                <Nav.Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    to="/product"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Men
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/service"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Kids
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About us
                  </Link>
                </Nav.Link>
                {/* <Nav.Link>
                  <Link
                    to="/product"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Product
                  </Link>
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Home;
