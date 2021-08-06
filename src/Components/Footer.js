import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterHeading,
} from "../Styling/FooterStyles";

const Footer = () => {
  return (
    <Router>
      <footer>
        <Box>
          <FooterHeading>Footer Stuff</FooterHeading>
          <Container>
            <Row>
              <Column>
                <Heading>Home</Heading>
                <Link to="/">Home Page</Link>
              </Column>
              <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
                <FooterLink href="#">Internships</FooterLink>
                <FooterLink href="#">Coding</FooterLink>
                <FooterLink href="#">Teaching</FooterLink>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <Link to="/About">About</Link>
              </Column>
              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                  <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>Facebook</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>Instagram</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>Twitter</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>Youtube</span>
                  </i>
                </FooterLink>
              </Column>
            </Row>
          </Container>
        </Box>
      </footer>
    </Router>
  );
}

export default Footer;