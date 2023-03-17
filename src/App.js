import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState , useEffect  } from "react";
import { getCart , storeCart } from "./helper";

function App() {

  const [cart , setCart] = useState({});
  
  // fetch cart from local storage
  useEffect(()=>{
    getCart().then((cart)=>{
      setCart(JSON.parse(cart));
    })
    
  } , []);


  useEffect(()=>{
    
    storeCart( JSON.stringify(cart));
    

  } , [cart]);


  return (
    <>
      <BrowserRouter>
       <CartContext.Provider value = {{ cart , setCart }}>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} exact  />
          <Route path="/react-cart" Component={Home} exact  />
          <Route path="/products/" exact Component={ProductsPage} />
          <Route path="react-cart/products/" exact Component={ProductsPage} />
          <Route path="/products/:_id"  Component={SingleProduct} />
          <Route path="react-cart/products/:_id"  Component={SingleProduct} />
          <Route path="/cart" Component={Cart} />
          <Route path="react-cart/cart" Component={Cart} />
        </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
