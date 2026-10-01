import { Photo } from "../../../Photo.js"
import "../Page_1_Section4/Page_1_sec4.scss"
export default function Page_1_Section4(){
return(
    <>
    <section class="Page_1_sect4">
     <div class="big_container">
     <div class="left_container"> 
      <div class = "foto_container">
       <div class="top_foto"> <img src={Photo.Picturehgr}/></div>
       <div  class="mid_foto"> <img src={Photo.Picturefdw}/></div>
       <div  class="bottom_foto"> <img src={Photo.Picturefwq}/></div>
      </div>
     </div>
     <div class="right_container">
        <div class="slovo">
            <h2>Let's reserve<br/> <span>a table</span> </h2>
        </div>
        <div class="text">
         <p>Lorem ipsum dolor sit amet, consectetur<br/> 
         adipiscing elit. Facilisis ultricies at eleifend<br/> 
          proin. Congue nibh nulla malesuada<br/> 
           ultricies nec quam </p>
        </div>
        <div class="knopka">
         <button>Reservation</button>
        </div>
     </div>
     </div>
    </section>
    </>
    )
}