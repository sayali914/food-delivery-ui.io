import React from "react";
import Slider from "react-slick";
import avaImg1 from '../../../assets/images/ava-1.jpg';
import avaImg2 from '../../../assets/images/ava-2.jpg';
import avaImg3 from '../../../assets/images/ava-3.jpg';
import '../../../style/slider.css'
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlides: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
        perspiciatis saepe ad impedit molestias temporibus maiores tenetur a
        dolor neque perferendis, libero totam eius, nostrum eveniet adipisci
        enim facere commodi?</p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={avaImg1} alt="avatar"className=" rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
        perspiciatis saepe ad impedit molestias temporibus maiores tenetur a
        dolor neque perferendis, libero totam eius, nostrum eveniet adipisci
        enim facere commodi?</p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={avaImg2} alt="avatar" className="rounded" />
          <h6>Michell Marsh</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
        perspiciatis saepe ad impedit molestias temporibus maiores tenetur a
        dolor neque perferendis, libero totam eius, nostrum eveniet adipisci
        enim facere commodi?</p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={avaImg3} alt="avatar" className=" rounded"/>
          <h6>Steven Crock</h6>
          
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
