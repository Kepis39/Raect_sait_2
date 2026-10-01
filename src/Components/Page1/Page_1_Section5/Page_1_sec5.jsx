import { Photo } from "../../../Photo.js"
import "../Page_1_Section5/Page_1_sec5.scss"
export default function Page_1_Section5(){
return(
    <>
    <section class="Page_1_sect5">
     <div class="big_container">

      <div class="text">
        <h2>Our greatest chef</h2>
      </div>

      <div class="povara">
      <div class="povar_1">
        <img src={Photo.imageone}/>
        <p>
            Betran Komar
            <span>Head chef</span>
        </p>
      </div>
      <div class="povar_2">
        <img src={Photo.imagethree}/>
        <p>
            Ferry Sauwi
            <span>Chef</span>
        </p>
      </div>
      <div class="povar_3">
         <img src={Photo.imagetwo}/>
         <p>
            Iswan Dracho
            <span>Chef</span>
        </p>
      </div>
      </div>
      <div class="knopka">
       <button>View all</button>
      </div>
     </div>
     </section>
    </>
)
}
