import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/my-bitmoji.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/twitter.svg';
import navIcon5 from '../assets/img/mail.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo } alt="Logo" />
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/tanish-chaurasia-92a0731aa/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/ft-tanish"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ft.tanish/"><img src={navIcon3} alt="" /></a>
                <a href="https://twitter.com/ft_Tanish"><img src={navIcon4} alt="" /></a>
                <a href="mailto:tanishchaurasia6@gmail.com"><img src={navIcon5} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
