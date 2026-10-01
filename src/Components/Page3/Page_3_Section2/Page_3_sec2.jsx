import { Photo } from "../../../Photo.js"
import "../Page_3_Section2/Page_3_sec2.scss"
export default function Page_3_Section2(){
return(
    <>
    <section class="Page_3_sect2">
<div class="big_container">
        <div class="left_container">
            <img src={Photo.unsplash}/>
        </div>
        <div class="right_container">
          <div class="container">
           <div class="text">
            <h2><span>Owner </span>&
             <br/>Executive Chef</h2>
           </div>
           <div class="text_2">
            <div class="slovo">
                <h3>Ismail Marzuki</h3>
            </div>
            <div class="AAAAAAAAAAAAAAAAAAAAAAAAAAAAA">
           <div class="kovichka_1"><h2>“</h2></div>
             <div class="text_3">
                <p>LLorem ipsum dolor sit amet,<br/>
              consectetur adipiscing elit, sed<br/>
               do eiusmod tempor incididunt ut<br/>
                labore et dolore magna aliqua. </p></div>
             <div class="kovichka_2"><h2>”</h2></div>
           </div>
           </div>
          </div>
        </div>
     </div>
    </section>
    </>
)
}