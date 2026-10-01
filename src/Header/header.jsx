
 import { Link } from "react-router-dom"
import { Photo } from "../Photo.js"
import "../Header/header.scss"
export default function Header(){
    return(
        <>
         <header>
            <nav>
               <div class = "left_container">
                  <p class = "bukva"><strong>D</strong></p>
                  <p class = "slovo">Delizi<span>oso</span></p>
               </div>
               <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Page2">Menu</Link></li>
            <li><Link to="/Page3">About us</Link></li>
            <li><Link>Order online</Link></li>
            <li><Link>Reservation</Link></li>
            <li><Link>Contact us</Link></li>
               </ul>
               <div class = "right_container">
                  <img src={Photo.Cart}/>
                  <button>Log in</button>
               </div>
            </nav>
        </header>
        </>
    )
    }
