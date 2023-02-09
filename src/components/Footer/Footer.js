import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from "../../assets/images/res-logo.png";
import '../../style/footer.css'

const Footer = () => {
  return <footer className='footer'>
         <Container>
            <Row>
              <Col lg='3' md='4' sm='6'>
              <div className="footer__logo text-start">
                <img src={logo} alt="logo" />
                <h5>Tasty Treat</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                sed eiusmod tempor incidunt ut labore et
                 
                </p>
              </div>
              </Col>
              <Col lg='3' md='4' sm='6'>
                <h5 className='footer__title'>Delivery Time</h5>
                
                <ListGroup className='delivery__time-list'>
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Monday - friday</span>
                        <p>10:00 - 11.00</p>
                    </ListGroupItem>
                
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Saturday - Sunday</span>
                        <p>Off Day</p>
                    </ListGroupItem>
                </ListGroup>
              </Col>
              <Col lg='3' md='4' sm='6'>
              <h5 className='footer__title'>Contact</h5>
                
                <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                    <p>Location: Delhi-4311123</p>
                    </ListGroupItem>
                
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Phone: 99435647747</span>
                    </ListGroupItem>
                
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Email:foodelivery@gmail.com</span>
                    </ListGroupItem>
                </ListGroup>
              </Col>
              <Col lg='3' md='4' sm='6'>
              <h5 className='footer__title'>Newsletter</h5>
              <p>Subscribe our newsletter</p>
               <div className='newsletter'>
                <input type='email'placeholder='Enter your email'></input>
                <span><i class="ri-send-plane-line"></i></span>
               </div>
              </Col>
            </Row>
              <Row className='mt-5'>
                <Col lg='6'md='6'>
                <p className='copyright__text'>copyright - 2022 website made by sayuuu.All Rights reserved</p>
                </Col>
                <Col lg='6' md='6'>
                    <div className='social__links d-flex align-items-center gap-4 
                    justify-content-end'>
                     <p className='m-0'>Follow:</p>
                     <span>
                      <Link to='www.facebook.com'><i class="ri-facebook-line"></i></Link>
                      
                    </span>

                     <span>
                      <Link to='github.com'><i class="ri-github-fill"></i></Link>
                      
                      </span>

                     <span>
                      
                      <Link to='www.youtube.com'><i class="ri-youtube-line"></i></Link>
                      
                     </span>

                     <span>
                      <Link to='linkedin.com'><i class="ri-linkedin-line"></i></Link>
                      </span>

                    </div>

                </Col>
            </Row>
         </Container>
        </footer>
}

export default Footer