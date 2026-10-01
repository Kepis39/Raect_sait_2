import { Photo } from "../../../Photo.js"
import "../Page_1_Section1/Page_1_sec1.scss"

export default function Page_1_Section1(){
return(
    <>
    <section class="Page_1_sect1">
    <div class="big_container">
    <div class="left_container">
     <div class="slovo"><p>Restauran</p></div>
     <div class ="text">
      <h1>Italian Cuisine</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> 
      elit. Sodales senectus dictum arcu sit tristique<br/> 
       donec eget.</p>
     </div>
     <div class="knopki">
      <button class="left_button">Order now</button>
      <button class="right_button">Reservation</button>
     </div>
    </div>
    <div class="right_container">
    <img src={Photo.Illustration}/>
    </div>
    </div>
    </section>
    </>
)
}