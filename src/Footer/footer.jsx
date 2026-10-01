import "../Footer/footer.scss"
import { Photo } from "../Photo.js"
export default function Footer(){
    return(
<>
<footer>
    <div class="big_container">
 <div class="left_container">
        <div class = "text">
            <p class = "bukva"><strong>D</strong></p>
            <p class = "slovo">Delizi<span>oso</span></p>
       </div>
       <div class = "text_2">
        <p>Viverra gravida morbi egestas<br/> 
        facilisis tortor netus non duis<br/>
        tempor. </p>
       </div>
       <div class = "socseti">
        <img src={Photo.twiter}/>
        <img src={Photo.Instagram}/>
        <img src={Photo.Facebook}/>
       </div>
 </div>
 <div class ="colonki"> 
<div class="colonka">
<ul>
    <li><span><strong>Page</strong></span></li>
    <li>Home</li>
    <li>Menu</li>
    <li>Order online</li>
    <li>Catering</li>
    <li>Reservation</li>
</ul>
</div>
<div class="colonka">
<ul>
    <li><span><strong>Information</strong></span></li>
    <li>About us</li>
    <li>Testimonial</li>
    <li>Event</li>
</ul>
</div>
<div class="colonka">
<ul>
    <li><span><strong>Information</strong></span></li>
    <li>About us</li>
    <li>Testimonial</li>
    <li>Event</li>
</ul>
</div>
<div class="colonka">
<ul>
    <li><span>Get in touch</span></li>
    <li>3247 Johnson Ave, Bronx, NY<br/> 10463, Amerika Serikat</li>
    <li>delizioso@gmail.com</li>
    <li>+123 4567 8901</li>
</ul>
</div>
 </div>
</div>
<div class="slovo_2">
<p>Copyright@2022 Delizioso</p>
</div>
</footer>
</>
)
}