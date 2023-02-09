import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../style/login.css'

const Register = () => {
  const signupNameRef = useRef()
  const signupPasswordRef = useRef()
  const signupEmailRef = useRef()
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
              <input type="text"placeholder='Full Name'required 
              ref={signupNameRef}></input>
            </div>
            <div className="form__group">
              <input type="email"placeholder='Email'required 
              ref={signupEmailRef}></input>
            </div>
            <div className="form__group">
              <input type="password" placeholder='password'required
              ref={signupPasswordRef}></input>
            </div>
            <button type='submit'className='addToCart__btn'>Sign Up</button>
          </form>
          <Link to='/login' className='link-text'>
            Already have an account? Login
          </Link>

        </Col>
      </Row>
    </Container>
    </section>
  </Helmet>
}

export default Register