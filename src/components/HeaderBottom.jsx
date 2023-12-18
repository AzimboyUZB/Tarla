import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

function HeaderBottom() {
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="title">
          <h1 className="title__name">Fresh pastry kits</h1>
          <h6 className="title__text">
            Bringing the smells and tastes of your favourite patisserie to your home. Our kits have
            everything you need to easily make killer pastries every time. We’ve done the tricky bits so
            all you need to do is roll, proof and bake!
          </h6>
          <button className="title__btn">Shop pastry kits</button>

        </div>
        
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><img className="photo" src="https://i.ibb.co/b28m5Zc/Rectangle-3.png" /></SwiperSlide>
          <SwiperSlide><img className="photo" src="https://i.ibb.co/b28m5Zc/Rectangle-3.png" /></SwiperSlide>
          <SwiperSlide><img className="photo" src="https://i.ibb.co/b28m5Zc/Rectangle-3.png" /></SwiperSlide>
          <SwiperSlide><img className="photo" src="https://i.ibb.co/b28m5Zc/Rectangle-3.png" /></SwiperSlide>
          <SwiperSlide><img className="photo" src="https://i.ibb.co/b28m5Zc/Rectangle-3.png" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HeaderBottom