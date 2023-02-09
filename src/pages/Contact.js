import React from 'react'
import { Container,Col,Row} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

const Contact = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
  }
  return <Helmet title='contact'>
       <CommonSection title='Contact Us'/>
       <section>
        <Container>
          <Row>
            <Col lg='6'md='6'sm='6'xs='12'className='m-auto text-center'>
            <form className='form mb-5'onSubmit={submitHandler}>
            <div className="form__group">
              <input type="text"placeholder='Name'required 
            ></input>
            </div>
            <div className="form__group">
              <input type="text" placeholder='Email'required
              ></input>
            </div>
            <div className="form__group">
              <input type="text" placeholder='Message'required
              ></input>
            </div>
            <button type='submit'className='addToCart__btn'>Submit</button>
          </form>
            </Col>
          </Row>
        </Container>
       </section>
  </Helmet>
}

export default Contact