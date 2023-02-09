import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/heroimg.png";
import "../style/hero-section.css";
import Category from "../components/UI/category/Category.js";
import "../style/home.css";

import ProductCard from "../components/UI/product-card/ProductCard";
import products from "../assets/fake-data/products";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import whyImg from "../assets/images/location.png";
import networkImg from '../assets/images/network.png';

import TestimonialSlider from "../components/UI/slider/TestimonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur ",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur ",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur ",
  },
];
const Home = () => {
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);
  
  const [hotPizza,setHotPizza]=useState([]);

  useEffect(()=>{
    const filterPizza=products.filter(item =>item.category === 'Pizza')
    const slicePizza = filterPizza.slice(0,4)
    setHotPizza(slicePizza);
  },[])

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filterProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filterProducts);
    }
    if (category === "PIZZA") {
      const filterProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filterProducts);
    }
    if (category === "BREAD") {
      const filterProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filterProducts);
    }
  }, [category]);
  return (
    <Helmet title="Home">
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h5 className="mb-3">Easy way to make an order</h5>
              <h1 className="mb-4 hero__title">
                <span>HUNGRY?</span> Just wait <br /> food at
                <span> your door</span>
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                magni delectus tenetur autem, sint veritatis!
              </p>

              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className="order__btn d-flex align-items-center justify-content-between">
                  Order now <i class="ri-arrow-right-s-line"></i>
                </button>

                <button className="all__foods-btn">
                  <Link to="/foods">See all foods</Link>
                </button>
              </div>

              <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>{" "}
                  No shipping charge
                </p>

                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>{" "}
                  100% secure checkout
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="hero-img" className="w-100 mb-5" />
            </div>
          </Col>
        </Row>
      </Container>
      <Category />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature-subtitle">what we serve</h5>
              <h2 className="feature-title">just sit back home</h2>
              <h2 className="feature-title">
                we will<span> take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                magni delectus tenetur autem, sint veritatis!
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                magni delectus tenetur autem, sint veritatis!
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm='6'key={index} className="mt-5">
                <div className="feature-item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    className="w-25 mb-3"
                    alt="feature-img"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>

                <button
                  className={`d-flex align-items-center justify-content-center gap-2 
                    ${category === "BURGER" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center justify-content-center gap-2 
                    ${category === "PIZZA" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center justify-content-center gap-2 
                    ${category === "BREAD" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4"sm='6'xs='6' key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} className="w-100" alt=""></img>
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h5 className="tasty__treat-title mb-3">Why<span>Tasty Treat?</span> </h5>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i class="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i class="ri-checkbox-circle-line"></i>
                       Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  
                    </p>
                  </ListGroupItem>

                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map((item)=>(
                <Col lg='3'md='4'key={item.id}>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            
            <Col lg='6' md='6'>
              <div className="testimonial ">
              <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
              <h2 className="testimonial__title mb-4">what our <span>customers </span>are saying</h2>
              <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam
                </p>
                <TestimonialSlider/>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} className='w-100'alt=''/>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
    </Helmet>
  );
};

export default Home;
