import { Photo } from "../../../Photo.js"
import "../Page_1_Section2/Page_1_sec2.scss"
export default function Page_1_Section2(){
return(
    <>
    <section class="Page_1_sect2">
    <div class="big_container">

     <div class="left_container">
    <img src={Photo.MaskGroup}/>
    </div>
    <div class="right_container">
     <div class="slovo"><h2>Welcome to<br/><span>delizioso</span></h2></div>
     <div class ="text">
      <p>Lorem ipsum dolor sit amet, consectetur<br/> 
      adipiscing elit. Facilisis ultricies at eleifend<br/> 
       proin. Congue nibh nulla malesuada<br/> 
        ultricies nec quam </p>
     </div>
     <div class="knopki">
      <button>See our menu</button>
     </div>
    </div>
    </div>
    </section>
    </>
    )
}