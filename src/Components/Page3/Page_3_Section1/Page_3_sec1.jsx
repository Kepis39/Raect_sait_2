import { Photo } from "../../../Photo.js"
import "../Page_3_Section1/Page_3_sec1.scss"
export default function Page_3_Section1(){
return(
    <>
    <section class="Page_3_sect1">
     <div class="big_container">
        <div class="left_container">
         <div class="foto">
            <img src={Photo.Picture}/>
         </div>
         <div class="text">
            <p>Sed ut perspiciatis unde omnis iste natus<br/>
                 error sit voluptatem accusantium<br/>
                  doloremque laudantium, totam rem<br/>
                   aperiam, eaque ipsa quae ab illo inventore<br/>
                    veritatis et quasi architecto beatae vitae <br/>
                    dicta sunt explicabo. Nemo enim ipsam <br/>
                    voluptatem quia voluptas sit aspernatur aut<br/>
                     odit aut fugit.
            </p>
         </div>
        </div>
        <div class="right_container">
           <div class="container">
            <div class="slovo">
                <h2><span>Our</span><br/>
                 restautant</h2>
            </div>
            <div class="text_2">
            <p>Lorem ipsum dolor sit amet, consectetur<br/>
             adipiscing elit, sed do eiusmod tempor<br/>
              incididunt ut labore et dolore magna<br/>
               aliqua. Ut enim ad minim veniam, quis<br/>
                nostrud exercitation ullamco laboris nisi ut<br/>
                 aliquip ex ea commodo consequat. <br/>
             Duis aute irure dolor in reprehenderit in<br/>
              voluptate velit esse.</p>
            </div>
           </div>
           <div class="foto_2">
            <img src={Photo.Picturedh}/>
           </div>
        </div>
     </div>
    </section>
    </>
)
}