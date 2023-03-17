import Products from "../components/Products";
import Pizza from "../assets/pizza.png"
function Home(){

    
    return(
        <>
       <div className="hero  py-16 px-20">
          <div className="container flex mx-auto justify-between items-center">
             <div className="w-1/2 ml-20">
                <h6 className="text-lg"><em>Are Your hungry?</em></h6>
                <h1 className="text-3xl md : text-6xl font-bold">Don't wait !</h1>
                 <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
             </div>
             <div className="w-1/2">
                <img className="w-4/5" src={Pizza} alt="pizza-pic" />
             </div>
          </div>
       </div>
       <div className="pb-24">
         <Products />
       </div>
       </>
    )
}
export default Home;