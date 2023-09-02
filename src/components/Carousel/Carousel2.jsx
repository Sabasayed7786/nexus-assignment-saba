import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Carousel.css"
 // Import the image files
import image2 from '../../Assets/images1/1.JPG';
import image3 from '../../Assets/images1/2.JPG';
import image4 from '../../Assets/images1/3.JPG';
import image5 from '../../Assets/images1/4.JPG';
import image6 from '../../Assets/images1/5.JPG';
import image7 from '../../Assets/images1/6.JPG';
import image8 from '../../Assets/images1/7.JPG';
import image9 from '../../Assets/images1/8.JPG';


const data = [
  
  {
    id: 2,
    username: 'item2',
    test: 'LucentFacial Concentarte',
    Description:'A Vitamin C-rich layring serum',
    image: image2,
  },
  {
    id: 3,
    username: 'item3',
    test: 'Purifying Facial Cream Cleanser',
    Description:'A daily cleanser for dry skin',
    image: image3,
  },
  {
    id: 4,
    username: 'item4',
    test: 'Camellia Nut Facial Hydrating Cream',
    Description:'Form normal, dry or sensitive skin',
    image: image4,
  },
  {
    id: 5,
    username: 'item5',
    test: 'Parsley Seed Anti-Oxidant Eye Cream',
    Description:'Noourishes dedicate skin around eyes',
    image: image5,
  },
  {
    id: 6,
    username: 'item6',
    test: 'B Triple C Facial Balancing Gel',
    Description:'Anti-Oxidant gel infused with Vitamin B and C',
    image: image6,
  },
  {
    id: 7,
    username: 'item7',
    test: 'Mandarin Facial Hydrating Cream',
    Description:'Rapidly absorbed, lightly hydrating',
    image: image7,
  },
  {
    id: 8,
    username: 'item8',
    test: 'Parsley Seed Anti-Oxidant Intenses Serum',
    Description:'A hydrating serum to bolster skin',
    image: image8,
  },
  {
    id: 9,
    username: 'item9',
    test: 'Parsley Seed Facial Cleanser',
    Description:'For those in polluted urban environments',
    image: image9,
  },
  
];

const Carousel2 = () => {
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
         <SwiperSlide >
          <div className="for-the-body-slide">
            <h2 >For the skin</h2>
            <p>Attention for all types</p>
            <p>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
            <a >See all Skin Care 
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

export default Carousel2;