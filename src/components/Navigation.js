import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import Cart from "../assets/cart.png"
import Logo from "../assets/logo.png"

function Navigation(){

  const { cart } = useContext(CartContext);

  const cartStyle = {
    display : 'flex',
    background : '#F59E0D',
    padding : '6px 12px',
    borderRadius : '50px'
    
  }

  
    return(
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-20">
       <Link to="">
          <img style ={{height : 45}}src={Logo} alt="logo" />
       </Link> 
       <ul className="flex items-center">
         <li className="mr-4"><Link to="">Home</Link></li>
         <li className="mr-4"><Link to="/products">Products</Link></li>
         <li>
          <Link to="/cart">
           <div  style={cartStyle}>
             <span className="mr-2">{cart.totalItems ? cart.totalItems : 0}</span>
             <img src={Cart} alt="cart-icon" />
           </div>
          </Link>
           
        </li>
      </ul>  

    </nav>
       
  </>
   
);}
export default Navigation;