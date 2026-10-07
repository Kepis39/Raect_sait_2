import { Photo } from "../../../Photo.js"
import "../Page_2_Section1/Page_2_sec1.scss"
import { useState, useEffect } from 'react';
const items=[
   {id:1, title:"Spaghetti", category: [ "Dinner","Lunch"], image:"fqwfqfqqfqfqfqfq"},
   {id:2, title:"Gnocchi", category: "Lunch", image:"MaskGroupfwfq"},
   {id:3, title:"Rovioli", category: "Dessert", image:"MaskGrouptwo"},
   {id:4, title:"Penne Alla Vodak", category:[ "Dinner","Drink","Lunch","Dessert"], image:"MaskGroupthree"},
   {id:5, title:"Risoto", category:"Dinner", image:"MaskGroupfor"},
   {id:6, title:"Splitza Signature", category:[ "Dinner","Dessert","Drink"], image:"MaskGroupfive"},
]
export default function Page_1_Section3(){
    const [activeTab, setActiveTab] = useState("all");
     const [visibleItems, setVisibleItems] = useState([]);
   
     useEffect(() => {
       if (activeTab === "all") {
         setVisibleItems(items);
       } else {
         setVisibleItems(items.filter(item => item.category.includes(activeTab)));
       }
     }, [activeTab]);
return(
    <>
    <section class="Page_2_sect1">
        <div class = "very_big_container">

         <div class ="zagolovok">
          <h2>Menu</h2>
         </div>


       <div class = "knopki">
         <button  onClick={() => setActiveTab("all")}>All catagory</button>
         <button  onClick={() => setActiveTab("Dinner")}>Dinner</button>
         <button  onClick={() => setActiveTab("Lunch")}>Lunch</button>
         <button  onClick={() => setActiveTab("Dessert")}>Dessert</button>
         <button  onClick={() => setActiveTab("Drink")}>Drink</button>
        </div>

           <div class="container_menu">
             {visibleItems.map(item => (
           <div class="pozicia">
             <div class =" kartinka" key={item.id}>
             <img src={Photo[item.image]} alt={item.title}/>
             </div>
             <div class = "ocenka">
             <p>{item.title}</p>
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
            ))}
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
