import { Photo } from "../../../Photo.js"
import "../Page_1_Section6/Page_1_sec6.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Page_1_Section6(){
return(
    <>
    <section class="Page_1_sect6">
        
     <div class="big_container">
           <div class="text">
            <h2>Our customers say</h2>
           </div>
             <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                initialSlide={0}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
            <SwiperSlide>
                 
            </SwiperSlide>
            <SwiperSlide><div class="foto_container">
            <div class="foto">
            <img src={Photo.Ellipse}/>
            </div>
            <div class="text_2">
               <p>
                Starla Virgoun
                <span>Financial advisor</span>
               </p>
            </div>
           </div>

           <div class="text_3">
             <div class="kovichka_1"><h2>“</h2></div>
             <div class="text_4"><p>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit. Facilisis ultricies at eleifend proin. Congue nibh 
                 nulla malesuada ultricies nec quam </p></div>
             <div class="kovichka_2"><h2>”</h2></div>
           </div></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide><div class="foto_container">
            <div class="foto">
            <img src={Photo.Ellipse}/>
            </div>
            
            <div class="text_2">
               <p>
                Starla Virgoun
                <span>Financial advisor</span>
               </p>
            </div>
           </div>

           <div class="text_3">
             <div class="kovichka_1"><h2>“</h2></div>
             <div class="text_4"><p>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit. Facilisis ultricies at eleifend proin. Congue nibh 
                 nulla malesuada ultricies nec quam </p></div>
             <div class="kovichka_2"><h2>”</h2></div>
           </div></SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
          

           <div class="users">
            <img src={Photo.User}/>
           </div>
     </div>
    </section>
    </>
)
}
