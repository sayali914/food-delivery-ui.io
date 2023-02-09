import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../style/login.css'

const Login = () => {
  const loginNameRef = useRef()
  const loginPasswordRef = useRef()
  
  const submitHandler =e=>{
    e.preventDefault()
  }

  return <Helmet title='Login'>
    <CommonSection title='Login'/>
    <section>
    <Container>
      <Row>
        <Col lg='6' md='6'sm='12' className='m-auto text-center'>
          <form className='form mb-5'onSubmit={submitHandler}>
            <div className="form__group">
              <input type="email"placeholder='Email'required 
              ref={loginNameRef}></input>
            </div>
            <div className="form__group">
              <input type="password" placeholder='password'required
              ref={loginPasswordRef}></input>
            </div>
            <button type='submit'className='addToCart__btn'>Login</button>
          </form>
          <Link to='/register' className='link-text'>
            Don't have an account? Create an account
          </Link>
        </Col>
      </Row>
    </Container>
    </section>
  </Helmet>
}

export default Login