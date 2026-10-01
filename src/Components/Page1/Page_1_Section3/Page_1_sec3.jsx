import { Photo } from "../../../Photo.js"
import "../Page_1_Section3/Page_1_sec3.scss"
export default function Page_1_Section3(){
return(
    <>
    <section class="Page_1_sect3">
        <div class = "very_big_container">

         <div class ="zagolovok">
          <h2>Our popular menu</h2>
         </div>


        <div class = "knopki">
         <button>All catagory</button>
         <button>Dinner</button>
         <button>Lunch</button>
         <button>Dessert</button>
         <button>Drink</button>
        </div>

           <div class="container_menu">
            
           <div class="pozicia">
             <div class =" kartinka">
             <img src={Photo.fqwfqfqqfqfqfqfq}/>
             </div>
             <div class = "ocenka">
             <p>Spaghetti</p>
             <img src={Photo.Rating}/>
             </div>
             <div class = "text">
                <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Egestas consequat mi
                  eget auctor aliquam, diam. 
                  </p>
             </div>
             <div class="cena">
                <p>$12.05</p>
                <button>Order now</button>
             </div>
           </div>
             <div class="pozicia">
             <div class =" kartinka">
             <img src={Photo.MaskGroupfwfq}/>
             </div>
             <div class = "ocenka">
             <p>Gnocchi</p>
             <img src={Photo.Rating}/>
             </div>
             <div class = "text">
                <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Egestas consequat mi
                  eget auctor aliquam, diam. </p>
             </div>
             <div class="cena">
                <p>$12.05</p>
                <button>Order now</button>
             </div>
           </div>
             <div class="pozicia">
             <div class =" kartinka">
             <img src={Photo.MaskGrouptwo}/>
             </div>
             <div class = "ocenka">
             <p>Rovioli</p>
             <img src={Photo.Rating}/>
             </div>
             <div class = "text">
                <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Egestas consequat mi
                  eget auctor aliquam, diam. </p>
             </div>
             <div class="cena">
                <p>$12.05</p>
                <button>Order now</button>
             </div>
           </div>
             <div class="pozicia">
             <div class =" kartinka">
             <img src={Photo.MaskGroupthree}/>
             </div>
             <div class = "ocenka">
             <p>Penne Alla Vodak</p>
             <img src={Photo.Rating}/>
             </div>
             <div class = "text">
                <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Egestas consequat mi
                  eget auctor aliquam, diam. </p>
             </div>
             <div class="cena">
                <p>$12.05</p>
                <button>Order now</button>
             </div>
           </div>
             <div class="pozicia">
             <div class =" kartinka">
             <img src={Photo.MaskGroupfor}/>
             </div>
             <div class = "ocenka">
             <p>Risoto</p>
             <img src={Photo.Rating}/>
             </div>
             <div class = "text">
               <p> Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Egestas consequat mi
                  eget auctor aliquam, diam.</p> 
             </div>
             <div class="cena">
                <p>$12.05</p>
                <button>Order now</button>
             </div>
           </div>
             <div class="pozicia">
             <div class =" kartinka">
             <img src={Photo.MaskGroupfive}/>
             </div>
             <div class = "ocenka">
             <p>Splitza Signature</p>
             <img src={Photo.Rating}/>
             </div>
             <div class = "text">
                <p>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Egestas consequat mi
                  eget auctor aliquam, diam. </p>
             </div>
             <div class="cena">
                <p>$12.05</p>
                <button>Order now</button>
             </div>
           </div>
      </div>

       <div class="stranicii">
        <div class="left_button"><button><img src={Photo.Rectangleone}/></button></div>
        <div class="number_page_menu">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button class="pusto">...</button>
        </div>
        <div class="right_button"><button><img src={Photo.Rectangletwo}/></button></div>
       </div>
   
        </div>
    </section>
    </>
)
}
   