import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Carousel.css"
 // Import the image files
import image1 from '../../Assets/images2/a.JPG';
import image2 from '../../Assets/images2/b.JPG';
import image3 from '../../Assets/images2/c.JPG';
import image4 from '../../Assets/images2/d.JPG';
import image5 from '../../Assets/images2/e.JPG';
import image6 from '../../Assets/images2/f.JPG';
import image7 from '../../Assets/images2/g.JPG';
import image8 from '../../Assets/images2/h.JPG';



const data = [

    {
        id: 1,
        username: 'item2',
        test: 'Nature Bar Soap',
        Description:'Offers a mild yet cleanse',
        image: image1,
      },
  
  {
    id: 2,
    username: 'item2',
    test: 'Nature Bar Soap',
    Description:'Offers a mild yet cleanse',
    image: image2,
  },
  {
    id: 3,
    username: 'item3',
    test: 'Polish Bar Shop',
    Description:'Thorougly cleanses and exfoliates skin',
    image: image3,
  },
  {
    id: 4,
    username: 'item4',
    test: 'Refresh Bar Shop',
    Description:'Offers a thorough and enlivening cleanse',
    image: image4,
  },
  {
    id: 5,
    username: 'item4',
    test: 'Refresh Bar Shop',
    Description:'Offers a thorough and enlivening cleanse',
    image: image5,
  },
  {
    id: 6,
    username: 'item4',
    test: 'Refresh Bar Shop',
    Description:'Offers a thorough and enlivening cleanse',
    image: image6,
  },
  {
    id: 7,
    username: 'item4',
    test: 'Refresh Bar Shop',
    Description:'Offers a thorough and enlivening cleanse',
    image: image7,
  },
  {
    id: 8,
    username: 'item4',
    test: 'Refresh Bar Shop',
    Description:'Offers a thorough and enlivening cleanse',
    image: image8,
  },
];

const Carouse3 = () => {
  return (
    <div ClassName='swiper-container-wrapper'> 
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
    //   slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-container" 
      breakpoints={{
        // Configure breakpoints for different screen sizes
        640: {
          slidesPerView: 1, // Show 1 image per slide on smaller screens (mobile)
        },
        768: {
          slidesPerView: 2, // Show 2 images per slide on medium-sized screens (tablet)
        },
        1024: {
          slidesPerView: 3, // Show 3 images per slide on larger screens (desktop)
        },
      }}
    >
         <SwiperSlide>
          <div>
            <h2>For the Body</h2>
            <p>An expression of care</p>
            <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
            <a>See all Body Care 
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    class="arrow-icon"
  >
    <path
      d="M7.64645 3.14645C7.45118 2.95118 7.13468 2.95118 6.93942 3.14645C6.74415 3.34171 6.74415 3.65821 6.93942 3.85347L9.79289 6.70694H1C0.723858 6.70694 0.5 6.9308 0.5 7.20694C0.5 7.48308 0.723858 7.70694 1 7.70694H9.79289L6.93942 10.5604C6.74415 10.7557 6.74415 11.0722 6.93942 11.2675C7.13468 11.4628 7.45118 11.4628 7.64645 11.2675L12.091 6.82297C12.2863 6.62771 12.2863 6.31121 12.091 6.11594L7.64645 1.67147C7.45118 1.47621 7.13468 1.47621 6.93942 1.67147C6.74415 1.86674 6.74415 2.18324 6.93942 2.3785L10.7929 6.23197H1C0.723858 6.23197 0.5 6.45583 0.5 6.73197C0.5 7.00811 0.723858 7.23197 1 7.23197H10.7929L6.93942 11.0854C6.74415 11.2807 6.74415 11.5972 6.93942 11.7924C7.13468 11.9877 7.45118 11.9877 7.64645 11.7924L12.091 7.34791C12.2863 7.15265 12.2863 6.83615 12.091 6.64088L7.64645 3.14645Z"
      fill="currentColor"
    />
  </svg>
            </a>
          </div>
        </SwiperSlide>
      {data.map((item) => (
        <SwiperSlide key={item.id} className="swiper-slide2">
            
          <div>
            
            <img src={item.image} alt={`Image ${item.id}`} />
            <div><h4>{item.test}</h4></div>
            <div>{item.Description}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Carouse3;