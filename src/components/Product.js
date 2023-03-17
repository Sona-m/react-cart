import { useContext  , useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Product(props){

    const {product} = props;
    const {cart , setCart} = useContext(CartContext);
    const [isAdding , setIsAdding] = useState(false);

    function addToCart(product , event) {
        event.preventDefault();
        
        let _cart = {...cart}

        if(!_cart.items){
            _cart.items = {}
        }

        if(_cart.items[product._id]){
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }
       
        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);

        setTimeout(()=>{
             setIsAdding(false);
        }, 1000);
    }

    return(
       <Link to = {`react-cart/products/${product._id}`}>
        <div>
                <img src= {product.image} alt="pizza" />
                <div className="text-center">
                  <h2 className="font-bold text-lg py-2">{product.name}</h2>
                  <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>₹ {product.price}</span>
                    <button disabled = {isAdding} onClick = {(event)=>{addToCart(product , event)}} className= {`${ isAdding ? 'bg-green-500' : 'bg-yellow-500'} px-4 py-1 rounded-full font-bold`}>{isAdding ? 'ADDED' : 'ADD'}</button>
                </div>
        </div>
    </Link>

    )
}
export default Product;